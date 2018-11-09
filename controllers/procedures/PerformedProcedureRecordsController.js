/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedure_records's controller class.
It receives calls from the "PerformedProcedureRecordsRoutes" class and
passes the calls down to the "PerformedProcedureRecordsModel" class

*/


const PerformedProcedureRecordsModel = require('../../models/procedures/PerformedProcedureRecordsModel.js');


module.exports = class PerformedProcedureRecordsController{
    constructor(){

    }
	
	
	

   insert_performed_procedure_records(jsonObject_,callback){
     const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
     myPerformedProcedureRecordsObject.insert_performed_procedure_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}			
	
	
	
	
   get_all_performed_procedure_records(callback){
        const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
        myPerformedProcedureRecordsObject.get_all_performed_procedure_records(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_performed_procedure_records(ColumnName,value_,callback){
          const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
        myPerformedProcedureRecordsObject.get_specific_performed_procedure_records(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
   batch_performed_procedure_records_update(jsonObject_,callback){
        const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
        
		myPerformedProcedureRecordsObject.batch_performed_procedure_records_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
   individual_performed_procedure_records_update(ColumnName,value_,jsonObject_,callback){
        const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
        
		myPerformedProcedureRecordsObject.individual_performed_procedure_records_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   delete_performed_procedure_records_record(ColumnName,value_,callback){
        const  myPerformedProcedureRecordsObject=new PerformedProcedureRecordsModel();
        
		myPerformedProcedureRecordsObject.delete_performed_procedure_records_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
		
	
	
	
}