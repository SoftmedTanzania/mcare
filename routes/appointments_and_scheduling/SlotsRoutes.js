/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the slots table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SlotsController" class

*/




const express = require('express');
const router = express.Router();
const SlotsController = require('../../controllers/appointments_and_scheduling/SlotsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_slots',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
			SlotTypeCategoryId:request.query.SlotTypeCategoryId,
			UserId:request.query.UserId,
			SlotStartDate:request.query.SlotStartDate,
			SlotEndDate:request.query.SlotEndDate
		
      
        };
	
	      var mySlotsControllerObject=new SlotsController();
          mySlotsControllerObject.insert_slots(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_slots',function(request,response){
   var mySlotsControllerObject=new SlotsController();
    mySlotsControllerObject.get_all_slots(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_slots',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    SlotTypeCategoryId:request.query.SlotTypeCategoryId,
			UserId:request.query.UserId,
			SlotStartDate:request.query.SlotStartDate,
			SlotEndDate:request.query.SlotEndDate
		
      
        };
	
     var mySlotsControllerObject=new SlotsController();
    mySlotsControllerObject.batch_slots_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_slots',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var mySlotsControllerObject=new SlotsController();


        mySlotsControllerObject.get_specific_slots(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_slots',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		   SlotTypeCategoryId:request.query.SlotTypeCategoryId,
			UserId:request.query.UserId,
			SlotStartDate:request.query.SlotStartDate,
			SlotEndDate:request.query.SlotEndDate
		
      
           };
	
        var mySlotsControllerObject=new SlotsController();
          mySlotsControllerObject.individual_slots_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_slots',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySlotsControllerObject=new SlotsController();
    mySlotsControllerObject.delete_slots_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


