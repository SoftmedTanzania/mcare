/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_order_result_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"RadiologyOrderResultCategoriesController" class

*/



const express = require('express');
const router = express.Router();
const RadiologyOrderResultCategoriesController = require('../../controllers/radiology/RadiologyOrderResultCategoriesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_radiology_order_result_categories',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			RadiologyOrderResultCategoryDescription:request.query.RadiologyOrderResultCategoryDescription
		 
		
      
        };
	
	      var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();
          myRadiologyOrderResultCategoriesControllerObject.insert_radiology_order_result_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_radiology_order_result_categories',function(request,response){
     var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();
    myRadiologyOrderResultCategoriesControllerObject.get_all_radiology_order_result_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_radiology_order_result_categories',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    RadiologyOrderResultCategoryDescription:request.query.RadiologyOrderResultCategoryDescription
		
      
        };
	
    var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();
    myRadiologyOrderResultCategoriesControllerObject.batch_radiology_order_result_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_radiology_order_result_categories',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();


        myRadiologyOrderResultCategoriesControllerObject.get_specific_radiology_order_result_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_radiology_order_result_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		    RadiologyOrderResultCategoryDescription:request.query.RadiologyOrderResultCategoryDescription
		
      
           };
	
           var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();
          myRadiologyOrderResultCategoriesControllerObject.individual_radiology_order_result_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_radiology_order_result_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
   var myRadiologyOrderResultCategoriesControllerObject=new RadiologyOrderResultCategoriesController();
    myRadiologyOrderResultCategoriesControllerObject.delete_radiology_order_result_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




