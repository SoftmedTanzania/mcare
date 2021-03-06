/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_revisits table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientRevisitsController" class

*/


const express = require('express');
const router = express.Router();
const PatientRevisitsController = require('../../controllers/patient_management/PatientRevisitsController.js');




   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_patient_revisits',function(request,response){
	   
	    var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         PatientVisitId:request.query.PatientVisitId,
		 PatientRevisitDate:date
		
      
        };
	
	      var myPatientRevisitsControllerObject=new PatientRevisitsController();
          myPatientRevisitsControllerObject.insert_patient_revisits(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_patient_revisits',function(request,response){
    var myPatientRevisitsControllerObject=new PatientRevisitsController();
    myPatientRevisitsControllerObject.get_all_patient_revisits(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/update_patient_revisits',function(request,response){
	
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
    var	jsonObject_ = {
         PatientVisitId:request.query.PatientVisitId,
		 PatientRevisitDate:date
		
      
        };
	
    var myPatientRevisitsControllerObject=new PatientRevisitsController();
    myPatientRevisitsControllerObject.batch_patient_revisits_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });









   router.get('/get_specific_patient_revisits',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientRevisitsControllerObject=new PatientRevisitsController();


        myPatientRevisitsControllerObject.get_specific_patient_revisits(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_patient_revisits',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
           var	jsonObject_ = {
                    PatientVisitId:request.query.PatientVisitId,
		            PatientRevisitDate:date
		
      
        };
	
          var myPatientRevisitsControllerObject=new PatientRevisitsController();
          myPatientRevisitsControllerObject.individual_patient_revisits_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_revisits',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
   var myPatientRevisitsControllerObject=new PatientRevisitsController();
    myPatientRevisitsControllerObject.delete_patient_revisits_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

