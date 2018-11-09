/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedure_record_types's
controller class.It receives calls from the
"PerformedProcedureRecordTypesRoutes" class and passes
the calls down to the "PerformedProcedureRecordTypesModel"
class

*/



const PerformedProcedureRecordTypesModel = require('../../models/procedures/PerformedProcedureRecordTypesModel.js');


module.exports = class PerformedProcedureRecordTypesController{
    constructor(){

    }
	
	
	
	
   insert_performed_procedure_record_types(jsonObject_,callback){
     const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
     myPerformedProcedureRecordTypesObject.insert_performed_procedure_record_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
   get_all_performed_procedure_record_types(callback){
        const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
        myPerformedProcedureRecordTypesObject.get_all_performed_procedure_record_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_performed_procedure_record_types(ColumnName,value_,callback){
           const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
        myPerformedProcedureRecordTypesObject.get_specific_performed_procedure_record_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
		
	
	
	
	
	
	
   batch_performed_procedure_record_types_update(jsonObject_,callback){
        const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
        
		myPerformedProcedureRecordTypesObject.batch_performed_procedure_record_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }				
	
	
	
	
   individual_performed_procedure_record_types_update(ColumnName,value_,jsonObject_,callback){
        const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
        
		myPerformedProcedureRecordTypesObject.individual_performed_procedure_record_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   delete_performed_procedure_record_types_record(ColumnName,value_,callback){
        const  myPerformedProcedureRecordTypesObject=new PerformedProcedureRecordTypesModel();
        
		myPerformedProcedureRecordTypesObject.delete_performed_procedure_record_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
		
	
	
	
}