/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the ward_type_category's controller class.
It receives calls from the "WardTypeCategoryRoutes" class and
passes the calls down to the "WardTypeCategoryModel" class

*/



const WardTypeCategoryModel = require('../../models/wards/WardTypeCategoryModel.js');



module.exports = class WardTypeCategoryController{
    constructor(){

    }
	
	
	

	
	
   insert_ward_type_category(jsonObject_,callback){
     const  myWardTypeCategoryObject=new WardTypeCategoryModel();
     myWardTypeCategoryObject.insert_ward_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_ward_type_category(callback){
        const  myWardTypeCategoryObject=new WardTypeCategoryModel();
        myWardTypeCategoryObject.get_all_ward_type_category(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_ward_type_category(ColumnName,value_,callback){
         const  myWardTypeCategoryObject=new WardTypeCategoryModel();
        myWardTypeCategoryObject.get_specific_ward_type_category(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_ward_type_category_update(jsonObject_,callback){
       const  myWardTypeCategoryObject=new WardTypeCategoryModel();
        
		myWardTypeCategoryObject.batch_ward_type_category_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_ward_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  myWardTypeCategoryObject=new WardTypeCategoryModel();
        
		myWardTypeCategoryObject.individual_ward_type_category_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_ward_type_category_record(ColumnName,value_,callback){
        const  myWardTypeCategoryObject=new WardTypeCategoryModel();
        
		myWardTypeCategoryObject.delete_ward_type_category_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}