/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the expected_appointment_activities table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ExpectedAppointmentActivitiesController" class

*/




const express = require('express');
const router = express.Router();
const ExpectedAppointmentActivitiesController = require('../../controllers/appointments_and_scheduling/ExpectedAppointmentActivitiesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_expected_appointment_activities',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
			AppointmentId:request.query.AppointmentId,
			ActivityDescription:request.query.ActivityDescription
		
      
        };
	
	      var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();
          myExpectedAppointmentActivitiesControllerObject.insert_expected_appointment_activities(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_expected_appointment_activities',function(request,response){
  var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();
    myExpectedAppointmentActivitiesControllerObject.get_all_expected_appointment_activities(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_expected_appointment_activities',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    AppointmentId:request.query.AppointmentId,
			ActivityDescription:request.query.ActivityDescription
		
      
        };
	
    var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();
    myExpectedAppointmentActivitiesControllerObject.batch_expected_appointment_activities_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_expected_appointment_activities',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();


        myExpectedAppointmentActivitiesControllerObject.get_specific_expected_appointment_activities(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_expected_appointment_activities',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    AppointmentId:request.query.AppointmentId,
			ActivityDescription:request.query.ActivityDescription
		
      
           };
	
        var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();
          myExpectedAppointmentActivitiesControllerObject.individual_expected_appointment_activities_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_expected_appointment_activities',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
     var myExpectedAppointmentActivitiesControllerObject=new ExpectedAppointmentActivitiesController();
    myExpectedAppointmentActivitiesControllerObject.delete_expected_appointment_activities_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


