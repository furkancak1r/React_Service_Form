import "./mainForm.css";
import HeaderFirst from "../headerFirst/headerFirst";
import HeaderSecond from "../headerSecond/headerSecond";
import UnderHeaderFirstBox from "../underHeaderFirstBox/underHeaderFirstBox";
import UnderHeaderSecondBox from "../underHeaderSecondBox/underHeaderSecondBox";
function MainForm() {
  return (
    // col-12 col-sm col-md-6 col-lg col-xl
    <div className="main-form-container container">
      <div className="row">
        <div className="col-12 col-md-6">
          
          <HeaderFirst />
        </div>
        <div className="col-12 col-md-6">
          <HeaderSecond />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <UnderHeaderFirstBox />
        </div>
        <div className="col-12 col-md-6"><UnderHeaderSecondBox/></div>
      </div>
   </div>

   
  );
}
export default MainForm;
