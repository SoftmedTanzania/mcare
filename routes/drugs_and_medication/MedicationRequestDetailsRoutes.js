/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_request_details table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"MedicationRequestDetailsController" class

*/




const express = require('express');
const router = express.Router();
const MedicationRequestDetailsController = require('../../controllers/drugs_and_medication/MedicationRequestDetailsController.js');




   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_medication_request_details',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    MedicationRequestId:request.query.MedicationRequestId,
			DrugConfigurationId:request.query.DrugConfigurationId,
			DrugQuantity:request.query.DrugQuantity,
		    DrugRequestStatus:request.query.DrugRequestStatus
		
      
        };
	
	      var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();
          myMedicationRequestDetailsControllerObject.insert_medication_request_details(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_medication_request_details',function(request,response){
    var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();
    myMedicationRequestDetailsControllerObject.get_all_medication_request_details(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/update_medication_request_details',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    MedicationRequestId:request.query.MedicationRequestId,
			DrugConfigurationId:request.query.DrugConfigurationId,
			DrugQuantity:request.query.DrugQuantity,
		    DrugRequestStatus:request.query.DrugRequestStatus
		
      
        };
	
    var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();
    myMedicationRequestDetailsControllerObject.batch_medication_request_details_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });




   router.get('/get_specific_medication_request_details',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();


        myMedicationRequestDetailsControllerObject.get_specific_medication_request_details(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_medication_request_details',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    MedicationRequestId:request.query.MedicationRequestId,
			DrugConfigurationId:request.query.DrugConfigurationId,
			DrugQuantity:request.query.DrugQuantity,
		    DrugRequestStatus:request.query.DrugRequestStatus
		
      
           };
	
          var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();
          myMedicationRequestDetailsControllerObject.individual_medication_request_details_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_medication_request_details',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myMedicationRequestDetailsControllerObject=new MedicationRequestDetailsController();
    myMedicationRequestDetailsControllerObject.delete_medication_request_details_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

