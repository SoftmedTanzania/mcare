/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_records's controller class.
It receives calls from the "PatientGeneralRecordsRoutes" class and
passes the calls down to the "PatientGeneralRecordsModel" class

*/



const PatientGeneralRecordsModel = require('../../models/patient_management/PatientGeneralRecordsModel.js');


module.exports = class PatientGeneralRecordsController{
    constructor(){

    }
	
	
	
   insert_patient_general_records(jsonObject_,callback){
     const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
     myPatientGeneralRecordsObject.insert_patient_general_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_patient_general_records(callback){
        const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
        myPatientGeneralRecordsObject.get_all_patient_general_records(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }	
		
	
	
	
	
   get_specific_general_records(ColumnName,value_,callback){
         const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
        myPatientGeneralRecordsObject.get_specific_general_records(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   batch_patient_general_records(jsonObject_,callback){
        const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
        
		myPatientGeneralRecordsObject.batch_patient_general_records(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
   individual_patient_general_records_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
        
		myPatientGeneralRecordsObject.individual_patient_general_records_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   delete_patient_patient_general_records_record(ColumnName,value_,callback){
        const  myPatientGeneralRecordsObject=new PatientGeneralRecordsModel();
        
		myPatientGeneralRecordsObject.delete_patient_patient_general_records_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
}
	