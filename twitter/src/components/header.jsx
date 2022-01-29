import { FaSistrix } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container m-3 p-3">
      <div className="row-3">
        <div className="col text-center mb-5">
          <AiFillTwitterCircle size={70} color={"blue"}/>
        </div>
      </div>
      <div className="row-3">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <div className="ml-2">
            <button type="button" className="btn btn-primary">
              <FaSistrix />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
