/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_order_types's controller class.
It receives calls from the "TestOrderTypesRoutes" class and
passes the calls down to the "TestOrderTypesModel" class

*/





const TestOrderTypesModel = require('../../models/laboratory/TestOrderTypesModel.js');



module.exports = class TestOrderTypesController{
    constructor(){

    }

	

	
	
	
   insert_test_order_types(jsonObject_,callback){
     const  myTestOrderTypesObject=new TestOrderTypesModel();
     myTestOrderTypesObject.insert_test_order_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
			
	
	
	
	
	
	
   get_all_test_order_types(callback){
        const  myTestOrderTypesObject=new TestOrderTypesModel();
        myTestOrderTypesObject.get_all_test_order_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   get_specific_test_order_types(ColumnName,value_,callback){
        const  myTestOrderTypesObject=new TestOrderTypesModel();
        myTestOrderTypesObject.get_specific_test_order_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_test_order_types_update(jsonObject_,callback){
       const  myTestOrderTypesObject=new TestOrderTypesModel();
        
		myTestOrderTypesObject.batch_test_order_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_test_order_types_update(ColumnName,value_,jsonObject_,callback){
        const  myTestOrderTypesObject=new TestOrderTypesModel();
        
		myTestOrderTypesObject.individual_test_order_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
				
	
	
	
	
	
	
	
   delete_test_order_types_record(ColumnName,value_,callback){
        const  myTestOrderTypesObject=new TestOrderTypesModel();
        
		myTestOrderTypesObject.delete_test_order_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
}