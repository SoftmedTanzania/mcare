/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_visits table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientVisitsController" class

*/




const express = require('express');
const router = express.Router();
const PatientVisitsController = require('../../controllers/patient_management/PatientVisitsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_patient_visits',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
         var jsonObject_ = {
         PatientId:request.query.PatientId,
		 FacilityId:request.query.FacilityId,
		 PatientVisitDate:date
		
      
        };
	
	      var myPatientVisitsControllerObject=new PatientVisitsController();
          myPatientVisitsControllerObject.insert_patient_visits(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });




   router.get('/get_all_patient_visits',function(request,response){
    var myPatientVisitsControllerObject=new PatientVisitsController();
    myPatientVisitsControllerObject.get_all_patient_visits(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_patient_visits',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var jsonObject_ = {
         PatientId:request.query.PatientId,
		 FacilityId:request.query.FacilityId,
		 PatientVisitDate:date
		
      
        };
	
    var myPatientVisitsControllerObject=new PatientVisitsController();
    myPatientVisitsControllerObject.batch_patient_visits_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_patient_visits',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientVisitsControllerObject=new PatientVisitsController();


        myPatientVisitsControllerObject.get_specific_patient_visits(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });





   router.get('/update_individual_patient_visits',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
               var jsonObject_ = {
                   PatientId:request.query.PatientId,
		           FacilityId:request.query.FacilityId,
		           PatientVisitDate:date
		
      
        };
	
          var myPatientVisitsControllerObject=new PatientVisitsController();
          myPatientVisitsControllerObject.individual_patient_visits_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_visits',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientVisitsControllerObject=new PatientVisitsController();
    myPatientVisitsControllerObject.delete_patient_visits_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

