/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedure_types's controller class.
It receives calls from the "ProcedureTypesRoutes" class and
passes the calls down to the "ProcedureTypesModel" class

*/




const ProcedureTypesModel = require('../../models/procedures/ProcedureTypesModel.js');


module.exports = class ProcedureTypesController{
    constructor(){

    }
	
	
	

   insert_procedure_types(jsonObject_,callback){
     const  myProcedureTypesObject=new ProcedureTypesModel();
     myProcedureTypesObject.insert_procedure_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
   get_all_procedure_types(callback){
        const  myProcedureTypesObject=new ProcedureTypesModel();
        myProcedureTypesObject.get_all_procedure_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }			
	
	
	
	
   get_specific_procedure_types(ColumnName,value_,callback){
         const  myProcedureTypesObject=new ProcedureTypesModel();
        myProcedureTypesObject.get_specific_procedure_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_procedure_types_update(jsonObject_,callback){
        const  myProcedureTypesObject=new ProcedureTypesModel();
        
		myProcedureTypesObject.batch_procedure_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
   individual_procedure_types_update(ColumnName,value_,jsonObject_,callback){
        const  myProcedureTypesObject=new ProcedureTypesModel();
        
		myProcedureTypesObject.individual_procedure_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
	
   delete_procedure_types_record(ColumnName,value_,callback){
        const  myProcedureTypesObject=new ProcedureTypesModel();
        
		myProcedureTypesObject.delete_procedure_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
}