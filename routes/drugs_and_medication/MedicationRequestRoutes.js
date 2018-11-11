/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_request table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"MedicationRequestController" class

*/




const express = require('express');
const router = express.Router();
const MedicationRequestController = require('../../controllers/drugs_and_medication/MedicationRequestController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_medication_request',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			UserId:request.query.UserId,
			PatientRevisitId:request.query.PatientRevisitId,
		    DiagnosisId:request.query.DiagnosisId
		
      
        };
	
	      var myMedicationRequestControllerObject=new MedicationRequestController();
          myMedicationRequestControllerObject.insert_medication_request(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_medication_request',function(request,response){
    var myMedicationRequestControllerObject=new MedicationRequestController();
    myMedicationRequestControllerObject.get_all_medication_request(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_medication_request',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			UserId:request.query.UserId,
			PatientRevisitId:request.query.PatientRevisitId,
		    DiagnosisId:request.query.DiagnosisId
		
      
        };
	
    var myMedicationRequestControllerObject=new MedicationRequestController();
    myMedicationRequestControllerObject.batch_medication_request_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });



   router.get('/get_specific_medication_request',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myMedicationRequestControllerObject=new MedicationRequestController();


        myMedicationRequestControllerObject.get_specific_medication_request(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_medication_request',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			UserId:request.query.UserId,
			PatientRevisitId:request.query.PatientRevisitId,
		    DiagnosisId:request.query.DiagnosisId
		
      
           };
	
          var myMedicationRequestControllerObject=new MedicationRequestController();
          myMedicationRequestControllerObject.individual_medication_request_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_medication_request',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myMedicationRequestControllerObject=new MedicationRequestController();
    myMedicationRequestControllerObject.delete_medication_request_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;
