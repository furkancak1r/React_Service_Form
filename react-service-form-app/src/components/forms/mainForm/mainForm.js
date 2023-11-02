import "./mainForm.css";
import HeaderFirst from "../headerFirst/headerFirst";
import HeaderSecond from "../headerSecond/headerSecond";
function MainForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <HeaderFirst />
        </div>
        <div className="col-md-6">
          <HeaderSecond />
        </div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  );
}
export default MainForm;
