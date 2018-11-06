/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_type_categories's controller class.
It receives calls from the "PatientTypeCategoriesRoutes" class and
passes the calls down to the "PatientTypeCategoriesModel" class

*/


const PatientTypeCategoriesModel = require('../../models/patient_management/PatientTypeCategoriesModel.js');


module.exports = class PatientTypeCategoriesController{
    constructor(){

    }
	
	
	
	
insert_patient_type_categories(jsonObject_,callback){
     const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
     myPatientTypeCategoryObject.insert_patient_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	

	
	
	
	
	
get_all_patient_type_categories(callback){
        const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
        myPatientTypeCategoryObject.get_all_patient_type_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }	
	
	
	

	
get_specific_patient_type_categories(ColumnName,value_,callback){
        const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
        myPatientTypeCategoryObject.get_specific_patient_type_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	
	
	
batch_patient_type_categories_update(jsonObject_,callback){
        const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
        
		myPatientTypeCategoryObject.batch_patient_type_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
		
	

	
	
individual_patient_type_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
        
		myPatientTypeCategoryObject.individual_patient_type_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	
	
	
delete_patient_type_categories_record(ColumnName,value_,callback){
        const  myPatientTypeCategoryObject=new PatientTypeCategoriesModel();
        
		myPatientTypeCategoryObject.delete_patient_type_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}