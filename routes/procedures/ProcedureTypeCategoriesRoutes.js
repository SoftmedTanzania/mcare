/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedure_type_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ProcedureTypeCategoriesController" class

*/



const express = require('express');
const router = express.Router();
const ProcedureTypeCategoriesController = require('../../controllers/procedures/ProcedureTypeCategoriesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});




   router.get('/add_procedure_type_categories',function(request,response){
        var	jsonObject_ = {
         
		 ProcedureTypeId:request.query.ProcedureTypeId,
		 ProcedureTypeCategoryDescription:request.query.ProcedureTypeCategoryDescription,
		 ProcedureTypeCategoryCode:request.query.ProcedureTypeCategoryCode
		
      
        };
	
	      var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();
          myProcedureTypeCategoriesControllerObject.insert_procedure_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });
	   

    });







   router.get('/get_all_procedure_type_categories',function(request,response){
    var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();
    myProcedureTypeCategoriesControllerObject.get_all_procedure_type_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/update_procedure_type_categories',function(request,response){
	
    var	jsonObject_ = {
         
		 ProcedureTypeId:request.query.ProcedureTypeId,
		 ProcedureTypeCategoryDescription:request.query.ProcedureTypeCategoryDescription,
		 ProcedureTypeCategoryCode:request.query.ProcedureTypeCategoryCode
		
      
        };
	
   var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();
    myProcedureTypeCategoriesControllerObject.batch_procedure_type_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/get_specific_procedure_type_categories',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();


        myProcedureTypeCategoriesControllerObject.get_specific_procedure_type_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });











   router.get('/update_individual_procedure_type_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		                    ProcedureTypeId:request.query.ProcedureTypeId,
		                    ProcedureTypeCategoryDescription:request.query.ProcedureTypeCategoryDescription,
		                    ProcedureTypeCategoryCode:request.query.ProcedureTypeCategoryCode
		
      
             };
	
          var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();
          myProcedureTypeCategoriesControllerObject.individual_procedure_type_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_procedure_type_categories',function(request,response){
	
         var column_name=request.query.column_name;
         //var mValue=parseInt(request.query.search_value, 10);
         var value_=request.query.search_value;
	
         var myProcedureTypeCategoriesControllerObject=new ProcedureTypeCategoriesController();
    myProcedureTypeCategoriesControllerObject.delete_procedure_type_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;









