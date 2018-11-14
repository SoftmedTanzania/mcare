/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_orders's controller class.
It receives calls from the "TestOrdersRoutes" class and
passes the calls down to the "TestOrdersModel" class

*/




const TestOrdersModel = require('../../models/laboratory/TestOrdersModel.js');



module.exports = class TestOrdersController{
    constructor(){

    }
	
	
	

	
	
	
	
   insert_test_orders(jsonObject_,callback){
     const  myTestOrdersObject=new TestOrdersModel();
     myTestOrdersObject.insert_test_orders(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
			
	
	
	
	
	
   get_all_test_orders(callback){
        const  myTestOrdersObject=new TestOrdersModel();
        myTestOrdersObject.get_all_test_orders(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
   get_specific_test_orders(ColumnName,value_,callback){
        const  myTestOrdersObject=new TestOrdersModel();
        myTestOrdersObject.get_specific_test_orders(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_test_orders_update(jsonObject_,callback){
       const  myTestOrdersObject=new TestOrdersModel();
        
		myTestOrdersObject.batch_test_orders_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
   individual_test_orders_update(ColumnName,value_,jsonObject_,callback){
        const  myTestOrdersObject=new TestOrdersModel();
        
		myTestOrdersObject.individual_test_orders_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
				
	
	
	
	
	
	
   delete_test_orders_record(ColumnName,value_,callback){
        const  myTestOrdersObject=new TestOrdersModel();
        
		myTestOrdersObject.delete_test_orders_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
}
