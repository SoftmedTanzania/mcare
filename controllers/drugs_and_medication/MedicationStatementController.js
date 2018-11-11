/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_statement's controller class.
It receives calls from the "MedicationStatementModelRoutes" class and
passes the calls down to the "MedicationStatementModelModel" class

*/




const MedicationStatementModel = require('../../models/drugs_and_medication/MedicationStatementModel.js');



module.exports = class MedicationStatementController{
    constructor(){

    }
	
	
	
	
	
   insert_medication_statement(jsonObject_,callback){
     const  myMedicationStatementObject=new MedicationStatementModel();
     myMedicationStatementObject.insert_medication_statement(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
	
   get_all_medication_statement(callback){
        const  myMedicationStatementObject=new MedicationStatementModel();
        myMedicationStatementObject.get_all_medication_statement(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   get_specific_medication_statement(ColumnName,value_,callback){
        const  myMedicationStatementObject=new MedicationStatementModel();
        myMedicationStatementObject.get_specific_medication_statement(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_medication_statement_update(jsonObject_,callback){
        const  myMedicationStatementObject=new MedicationStatementModel();
        
		myMedicationStatementObject.batch_medication_statement_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   individual_medication_statement_update(ColumnName,value_,jsonObject_,callback){
        const  myMedicationStatementObject=new MedicationStatementModel();
        
		myMedicationStatementObject.individual_medication_statement_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
	
	
   delete_medication_statement_record(ColumnName,value_,callback){
        const  myMedicationStatementObject=new MedicationStatementModel();
        
		myMedicationStatementObject.delete_medication_statement_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
}
	