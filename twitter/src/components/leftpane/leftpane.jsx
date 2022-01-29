import "./leftpane.css";
import Header from "../header";

const LeftPane = () => {
  return (
    <div className="container m-0 p-0" style={{ minHeight: "100%" }}>
      <div className="row border-bottom">
        <Header />
      </div>
      <div className="row pb-3 pt-3 border-bottom">
        <div className="container m-3 text-center">@username</div>
        <div className="container m-3 text-center">messages</div>
        <div class="container text-center">
          <div className="row">
            <div className="col" style={{ textAlign: "right" }}>
              Privacy
            </div>
            <div className="col" style={{ textAlign: "left" }}>
              Policy
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-3 pt-3 border-bottom">
        <div className="container m-3 text-center">
        copyright
          <i class="fa fa-copyright p-1" aria-hidden="true"> 2022</i>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
