import HeaderFirst from "../headerFirst/headerFirst";
import HeaderSecond from "../headerSecond/headerSecond";
import UnderHeaderFirstBox from "../underHeaderFirstBox/underHeaderFirstBox";
import UnderHeaderSecondBox from "../underHeaderSecondBox/underHeaderSecondBox";
import ServiceCause from "../serviceCause/serviceCause";
import MalfunctionDefinition from "../malfunctionDefinition/malfunctionDefinition";
import DefectivePartSerialNumber from "../defectivePartSerialNumber/defectivePartSerialNumber";
import AdditionalThingsToDo from "../additionalThingsToDo/additionalThingsToDo";
import SubmitButton from "../submitButton/submitButton";
import Signatures from "../signatures/signatures";
import AddVisualButton from "../addVisualButton/addVisualButton";
import ShowVisuals from "../showVisuals/showVisuals";
import List from "../list/list";
import "./mainForm.css";

function MainForm() {
  return (
    <div className="main-form-container container ">
      <div className="row">
        <div className="col-12 col-md-6">
          <HeaderFirst />
        </div>
        <div className="col-12 col-md-6">
          <HeaderSecond />
        </div>
      </div>
      <div className="row mt-3 d-flex ">
        <div className="col-12 col-md-6">
          <UnderHeaderFirstBox />
        </div>
        <div className="col-12 col-md-6">
          <UnderHeaderSecondBox />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <ServiceCause />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <MalfunctionDefinition />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <DefectivePartSerialNumber />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <AdditionalThingsToDo />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <List />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <Signatures />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <ShowVisuals />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-3">
        <div className="d-flex justify-content-center align-items-center">
          <AddVisualButton />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}
export default MainForm;
