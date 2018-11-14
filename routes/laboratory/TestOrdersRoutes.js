/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the test_orders table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TestOrdersController" class

*/



const express = require('express');
const router = express.Router();
const TestOrdersController = require('../../controllers/laboratory/TestOrdersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});






   router.get('/add_test_orders',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		 TestOrderTypeCategoryId:request.query.TestOrderTypeCategoryId,
		 UserId:request.query.UserId,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 SpecimenId:request.query.SpecimenId,
		 LabId:request.query.LabId,
		 TestOrderStatus:request.query.TestOrderStatus,	
		 TestOrderDate:date
		
      
        };
	
	      var myTestOrdersControllerObject=new TestOrdersController();
          myTestOrdersControllerObject.insert_test_orders(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_test_orders',function(request,response){
    var myTestOrdersControllerObject=new TestOrdersController();
    myTestOrdersControllerObject.get_all_test_orders(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_test_orders',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		 TestOrderTypeCategoryId:request.query.TestOrderTypeCategoryId,
		 UserId:request.query.UserId,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 SpecimenId:request.query.SpecimenId,
		 LabId:request.query.LabId,
		 TestOrderStatus:request.query.TestOrderStatus,	
		 TestOrderDate:date
		
      
        };
	
    var myTestOrdersControllerObject=new TestOrdersController();
    myTestOrdersControllerObject.batch_test_orders_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_test_orders',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myTestOrdersControllerObject=new TestOrdersController();


        myTestOrdersControllerObject.get_specific_test_orders(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_test_orders',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	    var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		 TestOrderTypeCategoryId:request.query.TestOrderTypeCategoryId,
		 UserId:request.query.UserId,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 SpecimenId:request.query.SpecimenId,
		 LabId:request.query.LabId,
		 TestOrderStatus:request.query.TestOrderStatus,	
		 TestOrderDate:date
		
      
           };
	
          var myTestOrdersControllerObject=new TestOrdersController();
          myTestOrdersControllerObject.individual_test_orders_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });









   router.get('/delete_individual_test_orders',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myTestOrdersControllerObject=new TestOrdersController();
    myTestOrdersControllerObject.delete_test_orders_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;



