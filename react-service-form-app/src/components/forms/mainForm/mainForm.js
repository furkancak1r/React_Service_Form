import "./mainForm.css";
import HeaderFirst from "../headerFirst/headerFirst";
import HeaderSecond from "../headerSecond/headerSecond";
import UnderHeaderFirstBox from "../underHeaderFirstBox/underHeaderFirstBox";
function MainForm() {
  return (
    <div className="main-form-container container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <HeaderFirst />
        </div>
        <div className="col-md-6 col-sm-6">
          <HeaderSecond />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <UnderHeaderFirstBox />
        </div>
        <div className="col-md-6 col-sm-6">2 of 3</div>
      </div>
   </div>

   
  );
}
export default MainForm;
