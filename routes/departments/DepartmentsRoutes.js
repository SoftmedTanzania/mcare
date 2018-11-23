/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the departments table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DepartmentsController" class

*/



const express = require('express');
const router = express.Router();
const DepartmentsController = require('../../controllers/departments/DepartmentsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_departments',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			DepartmentTypeCategoryId:request.query.DepartmentTypeCategoryId,
			FacilityId:request.query.FacilityId,
			DepartmentDescription:request.query.DepartmentDescription,
			DepartmentReferenceNo:request.query.DepartmentReferenceNo
		 
		
      
        };
	
	      var myDepartmentsControllerObject=new DepartmentsController();
          myDepartmentsControllerObject.insert_departments(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_departments',function(request,response){
   var myDepartmentsControllerObject=new DepartmentsController();
    myDepartmentsControllerObject.get_all_departments(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_departments',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		   DepartmentTypeCategoryId:request.query.DepartmentTypeCategoryId,
			FacilityId:request.query.FacilityId,
			DepartmentDescription:request.query.DepartmentDescription,
			DepartmentReferenceNo:request.query.DepartmentReferenceNo
		
      
        };
	
    var myDepartmentsControllerObject=new DepartmentsController();
    myDepartmentsControllerObject.batch_departments_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_departments',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myDepartmentsControllerObject=new DepartmentsController();


        myDepartmentsControllerObject.get_specific_departments(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_departments',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		     DepartmentTypeCategoryId:request.query.DepartmentTypeCategoryId,
			FacilityId:request.query.FacilityId,
			DepartmentDescription:request.query.DepartmentDescription,
			DepartmentReferenceNo:request.query.DepartmentReferenceNo
		
      
           };
	
            var myDepartmentsControllerObject=new DepartmentsController();
          myDepartmentsControllerObject.individual_departments_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_departments',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myDepartmentsControllerObject=new DepartmentsController();
    myDepartmentsControllerObject.delete_departments_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




