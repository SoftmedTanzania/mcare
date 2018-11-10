/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis_record_type_categories's controller class.
It receives calls from the "DiagnosisRecordTypeCategoriesRoutes" class and
passes the calls down to the "DiagnosisRecordTypeCategoriesModel" class

*/



const DiagnosisRecordTypeCategoriesModel = require('../../models/diagnosis/DiagnosisRecordTypeCategoriesModel.js');




module.exports = class DiagnosisRecordTypeCategoriesController{
    constructor(){

    }
	
	
	
	
	
   insert_diagnosis_record_type_categories(jsonObject_,callback){
     const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
     myDiagnosisRecordTypeCategoriesObject.insert_diagnosis_record_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
	
	
   get_all_diagnosis_record_type_categories(callback){
        const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
        myDiagnosisRecordTypeCategoriesObject.get_all_diagnosis_record_type_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   get_specific_diagnosis_record_type_categories(ColumnName,value_,callback){
         const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
        myDiagnosisRecordTypeCategoriesObject.get_specific_diagnosis_record_type_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   batch_diagnosis_record_type_categories_update(jsonObject_,callback){
        const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
        
		myDiagnosisRecordTypeCategoriesObject.batch_diagnosis_record_type_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   individual_diagnosis_record_type_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
        
		myDiagnosisRecordTypeCategoriesObject.individual_diagnosis_record_type_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   delete_diagnosis_record_type_categories_record(ColumnName,value_,callback){
        const  myDiagnosisRecordTypeCategoriesObject=new DiagnosisRecordTypeCategoriesModel();
        
		myDiagnosisRecordTypeCategoriesObject.delete_diagnosis_record_type_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}