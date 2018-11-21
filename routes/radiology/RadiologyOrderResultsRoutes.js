/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_order_results table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"RadiologyOrderResultsController" class

*/



const express = require('express');
const router = express.Router();
const RadiologyOrderResultsController = require('../../controllers/radiology/RadiologyOrderResultsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_radiology_order_results',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    RadiologyOrderResultCategoryId:request.query.RadiologyOrderResultCategoryId,
			RadiologyOrderId:request.query.RadiologyOrderId,
			RadiologyOrderResultValue:request.query.RadiologyOrderResultValue
		 
		
      
        };
	
	      var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();
          myRadiologyOrderResultsControllerObject.insert_radiology_order_results(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_radiology_order_results',function(request,response){
    var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();
    myRadiologyOrderResultsControllerObject.get_all_radiology_order_results(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_radiology_order_results',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    RadiologyOrderResultCategoryId:request.query.RadiologyOrderResultCategoryId,
			RadiologyOrderId:request.query.RadiologyOrderId,
			RadiologyOrderResultValue:request.query.RadiologyOrderResultValue
		
      
        };
	
    var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();
    myRadiologyOrderResultsControllerObject.batch_radiology_order_results_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_radiology_order_results',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();


        myRadiologyOrderResultsControllerObject.get_specific_radiology_order_results(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_radiology_order_results',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		    RadiologyOrderResultCategoryId:request.query.RadiologyOrderResultCategoryId,
			RadiologyOrderId:request.query.RadiologyOrderId,
			RadiologyOrderResultValue:request.query.RadiologyOrderResultValue
		
      
           };
	
           var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();
          myRadiologyOrderResultsControllerObject.individual_radiology_order_results_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_radiology_order_results',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myRadiologyOrderResultsControllerObject=new RadiologyOrderResultsController();
    myRadiologyOrderResultsControllerObject.delete_radiology_order_results_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




