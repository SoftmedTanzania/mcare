/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_checkups table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientCheckUpsController" class

*/


const express = require('express');
const router = express.Router();
const PatientCheckUpsController = require('../../controllers/patient_management/PatientCheckUpsController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});




   router.get('/add_patient_checkup',function(request,response){
     var	jsonObject_ = {
         PatientId:request.query.PatientId,
		 UserId:request.query.UserId,
		 PatientRevisitId:request.query.PatientRevisitId,
		 PatientCheckUpDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
	      var myPatientCheckUpsControllerObject=new PatientCheckUpsController();
          myPatientCheckUpsControllerObject.insert_patient_checkups(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_patient_checkups',function(request,response){
    var myPatientCheckUpsControllerObject=new PatientCheckUpsController();
    myPatientCheckUpsControllerObject.get_all_patient_checkups(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/update_patient_checkups',function(request,response){
	
    var	jsonObject_ = {
         PatientId:request.query.PatientId,
		 UserId:request.query.UserId,
		 PatientRevisitId:request.query.PatientRevisitId,
		 PatientCheckUpDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
   var myPatientCheckUpsControllerObject=new PatientCheckUpsController();
    myPatientCheckUpsControllerObject.batch_patient_checkups_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_patient_checkups',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientCheckUpsControllerObject=new PatientCheckUpsController();


        myPatientCheckUpsControllerObject.get_specific_patient_checkups(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });





   router.get('/update_individual_patient_checkups',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
          var	jsonObject_ = {
                PatientId:request.query.PatientId,
		        UserId:request.query.UserId,
		        PatientRevisitId:request.query.PatientRevisitId,
		        PatientCheckUpDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
          var myPatientCheckUpsControllerObject=new PatientCheckUpsController();
          myPatientCheckUpsControllerObject.individual_patient_checkups_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_checkups',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientCheckUpsControllerObject=new PatientCheckUpsController();
    myPatientCheckUpsControllerObject.delete_patient_checkups_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

