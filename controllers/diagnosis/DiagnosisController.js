/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis's controller class.
It receives calls from the "DiagnosisRoutes" class and
passes the calls down to the "DiagnosisModel" class

*/



const DiagnosisModel = require('../../models/diagnosis/DiagnosisModel.js');




module.exports = class DiagnosisController{
    constructor(){

    }
	
	
	
   insert_diagnosis(jsonObject_,callback){
     const  myDiagnosisObject=new DiagnosisModel();
     myDiagnosisObject.insert_diagnosis(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_diagnosis(callback){
        const  myDiagnosisObject=new DiagnosisModel();
        myDiagnosisObject.get_all_diagnosis(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_diagnosis(ColumnName,value_,callback){
         const  myDiagnosisObject=new DiagnosisModel();
        myDiagnosisObject.get_specific_diagnosis(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_diagnosis_update(jsonObject_,callback){
        const  myDiagnosisObject=new DiagnosisModel();
        
		myDiagnosisObject.batch_diagnosis_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_diagnosis_update(ColumnName,value_,jsonObject_,callback){
        const  myDiagnosisObject=new DiagnosisModel();
        
		myDiagnosisObject.individual_diagnosis_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_diagnosis_record(ColumnName,value_,callback){
        const  myDiagnosisObject=new DiagnosisModel();
        
		myDiagnosisObject.delete_diagnosis_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}