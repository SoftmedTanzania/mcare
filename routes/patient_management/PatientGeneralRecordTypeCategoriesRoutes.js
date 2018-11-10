/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_record_type_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientGeneralRecordTypeCategoriesController" class

*/




const express = require('express');
const router = express.Router();
const PatientGeneralRecordTypeCategoriesController = require('../../controllers/patient_management/PatientGeneralRecordTypeCategoriesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_patient_general_record_type_categories',function(request,response){
              var jsonObject_ = {
                  PatientGeneralRecordTypeId:request.query.PatientGeneralRecordTypeId,
		          PatientGeneralRecordTypeCategoryDescription:request.query.PatientGeneralRecordTypeCategoryDescription
		 
		
      
              };
	
	      var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();
          myPatientGeneralRecordTypeCategoriesControllerObject.insert_patient_general_record_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_patient_general_record_type_categories',function(request,response){
    var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();
    myPatientGeneralRecordTypeCategoriesControllerObject.get_all_patient_general_record_type_categories(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_patient_general_record_type_categories',function(request,response){
	
    var jsonObject_ = {
                  PatientGeneralRecordTypeId:request.query.PatientGeneralRecordTypeId,
		          PatientGeneralRecordTypeCategoryDescription:request.query.PatientGeneralRecordTypeCategoryDescription
		 
		
      
              };
	
    var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();
    myPatientGeneralRecordTypeCategoriesControllerObject.batch_patient_general_record_type_categories_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_patient_general_record_type_categories',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();


        myPatientGeneralRecordTypeCategoriesControllerObject.get_specific_patient_general_record_type_categories(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });








   router.get('/update_individual_patient_general_record_type_categories',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
               var jsonObject_ = {
                  PatientGeneralRecordTypeId:request.query.PatientGeneralRecordTypeId,
		          PatientGeneralRecordTypeCategoryDescription:request.query.PatientGeneralRecordTypeCategoryDescription
		 
		
      
              };
	
          var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();
          myPatientGeneralRecordTypeCategoriesControllerObject.individual_patient_general_record_type_categories_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });





   router.get('/delete_individual_patient_general_record_type_categories',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientGeneralRecordTypeCategoriesControllerObject=new PatientGeneralRecordTypeCategoriesController();
    myPatientGeneralRecordTypeCategoriesControllerObject.delete_patient_general_record_type_categories_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

