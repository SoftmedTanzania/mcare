/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_order_type_category's controller class.
It receives calls from the "TestOrderTypeCategoryRoutes" class and
passes the calls down to the "TestOrderTypeCategoryModel" class

*/





const TestOrderTypeCategoryModel = require('../../models/laboratory/TestOrderTypeCategoryModel.js');



module.exports = class TestOrderTypeCategoryController{
    constructor(){

    }
	
	
	

	
	
	
   insert_test_order_type_category(jsonObject_,callback){
     const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
     myTestOrderTypeCategoryObject.insert_test_order_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
	
	
   get_all_test_order_type_category(callback){
        const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
        myTestOrderTypeCategoryObject.get_all_test_order_type_category(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   get_specific_test_order_type_category(ColumnName,value_,callback){
        const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
        myTestOrderTypeCategoryObject.get_specific_test_order_type_category(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
   batch_test_order_type_category_update(jsonObject_,callback){
      const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
        
		myTestOrderTypeCategoryObject.batch_test_order_type_category_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   individual_test_order_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
        
		myTestOrderTypeCategoryObject.individual_test_order_type_category_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
   delete_test_order_type_category_record(ColumnName,value_,callback){
        const  myTestOrderTypeCategoryObject=new TestOrderTypeCategoryModel();
        
		myTestOrderTypeCategoryObject.delete_test_order_type_category_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	

	
	
}