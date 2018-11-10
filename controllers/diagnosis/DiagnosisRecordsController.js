/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis_records's controller class.
It receives calls from the "DiagnosisRecordsRoutes" class and
passes the calls down to the "DiagnosisRecordsModel" class

*/



const DiagnosisRecordsModel = require('../../models/diagnosis/DiagnosisRecordsModel.js');


module.exports = class DiagnosisRecordsController{
    constructor(){

    }
	
	
	
	
   insert_diagnosis_records(jsonObject_,callback){
     const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
     myDiagnosisRecordsObject.insert_diagnosis_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
   get_all_diagnosis_records(callback){
        const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
        myDiagnosisRecordsObject.get_all_diagnosis_records(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_diagnosis_records(ColumnName,value_,callback){
         const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
        myDiagnosisRecordsObject.get_specific_diagnosis_records(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_diagnosis_records_update(jsonObject_,callback){
        const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
        
		myDiagnosisRecordsObject.batch_diagnosis_records_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   individual_diagnosis_records_update(ColumnName,value_,jsonObject_,callback){
        const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
        
		myDiagnosisRecordsObject.individual_diagnosis_records_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   delete_diagnosis_records_record(ColumnName,value_,callback){
        const  myDiagnosisRecordsObject=new DiagnosisRecordsModel();
        
		myDiagnosisRecordsObject.delete_diagnosis_records_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
}