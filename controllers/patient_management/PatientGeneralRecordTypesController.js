/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_record_types's controller class.
It receives calls from the "PatientGeneralRecordTypesRoutes" class and
passes the calls down to the "PatientGeneralRecordTypesModel" class

*/



const PatientGeneralRecordTypesModel = require('../../models/patient_management/PatientGeneralRecordTypesModel.js');


module.exports = class PatientGeneralRecordTypesController{
    constructor(){

    }
	
	
	
	
   insert_patient_general_record_types(jsonObject_,callback){
     const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
     myPatientGeneralRecordTypesObject.insert_patient_general_record_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
   get_all_patient_general_record_types(callback){
        const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
        myPatientGeneralRecordTypesObject.get_all_patient_general_record_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_patient_general_record_types(ColumnName,value_,callback){
         const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
         myPatientGeneralRecordTypesObject.get_specific_patient_general_record_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_patient_general_record_types_update(jsonObject_,callback){
        const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
        
		myPatientGeneralRecordTypesObject.batch_patient_general_record_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
   individual_patient_general_record_types_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
        
		myPatientGeneralRecordTypesObject.individual_patient_general_record_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   delete_patient_general_record_types_record(ColumnName,value_,callback){
        const  myPatientGeneralRecordTypesObject=new PatientGeneralRecordTypesModel();
        
		myPatientGeneralRecordTypesObject.delete_patient_general_record_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
}