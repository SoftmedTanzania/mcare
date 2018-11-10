/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the generic_drug_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"GenericDrugCategoriesController" class

*/




const express = require('express');
const router = express.Router();
const GenericDrugCategoriesController = require('../../controllers/drugs_and_medication/GenericDrugCategoriesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});

   router.get('/add_generic_drug_categories',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 GenericDrugCategoryDescription:request.query.GenericDrugCategoryDescription,
		 GenericDrugCategoryCode:request.query.GenericDrugCategoryCode
		
      
        };
	
	      var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();
          myGenericDrugCategoriesControllerObject.insert_generic_drug_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_generic_drug_categories',function(request,response){
    var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();
    myGenericDrugCategoriesControllerObject.get_all_generic_drug_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_generic_drug_categories',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		  GenericDrugCategoryDescription:request.query.GenericDrugCategoryDescription,
		  GenericDrugCategoryCode:request.query.GenericDrugCategoryCode
		
      
        };
	
    var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();
    myGenericDrugCategoriesControllerObject.batch_generic_drug_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/get_specific_generic_drug_categories',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();


        myGenericDrugCategoriesControllerObject.get_specific_generic_drug_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });



   router.get('/update_individual_generic_drug_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         GenericDrugCategoryDescription:request.query.GenericDrugCategoryDescription,
		         GenericDrugCategoryCode:request.query.GenericDrugCategoryCode
		
      
           };
	
          var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();
          myGenericDrugCategoriesControllerObject.individual_generic_drug_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });





   router.get('/delete_individual_generic_drug_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myGenericDrugCategoriesControllerObject=new GenericDrugCategoriesController();
    myGenericDrugCategoriesControllerObject.delete_generic_drug_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;





