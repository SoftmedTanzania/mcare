/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_record_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientGeneralRecordTypesController" class

*/


const express = require('express');
const router = express.Router();
const PatientGeneralRecordTypesController = require('../../controllers/patient_management/PatientGeneralRecordTypesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});





   router.get('/add_patient_general_record_types',function(request,response){
     var	jsonObject_ = {
         PatientGeneralRecordTypeDescription:request.query.PatientGeneralRecordTypeDescription
		 
		
      
        };
	
	      var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();
          myPatientGeneralRecordTypesControllerObject.insert_patient_general_record_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_patient_general_record_types',function(request,response){
    var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();
    myPatientGeneralRecordTypesControllerObject.get_all_patient_general_record_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/update_patient_general_record_types',function(request,response){
	
          var jsonObject_ = {
               PatientGeneralRecordTypeDescription:request.query.PatientGeneralRecordTypeDescription
		 
		
      
               };
	
   var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();
    myPatientGeneralRecordTypesControllerObject.batch_patient_general_record_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_patient_general_record_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();


        myPatientGeneralRecordTypesControllerObject.get_specific_patient_general_record_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_patient_general_record_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
          var jsonObject_ = {
               PatientGeneralRecordTypeDescription:request.query.PatientGeneralRecordTypeDescription
		 
		
      
               };
	
          var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();
          myPatientGeneralRecordTypesControllerObject.individual_patient_general_record_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_general_record_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientGeneralRecordTypesControllerObject=new PatientGeneralRecordTypesController();
    myPatientGeneralRecordTypesControllerObject.delete_patient_general_record_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

