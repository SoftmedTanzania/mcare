/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the slot_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SlotTypesController" class

*/




const express = require('express');
const router = express.Router();
const SlotTypesController = require('../../controllers/appointments_and_scheduling/SlotTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_slot_types',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		
			SlotTypeDescription:request.query.SlotTypeDescription,
			SlotTypeCode:request.query.SlotTypeCode
		
      
        };
	
	      var mySlotTypesControllerObject=new SlotTypesController();
          mySlotTypesControllerObject.insert_slot_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_slot_types',function(request,response){
   var mySlotTypesControllerObject=new SlotTypesController();
    mySlotTypesControllerObject.get_all_slot_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_slot_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    SlotTypeDescription:request.query.SlotTypeDescription,
			SlotTypeCode:request.query.SlotTypeCode
		
      
        };
	
    var mySlotTypesControllerObject=new SlotTypesController();
    mySlotTypesControllerObject.batch_slot_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_slot_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var mySlotTypesControllerObject=new SlotTypesController();


        mySlotTypesControllerObject.get_specific_slot_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_slot_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    SlotTypeDescription:request.query.SlotTypeDescription,
			SlotTypeCode:request.query.SlotTypeCode
		
      
           };
	
         var mySlotTypesControllerObject=new SlotTypesController();
          mySlotTypesControllerObject.individual_slot_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_slot_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySlotTypesControllerObject=new SlotTypesController();
    mySlotTypesControllerObject.delete_slot_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


