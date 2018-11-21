/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_orders table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"RadiologyOrdersController" class

*/



const express = require('express');
const router = express.Router();
const RadiologyOrdersController = require('../../controllers/radiology/RadiologyOrdersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_radiology_orders',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    UserId:request.query.UserId,
			PatientId:request.query.PatientId,
			EncounterId:request.query.EncounterId,
			RadiologyOrderTypeId:request.query.RadiologyOrderTypeId,
			RadiologyId:request.query.RadiologyId,
			RadiologyOrderDate:date
		 
		
      
        };
	
	      var myRadiologyOrdersControllerObject=new RadiologyOrdersController();
          myRadiologyOrdersControllerObject.insert_radiology_orders(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_radiology_orders',function(request,response){
    var myRadiologyOrdersControllerObject=new RadiologyOrdersController();
    myRadiologyOrdersControllerObject.get_all_radiology_orders(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_radiology_orders',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    UserId:request.query.UserId,
			PatientId:request.query.PatientId,
			EncounterId:request.query.EncounterId,
			RadiologyOrderTypeId:request.query.RadiologyOrderTypeId,
			RadiologyId:request.query.RadiologyId,
			RadiologyOrderDate:date
		
      
        };
	
    var myRadiologyOrdersControllerObject=new RadiologyOrdersController();
    myRadiologyOrdersControllerObject.batch_radiology_orders_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_radiology_orders',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myRadiologyOrdersControllerObject=new RadiologyOrdersController();


        myRadiologyOrdersControllerObject.get_specific_radiology_orders(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_radiology_orders',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    UserId:request.query.UserId,
			PatientId:request.query.PatientId,
			EncounterId:request.query.EncounterId,
			RadiologyOrderTypeId:request.query.RadiologyOrderTypeId,
			RadiologyId:request.query.RadiologyId,
			RadiologyOrderDate:date
		
      
           };
	
           var myRadiologyOrdersControllerObject=new RadiologyOrdersController();
          myRadiologyOrdersControllerObject.individual_radiology_orders_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_radiology_orders',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myRadiologyOrdersControllerObject=new RadiologyOrdersController();
    myRadiologyOrdersControllerObject.delete_radiology_orders_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




