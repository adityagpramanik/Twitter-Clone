const express = require("express");
const app = express();
const cors = require('cors');
const pool = require('./db');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');
const verify = require('./routes/verifyToken');
const cookieParser = require('cookie-parser');

// middleware
app.use(cors({
    origin: ["http://localhost:3001"]
}));
app.use(express.json());
app.use(cookieParser());

// routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let userExists = await pool.query("select * from users where email = $1", [email]);
        if (userExists.rows.length == 0)
            res.status(401).json({ errorMessage: "user doesn\'t exists" });
        else {
            try {
                const values = [email, password];
                const queryText = "select * from users where email = $1 and password = $2";
                let queryResult = await pool.query(queryText, values);

                if (queryResult.rowCount == 0) {
                    console.log("Wrong email or password");
                    res.status(401).json({ errorMessage: "Wrong email or password" });
                }
                else {
                    console.log("user authenticated");
                    // res.status(200).json({ message: "user authenticated", uid: queryResult.rows[0].uid });
                    const token = jwt.sign({
                        uid: queryResult.rows[0].uid
                    }, process.env.JWT_SECRET);
                    res.cookie("token", token, { httpOnly: true }).send();
                    // res.header("token", token).send(token);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }
    } catch (error) {
        res.status(401).send(error.message);
    }
});

app.get("/logout", async (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) }).send();
});

app.post("/register", async (req, res) => {
    const { email, password, name, date } = req.body;

    let queryResult = await pool.query("select * from users where email = $1", [email]);

    if (queryResult.rows.length >= 1) {
        console.log(queryResult.rows);
        res.send("user already exists");
    }
    else {
        const uid = v4();
        const values = [uid, name, email, password, date];
        const queryText = "insert into users (uid, name, email, password, date) values($1, $2, $3, $4, $5)";

        let user = await pool.query(queryText, values);

        // sign token
        const token = jwt.sign({
            user: uid
        }, process.env.JWT_SECRET);
        console.log(token);

        // send the token in http-only cookie
        res.cookie("token", token, { httpOnly: true }).send();
        // res.header("token", token).send();
        console.log("Successfully created user");
        // res.send("user successfully created\n" + user.rows);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const query = "delete from users where uid = $1";

    try {
        let result = await pool.query(query, [id]);
        console.log("user " + id + " deleted successfully");
        console.log(result);
        res.send("user " + id + " deleted");
    } catch (error) {
        console.log("user doesn't exists");
        res.send("user doesn't exists");
    }
});

app.get("/users", verify, async (req, res) => {
    const query = "select * from users";
    let result = await pool.query(query);

    res.send(result.rows);
});

app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    const query = "select * from users where uid = $1";
    let result = await pool.query(query, [id]);

    res.send(result.rows);
});

app.listen(3001, () => {
    console.log("Server started listening at port 3001");
})