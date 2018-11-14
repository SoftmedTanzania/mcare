/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_record_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SpecimenRecordCategoriesController" class

*/




const express = require('express');
const router = express.Router();
const SpecimenRecordCategoriesController = require('../../controllers/laboratory/SpecimenRecordCategoriesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_specimen_record_categories',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 SpecimenRecordCategoryDescription:request.query.SpecimenRecordCategoryDescription,
		 SpecimenRecordCategoryCode:request.query.SpecimenRecordCategoryCode
		
      
        };
	
	      var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();
          mySpecimenRecordCategoriesControllerObject.insert_specimen_record_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_specimen_record_categories',function(request,response){
    var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();
    mySpecimenRecordCategoriesControllerObject.get_all_specimen_record_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_specimen_record_categories',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 SpecimenRecordCategoryDescription:request.query.SpecimenRecordCategoryDescription,
		 SpecimenRecordCategoryCode:request.query.SpecimenRecordCategoryCode
		
      
        };
	
   var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();
    mySpecimenRecordCategoriesControllerObject.batch_specimen_record_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_specimen_record_categoriess',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();


        mySpecimenRecordCategoriesControllerObject.get_specific_specimen_record_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_specimen_record_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         SpecimenRecordCategoryDescription:request.query.SpecimenRecordCategoryDescription,
		         SpecimenRecordCategoryCode:request.query.SpecimenRecordCategoryCode
		
      
           };
	
          var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();
          mySpecimenRecordCategoriesControllerObject.individual_specimen_record_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_specimen_record_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySpecimenRecordCategoriesControllerObject=new SpecimenRecordCategoriesController();
    mySpecimenRecordCategoriesControllerObject.delete_specimen_record_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


