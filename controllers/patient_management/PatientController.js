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

    getAllPatients(callback){
        const  myPatientObject=new PatientModel();
        myPatientObject.getAllPatients(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }

    getSpecificPatients(ColumnName,value_,callback){
        const  myPatientObject=new PatientModel();
        myPatientObject.getSpecificPatients(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	batch_patients_update(jsonObject_,callback){
        const  myPatientObject=new PatientModel();
        
		myPatientObject.batch_patients_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }


}