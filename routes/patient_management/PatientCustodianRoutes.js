/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_custodian table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientCustodianController" class

*/


const express = require('express');
const router = express.Router();
const PatientCustodianController = require('../../controllers/patient_management/PatientCustodianController.js');




   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_patient_custodian',function(request,response){
        var jsonObject_ = {
         PatientId:request.query.PatientId,
		 Surname:request.query.Surname,
		 MiddleName:request.query.MiddleName,
		 LastName:request.query.LastName,
		 PhoneNumber:request.query.PhoneNumber,
		 Email:request.query.Email,
		 PhysicalAddress:request.query.PhysicalAddress,
		 DateOfBirth:request.query.DateOfBirth,
		 Relationship:request.query.Relationship
		 
		
      
        };
	
	      var myPatientCustodianControllerObject=new PatientCustodianController();
          myPatientCustodianControllerObject.insert_patient_custodian(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_patient_custodian',function(request,response){
    var myPatientCustodianControllerObject=new PatientCustodianController();
    myPatientCustodianControllerObject.get_all_patient_custodian(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/update_patient_custodian',function(request,response){
	
    var jsonObject_ = {
         PatientId:request.query.PatientId,
		 Surname:request.query.Surname,
		 MiddleName:request.query.MiddleName,
		 LastName:request.query.LastName,
		 PhoneNumber:request.query.PhoneNumber,
		 Email:request.query.Email,
		 PhysicalAddress:request.query.PhysicalAddress,
		 DateOfBirth:request.query.DateOfBirth,
		 Relationship:request.query.Relationship
		 
		
      
        };
	
  var myPatientCustodianControllerObject=new PatientCustodianController();
    myPatientCustodianControllerObject.batch_patient_custodian_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/get_specific_patient_custodian',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientCustodianControllerObject=new PatientCustodianController();


        myPatientCustodianControllerObject.get_specific_patient_custodian(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_patient_custodian',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
        var jsonObject_ = {
         PatientId:request.query.PatientId,
		 Surname:request.query.Surname,
		 MiddleName:request.query.MiddleName,
		 LastName:request.query.LastName,
		 PhoneNumber:request.query.PhoneNumber,
		 Email:request.query.Email,
		 PhysicalAddress:request.query.PhysicalAddress,
		 DateOfBirth:request.query.DateOfBirth,
		 Relationship:request.query.Relationship
		 
		
      
        };
	
          var myPatientCustodianControllerObject=new PatientCustodianController();
          myPatientCustodianControllerObject.individual_patient_custodian_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_custodian',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientCustodianControllerObject=new PatientCustodianController();
    myPatientCustodianControllerObject.delete_patient_custodian_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

