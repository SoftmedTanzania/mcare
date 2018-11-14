/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_order_type_category table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TestOrderTypeCategoryController" class

*/




const express = require('express');
const router = express.Router();
const TestOrderTypeCategoryController = require('../../controllers/laboratory/TestOrderTypeCategoryController.js');




   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});






   router.get('/add_test_order_type_category',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 TestOrderTypeId:request.query.TestOrderTypeId,
		 TestOrderTypeCategoryDescription:request.query.TestOrderTypeCategoryDescription,
		 TestOrderTypeCategoryCode:request.query.TestOrderTypeCategoryCode,
		 
		
      
        };
	
	      var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();
          myTestOrderTypeCategoryControllerObject.insert_test_order_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });








   router.get('/get_all_test_order_type_category',function(request,response){
    var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();
    myTestOrderTypeCategoryControllerObject.get_all_test_order_type_category(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/update_test_order_type_category',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 TestOrderTypeId:request.query.TestOrderTypeId,
		 TestOrderTypeCategoryDescription:request.query.TestOrderTypeCategoryDescription,
		 TestOrderTypeCategoryCode:request.query.TestOrderTypeCategoryCode,
		
      
        };
	
   var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();
    myTestOrderTypeCategoryControllerObject.batch_test_order_type_category_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_test_order_type_category',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();


        myTestOrderTypeCategoryControllerObject.get_specific_test_order_type_category(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_test_order_type_category',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         TestOrderTypeId:request.query.TestOrderTypeId,
		         TestOrderTypeCategoryDescription:request.query.TestOrderTypeCategoryDescription,
		         TestOrderTypeCategoryCode:request.query.TestOrderTypeCategoryCode,
		
      
           };
	
          var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();
          myTestOrderTypeCategoryControllerObject.individual_test_order_type_category_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });





   router.get('/delete_individual_test_order_type_category',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myTestOrderTypeCategoryControllerObject=new TestOrderTypeCategoryController();
    myTestOrderTypeCategoryControllerObject.delete_test_order_type_category_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;






