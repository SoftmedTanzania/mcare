/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedure_record_type_category's
controller class.It receives calls from the "PerformedProcedureRecordTypeCategoryRoutes"
class and passes the calls down to the "PerformedProcedureRecordTypeCategoryModel" class

*/




const PerformedProcedureRecordTypeCategoryModel = require('../../models/procedures/PerformedProcedureRecordTypeCategoryModel.js');


module.exports = class PerformedProcedureRecordTypeCategoryController{
    constructor(){

    }
	
	
	
   insert_performed_procedure_record_type_category(jsonObject_,callback){
     const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
     myPerformedProcedureRecordTypeCategoryObject.insert_performed_procedure_record_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
   get_all_performed_procedure_record_type_category(callback){
        const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
        myPerformedProcedureRecordTypeCategoryObject.get_all_performed_procedure_record_type_category(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   get_specific_performed_procedure_record_type_category(ColumnName,value_,callback){
          const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
        myPerformedProcedureRecordTypeCategoryObject.get_specific_performed_procedure_record_type_category(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
   batch_performed_procedure_record_type_category_update(jsonObject_,callback){
        const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
        
		myPerformedProcedureRecordTypeCategoryObject.batch_performed_procedure_record_type_category_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
   individual_performed_procedure_record_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
        
		myPerformedProcedureRecordTypeCategoryObject.individual_performed_procedure_record_type_category_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   delete_performed_procedure_record_type_category_record(ColumnName,value_,callback){
         const  myPerformedProcedureRecordTypeCategoryObject=new PerformedProcedureRecordTypeCategoryModel();
        
		myPerformedProcedureRecordTypeCategoryObject.delete_performed_procedure_record_type_category_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
		
	
	
}