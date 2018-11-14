/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_order_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TestOrderTypesController" class

*/




const express = require('express');
const router = express.Router();
const TestOrderTypesController = require('../../controllers/laboratory/TestOrderTypesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_test_order_types',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 TestTypeDescription:request.query.TestTypeDescription,
		 TestOrderTypeCode:request.query.TestOrderTypeCode
		
      
        };
	
	      var myTestOrderTypesControllerObject=new TestOrderTypesController();
          myTestOrderTypesControllerObject.insert_test_order_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });








   router.get('/get_all_test_order_types',function(request,response){
    var myTestOrderTypesControllerObject=new TestOrderTypesController();
    myTestOrderTypesControllerObject.get_all_test_order_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_test_order_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 TestTypeDescription:request.query.TestTypeDescription,
		 TestOrderTypeCode:request.query.TestOrderTypeCode
		
      
        };
	
   var myTestOrderTypesControllerObject=new TestOrderTypesController();
    myTestOrderTypesControllerObject.batch_test_order_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_test_order_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myTestOrderTypesControllerObject=new TestOrderTypesController();


        myTestOrderTypesControllerObject.get_specific_test_order_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_test_order_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         TestTypeDescription:request.query.TestTypeDescription,
		         TestOrderTypeCode:request.query.TestOrderTypeCode
		
      
           };
	
          var myTestOrderTypesControllerObject=new TestOrderTypesController();
          myTestOrderTypesControllerObject.individual_test_order_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_test_order_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myTestOrderTypesControllerObject=new TestOrderTypesController();
    myTestOrderTypesControllerObject.delete_test_order_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


