/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_record_type_categories's controller class.
It receives calls from the "PatientGeneralRecordTypeCategoriesRoutes" class and
passes the calls down to the "PatientGeneralRecordTypeCategoriesModel" class

*/




const PatientGeneralRecordTypeCategoriesModel = require('../../models/patient_management/PatientGeneralRecordTypeCategoriesModel.js');


module.exports = class PatientGeneralRecordTypeCategoriesController{
    constructor(){

    }
	
	
	

     insert_patient_general_record_type_categories(jsonObject_,callback){
     const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
     myPatientGeneralRecordTypeCategoriesObject.insert_patient_general_record_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
	
        get_all_patient_general_record_type_categories(callback){
        const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
        myPatientGeneralRecordTypeCategoriesObject.get_all_patient_general_record_type_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
       }		
	
	
	
	
   get_specific_patient_general_record_type_categories(ColumnName,value_,callback){
         const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
        myPatientGeneralRecordTypeCategoriesObject.get_specific_patient_general_record_type_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_patient_general_record_type_categories_update(jsonObject_,callback){
        const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
        
		myPatientGeneralRecordTypeCategoriesObject.batch_patient_general_record_type_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   individual_patient_general_record_type_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
        
		myPatientGeneralRecordTypeCategoriesObject.individual_patient_general_record_type_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   delete_patient_general_record_type_categories_record(ColumnName,value_,callback){
        const  myPatientGeneralRecordTypeCategoriesObject=new PatientGeneralRecordTypeCategoriesModel();
        
		myPatientGeneralRecordTypeCategoriesObject.delete_patient_general_record_type_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
}