/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the beds table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BedsController" class

*/




const express = require('express');
const router = express.Router();
const BedsController = require('../../controllers/wards/BedsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_beds',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		    BedTypeId:request.query.BedTypeId,
			BedGroupId:request.query.BedGroupId,
			BedReferenceNo:request.query.BedReferenceNo,
			OccupancyStatus:request.query.OccupancyStatus
		
      
        };
	
	      var myBedsControllerObject=new BedsController();
          myBedsControllerObject.insert_beds(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_beds(',function(request,response){
   var myBedsControllerObject=new BedsController();
    myBedsControllerObject.get_all_beds(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_beds',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    BedTypeId:request.query.BedTypeId,
			BedGroupId:request.query.BedGroupId,
			BedReferenceNo:request.query.BedReferenceNo,
			OccupancyStatus:request.query.OccupancyStatus
		
      
        };
	
    var myBedsControllerObject=new BedsController();
    myBedsControllerObject.batch_beds_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_beds',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myBedsControllerObject=new BedsController();


        myBedsControllerObject.get_specific_beds(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_beds',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    BedTypeId:request.query.BedTypeId,
			BedGroupId:request.query.BedGroupId,
			BedReferenceNo:request.query.BedReferenceNo,
			OccupancyStatus:request.query.OccupancyStatus
		
      
           };
	
         var myBedsControllerObject=new BedsController();
          myBedsControllerObject.individual_beds_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_beds',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myBedsControllerObject=new BedsController();
    myBedsControllerObject.delete_beds_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


