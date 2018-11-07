/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_condition table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientConditionController" class

*/


const express = require('express');
const router = express.Router();
const PatientConditionController = require('../../controllers/patient_management/PatientConditionController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});





   router.get('/add_patient_condition',function(request,response){
     var	jsonObject_ = {
         PatientCheckUpId:request.query.PatientCheckUpId,
		 Comment:request.query.Comment,
		 RecordedDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
	      var myPatientConditionControllerObject=new PatientConditionController();
          myPatientConditionControllerObject.insert_patient_condition(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_patient_condition',function(request,response){
    var myPatientConditionControllerObject=new PatientConditionController();
    myPatientConditionControllerObject.get_all_patient_condition(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });



   router.get('/update_patient_condition',function(request,response){
	
    var	jsonObject_ = {
         PatientCheckUpId:request.query.PatientCheckUpId,
		 Comment:request.query.Comment,
		 RecordedDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
    var myPatientConditionControllerObject=new PatientConditionController();
    myPatientConditionControllerObject.batch_patient_condition_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/get_specific_patient_condition',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientConditionControllerObject=new PatientConditionController();


        myPatientConditionControllerObject.get_specific_patient_condition(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_patient_condition',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
               var jsonObject_ = {
                      PatientCheckUpId:request.query.PatientCheckUpId,
		              Comment:request.query.Comment,
		              RecordedDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
          var myPatientConditionControllerObject=new PatientConditionController();
          myPatientConditionControllerObject.individual_patient_condition_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_condition',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientConditionControllerObject=new PatientConditionController();
    myPatientConditionControllerObject.delete_patient_condition_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;
