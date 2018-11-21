/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_order_result_categories's controller class.
It receives calls from the "RadiologyOrderResultCategoriesRoutes" class and
passes the calls down to the "RadiologyOrderResultCategoriesModel" class

*/



const RadiologyOrderResultCategoriesModel = require('../../models/radiology/RadiologyOrderResultCategoriesModel.js');




module.exports = class RadiologyOrderResultCategoriesController{
    constructor(){

    }
	
	
	
   insert_radiology_order_result_categories(jsonObject_,callback){
     const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
     myRadiologyOrderResultCategoriesObject.insert_radiology_order_result_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_radiology_order_result_categories(callback){
        const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
        myRadiologyOrderResultCategoriesObject.get_all_radiology_order_result_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_radiology_order_result_categories(ColumnName,value_,callback){
         const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
        myRadiologyOrderResultCategoriesObject.get_specific_radiology_order_result_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_radiology_order_result_categories_update(jsonObject_,callback){
       const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
        
		myRadiologyOrderResultCategoriesObject.batch_radiology_order_result_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_radiology_order_result_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
        
		myRadiologyOrderResultCategoriesObject.individual_radiology_order_result_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_radiology_order_result_categories_record(ColumnName,value_,callback){
        const  myRadiologyOrderResultCategoriesObject=new RadiologyOrderResultCategoriesModel();
        
		myRadiologyOrderResultCategoriesObject.delete_radiology_order_result_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}