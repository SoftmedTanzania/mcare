const PatientModel = require('../../models/patient_management/PatientModel.js');
var surname="Onyango";
var middleName="Silas";
var lastName="Konyango";
var patientPhoneNumber="r";
var patientEmail="r";
var patientPhysicalAddress="r";
var patientDOB="2018-11-13";
var patientReferenceNo="r";                                                                                                                                                                                                                                                                                                                                                                                                                           
var parentId=1;
var deceased=1;
var patientPicUrl="r";
var actualImage="r";

module.exports = class PatientController{
	constructor(){
    
 }
	insertPatient(){
  const  myPatientObject=new PatientModel(surname,middleName,lastName,patientPhoneNumber,patientEmail,patientPhysicalAddress,patientDOB,patientReferenceNo,parentId,deceased,patientPicUrl,actualImage);
myPatientObject.insert();
	}

    getAllPatients(){
        const  myPatientObject=new PatientModel();
        myPatientObject.getAllPatients();
    }

    getSpecificPatients(ColumnName,value_){
        const  myPatientObject=new PatientModel();
        myPatientObject.getSpecificPatients(ColumnName,value_);
    }

};