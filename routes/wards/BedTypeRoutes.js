/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_type table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BedTypeController" class

*/




const express = require('express');
const router = express.Router();
const BedTypeController = require('../../controllers/wards/BedTypeController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_bed_type',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		    BedTypeDescription:request.query.BedTypeDescription,
			PricePerNight:request.query.PricePerNight
		
      
        };
	
	      var myBedTypeControllerObject=new BedTypeController();
          myBedTypeControllerObject.insert_bed_type(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_bed_type',function(request,response){
   var myBedTypeControllerObject=new BedTypeController();
    myBedTypeControllerObject.get_all_bed_type(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_bed_type',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    BedTypeDescription:request.query.BedTypeDescription,
			PricePerNight:request.query.PricePerNight
		
      
        };
	
     var myBedTypeControllerObject=new BedTypeController();
    myBedTypeControllerObject.batch_bed_type_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_bed_type',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
          var myBedTypeControllerObject=new BedTypeController();


        myBedTypeControllerObject.get_specific_bed_type(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_bed_type',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    BedTypeDescription:request.query.BedTypeDescription,
			PricePerNight:request.query.PricePerNight
		
      
           };
	
         var myBedTypeControllerObject=new BedTypeController();
          myBedTypeControllerObject.individual_bed_type_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_bed_type',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myBedTypeControllerObject=new BedTypeController();
    myBedTypeControllerObject.delete_bed_type_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


