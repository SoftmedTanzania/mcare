/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the generic_drug_categories's controller class.
It receives calls from the "GenericDrugCategoriesRoutes" class and
passes the calls down to the "GenericDrugCategoriesModel" class

*/



const GenericDrugCategoriesModel = require('../../models/drugs_and_medication/GenericDrugCategoriesModel.js');



module.exports = class GenericDrugCategoriesController{
    constructor(){

    }
	
	
	
	
   insert_generic_drug_categories(jsonObject_,callback){
     const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
     myGenericDrugCategoriesObject.insert_generic_drug_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
   get_all_generic_drug_categories(callback){
        const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
        myGenericDrugCategoriesObject.get_all_generic_drug_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   get_specific_generic_drug_categories(ColumnName,value_,callback){
         const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
        myGenericDrugCategoriesObject.get_specific_generic_drug_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
	
	
   batch_generic_drug_categories_update(jsonObject_,callback){
        const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
        
		myGenericDrugCategoriesObject.batch_generic_drug_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   individual_generic_drug_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
        
		myGenericDrugCategoriesObject.individual_generic_drug_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_generic_drug_categories_record(ColumnName,value_,callback){
        const  myGenericDrugCategoriesObject=new GenericDrugCategoriesModel();
        
		myGenericDrugCategoriesObject.delete_generic_drug_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
}