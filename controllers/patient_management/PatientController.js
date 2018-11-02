var PatientModel = require('../../models/patient_management/PatientModel.js');
var myPatientObject;
var surname="r";
var middleName="r";
var lastName="r";
var patientPhoneNumber="r";
var patientEmail="r";
var patientPhysicalAddress="r";
var patientDOB="2018-11-13";
var patientReferenceNo="r";                                                                                                                                                                                                                                                                                                                                                                                                                           
var parentId="r";
var deceased=1;
var patientPicUrl="r";
var actualImage="r";
module.exports = class PatientController{
	constructor(){
    
 }
	insertPatient(){
    myPatientObject=new PatientModel(surname,middleName,lastName,patientPhoneNumber,patientEmail,patientPhysicalAddress,patientDOB,patientReferenceNo,parentId,deceased,patientPicUrl,actualImage);
myPatientObject.insert();
	}

};