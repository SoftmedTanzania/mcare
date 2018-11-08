/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedure_type_categories's controller class.
It receives calls from the "ProcedureTypeCategoriesRoutes" class and
passes the calls down to the "ProcedureTypeCategoriesModel" class

*/
const ProcedureTypeCategoriesModel = require('../../models/procedures/ProcedureTypeCategoriesModel.js');


module.exports = class ProcedureTypeCategoriesController{
    constructor(){

    }
	
	
	
	
   insert_procedure_type_categories(jsonObject_,callback){
     const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
     myProcedureTypeCategoriesObject.insert_procedure_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
   get_all_procedure_type_categories(callback){
        const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
        myProcedureTypeCategoriesObject.get_all_procedure_type_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   get_specific_procedure_type_categories(ColumnName,value_,callback){
         const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
        myProcedureTypeCategoriesObject.get_specific_procedure_type_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
	
	
   batch_procedure_type_categories_update(jsonObject_,callback){
        const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
        
		myProcedureTypeCategoriesObject.batch_procedure_type_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
	
   individual_procedure_type_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
        
		myProcedureTypeCategoriesObject.individual_procedure_type_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   delete_procedure_type_categories_record(ColumnName,value_,callback){
        const  myProcedureTypeCategoriesObject=new ProcedureTypeCategoriesModel();
        
		myProcedureTypeCategoriesObject.delete_procedure_type_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
		
	
	
}

