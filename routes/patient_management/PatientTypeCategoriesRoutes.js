/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_type_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientTypeCategoriesController" class

*/

const express = require('express');
const router = express.Router();
const PatientTypeCategoriesController = require('../../controllers/patient_management/PatientTypeCategoriesController.js');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




router.get('/patient_type_categories_configuration',function(request,response){
    var	jsonObject_ = {
        PatientTypeId:request.query.PatientTypeId,
		PatientTypeCategoryDescription:request.query.PatientTypeCategoryDescription,
		PatientTypeCategoryCode:request.query.PatientTypeCategoryCode
		
      
   };
	
	var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();
    myPatientTypeCategoriesControllerObject.insert_patient_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});




router.get('/get_all_patient_type_categories',function(request,response){
    var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();
    myPatientTypeCategoriesControllerObject.get_all_patient_type_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});




router.get('/update_patient_type_categories',function(request,response){
	
var	jsonObject_ = {
        PatientTypeId:request.query.PatientTypeId,
		PatientTypeCategoryDescription:request.query.PatientTypeCategoryDescription,
		PatientTypeCategoryCode:request.query.PatientTypeCategoryCode
		
      
   };
	
    var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();
    myPatientTypeCategoriesControllerObject.batch_patient_type_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});





router.get('/get_specific_patient_type_categories',function(request,response){
   var mKey=request.query.column_name;
   //var mValue=parseInt(request.query.search_value, 10);
   var mValue=request.query.search_value;
   
   var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();


    myPatientTypeCategoriesControllerObject.get_specific_patient_type_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
    });

});




router.get('/update_individual_patient_type_categories',function(request,response){
	
   var column_name=request.query.ColumnName;
   var value_=request.query.ColumnValue;
	
   var	jsonObject_ = {
		PatientTypeCategoryDescription:request.query.PatientTypeCategoryDescription,
		PatientTypeCategoryCode:request.query.PatientTypeCategoryCode
		
      };
	
    var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();
    myPatientTypeCategoriesControllerObject.individual_patient_type_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});


router.get('/delete_individual_patient_type_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientTypeCategoriesControllerObject=new PatientTypeCategoriesController();
    myPatientTypeCategoriesControllerObject.delete_patient_type_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});
 
 
module.exports = router;
