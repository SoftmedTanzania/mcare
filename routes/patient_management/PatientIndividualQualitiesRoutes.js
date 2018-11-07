/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_individual_qualities table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientIndividualQualitiesController" class

*/


const express = require('express');
const router = express.Router();
const PatientIndividualQualitiesController = require('../../controllers/patient_management/PatientIndividualQualitiesController.js');


     //Middle ware that is specific to this router
     router.use(function timeLog(req, res, next) {
       console.log('Time: ', Date.now());
       next();
     });





   router.get('/patient_individual_qualities_configuration',function(request,response){
     var	jsonObject_ = {
               PatientId:request.query.PatientId,
		       PatientIndividualQualityValue:request.query.PatientIndividualQualityValue,
		       PatientTypeCategoryId:request.query.PatientTypeCategoryId
		
      
        };
	
	      var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();
          myPatientIndividualQualitiesControllerObject.insert_patient_individual_qualities(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });




   router.get('/get_all_patient_individual_qualities',function(request,response){
    var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();
    myPatientIndividualQualitiesControllerObject.get_all_patient_individual_qualities(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });



   router.get('/update_patient_individual_qualities',function(request,response){
	
         var jsonObject_ = {
               PatientId:request.query.PatientId,
		       PatientIndividualQualityValue:request.query.PatientIndividualQualityValue,
		       PatientTypeCategoryId:request.query.PatientTypeCategoryId
		
      
        };
	
    var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();
    myPatientIndividualQualitiesControllerObject.batch_patient_individual_qualities_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });




   router.get('/get_specific_patient_individual_qualities',function(request,response){
       var mKey=request.query.column_name;
       //var mValue=parseInt(request.query.search_value, 10);
       var mValue=request.query.search_value;
   
        var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();


          myPatientIndividualQualitiesControllerObject.get_specific_patient_individual_qualities(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
    });

});





   router.get('/update_individual_patient_individual_qualities',function(request,response){
	
           var column_name=request.query.ColumnName;
           var value_=request.query.ColumnValue;
	
           var jsonObject_ = {
               PatientId:request.query.PatientId,
		       PatientIndividualQualityValue:request.query.PatientIndividualQualityValue,
		       PatientTypeCategoryId:request.query.PatientTypeCategoryId
		
      
          };
	
          var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();
          myPatientIndividualQualitiesControllerObject.individual_patient_individual_qualities_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
         });

   });





   router.get('/delete_individual_patient_individual_qualities',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientIndividualQualitiesControllerObject=new PatientIndividualQualitiesController();
    myPatientIndividualQualitiesControllerObject.delete_patient_individual_qualities_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});
 
 
module.exports = router;