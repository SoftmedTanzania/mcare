/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the department_type_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DepartmentTypeCategoriesController" class

*/



const express = require('express');
const router = express.Router();
const DepartmentTypeCategoriesController = require('../../controllers/departments/DepartmentTypeCategoriesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_department_type_categories',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			DepartmentTypeId:request.query.DepartmentTypeId,
			DepartmentTypeCategoryName:request.query.DepartmentTypeCategoryName,
			DepartmentTypeCategoryCode:request.query.DepartmentTypeCategoryCode
		 
		
      
        };
	
	      var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();
          myDepartmentTypeCategoriesControllerObject.insert_department_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_department_type_categories',function(request,response){
   var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();
    myDepartmentTypeCategoriesControllerObject.get_all_department_type_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_department_type_categories',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		   DepartmentTypeId:request.query.DepartmentTypeId,
			DepartmentTypeCategoryName:request.query.DepartmentTypeCategoryName,
			DepartmentTypeCategoryCode:request.query.DepartmentTypeCategoryCode
		
      
        };
	
     var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();
    myDepartmentTypeCategoriesControllerObject.batch_department_type_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_department_type_categories',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();


        myDepartmentTypeCategoriesControllerObject.get_specific_department_type_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_department_type_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		    DepartmentTypeId:request.query.DepartmentTypeId,
			DepartmentTypeCategoryName:request.query.DepartmentTypeCategoryName,
			DepartmentTypeCategoryCode:request.query.DepartmentTypeCategoryCode
		
      
           };
	
            var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();
          myDepartmentTypeCategoriesControllerObject.individual_department_type_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_department_type_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myDepartmentTypeCategoriesControllerObject=new DepartmentTypeCategoriesController();
    myDepartmentTypeCategoriesControllerObject.delete_department_type_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




