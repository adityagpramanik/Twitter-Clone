# Twitter Clone

## Steps to run the project

### 1. Setting up the server
**==> */server is the backend folder***, backend is developed using Node Js with help of various libraries such as Express.JS, bcrypt etc.
1. open terminal in the folder server and run the following command to install all dependencies:
`npm i`
2. download and install *PostgreSQL(psql)*, while configuring it create and write down the password for admin and **postgres user**.
3. create **.env** file in 'server/' with following entries
```
DB_KEY=<postregSQL-Password>
JWT_SECRET=<ask-from-repo-owner>
```

Try installing CLI of the psql for easy configuration, but GUI will also do the work.
4. All set, now you can start server:
`npm run dev`

### 2. Setting up the frontend
**==> */twitter is the frontend folder***, frontend is developed using React Framework.
***/twitter/public*** is the build folder which need not to be explicitly changed
***/twitter/src*** contains frontend source code which includes index.js, app.js, components and supporting files.

1. install all the dependencies by running the following command:
`npm i`
2. run the live preview of the frontend using:
`npm run test`