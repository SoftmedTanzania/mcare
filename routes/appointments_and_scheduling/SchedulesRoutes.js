/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the schedules table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SchedulesController" class

*/




const express = require('express');
const router = express.Router();
const SchedulesController = require('../../controllers/appointments_and_scheduling/SchedulesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_schedules',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
			PatientId:request.query.PatientId,
			SlotId:request.query.SlotId
		
      
        };
	
	      var mySchedulesControllerObject=new SchedulesController();
          mySchedulesControllerObject.insert_schedules(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_schedules',function(request,response){
   var mySchedulesControllerObject=new SchedulesController();
    mySchedulesControllerObject.get_all_schedules(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_schedules',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			SlotId:request.query.SlotId
		
      
        };
	
     var mySchedulesControllerObject=new SchedulesController();
    mySchedulesControllerObject.batch_schedules_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_schedules',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var mySchedulesControllerObject=new SchedulesController();


        mySchedulesControllerObject.get_specific_schedules(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_schedules',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			SlotId:request.query.SlotId
		
      
           };
	
        var mySchedulesControllerObject=new SchedulesController();
          mySchedulesControllerObject.individual_schedules_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_schedules',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySchedulesControllerObject=new SchedulesController();
    mySchedulesControllerObject.delete_schedules_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


