/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the appointment_type_category table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"AppointmentTypeCategoryController" class

*/




const express = require('express');
const router = express.Router();
const AppointmentTypeCategoryController = require('../../controllers/appointments_and_scheduling/AppointmentTypeCategoryController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_appointment_type_category',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
			AppointmentTypeId:request.query.AppointmentTypeId,
			AppointmentTypeCategoryDescription:request.query.AppointmentTypeCategoryDescription
		
      
        };
	
	      var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();
          myAppointmentTypeCategoryControllerObject.insert_appointment_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_appointment_type_category',function(request,response){
   var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();
    myAppointmentTypeCategoryControllerObject.get_all_appointment_type_category(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_appointment_type_category',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    AppointmentTypeId:request.query.AppointmentTypeId,
			AppointmentTypeCategoryDescription:request.query.AppointmentTypeCategoryDescription
		
      
        };
	
    var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();
    myAppointmentTypeCategoryControllerObject.batch_appointment_type_category_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_appointment_type_category',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();


        myAppointmentTypeCategoryControllerObject.get_specific_appointment_type_category(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_appointment_type_category',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    AppointmentTypeId:request.query.AppointmentTypeId,
			AppointmentTypeCategoryDescription:request.query.AppointmentTypeCategoryDescription
		
      
           };
	
        var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();
          myAppointmentTypeCategoryControllerObject.individual_appointment_type_category_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_appointment_type_category',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myAppointmentTypeCategoryControllerObject=new AppointmentTypeCategoryController();
    myAppointmentTypeCategoryControllerObject.delete_appointment_type_category_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


