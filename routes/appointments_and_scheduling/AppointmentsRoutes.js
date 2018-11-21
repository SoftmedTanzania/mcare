/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the appointments table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"AppointmentsController" class

*/




const express = require('express');
const router = express.Router();
const AppointmentsController = require('../../controllers/appointments_and_scheduling/AppointmentsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_appointments',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
			AppointmentTypeCategoryId:request.query.AppointmentTypeCategoryId,
			PatientId:request.query.PatientId,
			SlotId:request.query.SlotId,
			EncounterId:request.query.EncounterId,
			ConfirmationStatus:request.query.ConfirmationStatus,
			AttendanceStatus:request.query.AttendanceStatus
		
      
        };
	
	      var myAppointmentsControllerObject=new AppointmentsController();
          myAppointmentsControllerObject.insert_appointments(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_appointments',function(request,response){
   var myAppointmentsControllerObject=new AppointmentsController();
    myAppointmentsControllerObject.get_all_appointments(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_appointments',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    AppointmentTypeCategoryId:request.query.AppointmentTypeCategoryId,
			PatientId:request.query.PatientId,
			SlotId:request.query.SlotId,
			EncounterId:request.query.EncounterId,
			ConfirmationStatus:request.query.ConfirmationStatus,
			AttendanceStatus:request.query.AttendanceStatus
		
      
        };
	
    var myAppointmentsControllerObject=new AppointmentsController();
    myAppointmentsControllerObject.batch_appointments_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_appointments',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myAppointmentsControllerObject=new AppointmentsController();


        myAppointmentsControllerObject.get_specific_appointments(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_appointments',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    AppointmentTypeCategoryId:request.query.AppointmentTypeCategoryId,
			PatientId:request.query.PatientId,
			SlotId:request.query.SlotId,
			EncounterId:request.query.EncounterId,
			ConfirmationStatus:request.query.ConfirmationStatus,
			AttendanceStatus:request.query.AttendanceStatus
		
      
           };
	
         var myAppointmentsControllerObject=new AppointmentsController();
          myAppointmentsControllerObject.individual_appointments_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_appointments',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myAppointmentsControllerObject=new AppointmentsController();
    myAppointmentsControllerObject.delete_appointments_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


