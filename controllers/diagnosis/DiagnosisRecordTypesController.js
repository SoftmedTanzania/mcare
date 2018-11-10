/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis_record_types's controller class.
It receives calls from the "DiagnosisRecordTypesRoutes" class and
passes the calls down to the "DiagnosisRecordTypesModel" class

*/


const DiagnosisRecordTypesModel = require('../../models/diagnosis/DiagnosisRecordTypesModel.js');




module.exports = class DiagnosisRecordTypesController{
    constructor(){

    }
	
	

	
	
	
   insert_diagnosis_record_types(jsonObject_,callback){
     const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
     myDiagnosisRecordTypesObject.insert_diagnosis_record_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
   get_all_diagnosis_record_types(callback){
        const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
        myDiagnosisRecordTypesObject.get_all_diagnosis_record_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   get_specific_diagnosis_record_types(ColumnName,value_,callback){
        const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
        myDiagnosisRecordTypesObject.get_specific_diagnosis_record_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_diagnosis_record_types_update(jsonObject_,callback){
        const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
        
		myDiagnosisRecordTypesObject.batch_diagnosis_record_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   individual_diagnosis_record_types_update(ColumnName,value_,jsonObject_,callback){
        const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
        
		myDiagnosisRecordTypesObject.individual_diagnosis_record_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   delete_diagnosis_record_types_record(ColumnName,value_,callback){
        const myDiagnosisRecordTypesObject=new DiagnosisRecordTypesModel();
        
		myDiagnosisRecordTypesObject.delete_diagnosis_record_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
		
		
	
	
	
}