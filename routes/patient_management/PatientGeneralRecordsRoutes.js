/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_general_recordss table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientGeneralRecordsController" class

*/


const express = require('express');
const router = express.Router();
const PatientGeneralRecordsController = require('../../controllers/patient_management/PatientGeneralRecordsController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_patient_general_records',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
     var	jsonObject_ = {
         PatientId:request.query.PatientId,
		 PatientGeneralRecordTypeCategoryId:request.query.PatientGeneralRecordTypeCategoryId,
		 RecordValue:request.query.RecordValue,
		 RecordedDate:date
		
      
        };
	
	      var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();
          myPatientGeneralRecordsControllerObject.insert_patient_general_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_patient_general_records',function(request,response){
    var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();
    myPatientGeneralRecordsControllerObject.get_all_patient_general_records(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_patient_general_records',function(request,response){
	   
	    var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         PatientId:request.query.PatientId,
		 PatientGeneralRecordTypeCategoryId:request.query.PatientGeneralRecordTypeCategoryId,
		 RecordValue:request.query.RecordValue,
		 RecordedDate:date
		
      
        };
	
   var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();
    myPatientGeneralRecordsControllerObject.batch_patient_general_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_patient_general_records',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();


        myPatientGeneralRecordsControllerObject.get_specific_general_records(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_patient_general_records',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
                PatientId:request.query.PatientId,
		        PatientGeneralRecordTypeCategoryId:request.query.PatientGeneralRecordTypeCategoryId,
		        RecordValue:request.query.RecordValue,
		        RecordedDate:date
		
      
        };
	
          var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();
          myPatientGeneralRecordsControllerObject.individual_patient_general_records_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });





   router.get('/delete_individual_patient_general_records',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientGeneralRecordsControllerObject=new PatientGeneralRecordsController();
    myPatientGeneralRecordsControllerObject.delete_patient_patient_general_records_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;
