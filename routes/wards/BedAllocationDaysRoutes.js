/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_allocation_days table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BedAllocationDaysController" class

*/




const express = require('express');
const router = express.Router();
const BedAllocationDaysController = require('../../controllers/wards/BedAllocationDaysController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_bed_allocation_days',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		    
			BedAllocationId:request.query.BedAllocationId
		
      
        };
	
	      var myBedAllocationDaysControllerObject=new BedAllocationDaysController();
          myBedAllocationDaysControllerObject.insert_bed_allocation_days(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_bed_allocation_days',function(request,response){
   var myBedAllocationDaysControllerObject=new BedAllocationDaysController();
    myBedAllocationDaysControllerObject.get_all_bed_allocation_days(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_bed_allocation_days',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    BedAllocationId:request.query.BedAllocationId
		
      
        };
	
    var myBedAllocationDaysControllerObject=new BedAllocationDaysController();
    myBedAllocationDaysControllerObject.batch_bed_allocation_days_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_bed_allocation_days',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myBedAllocationDaysControllerObject=new BedAllocationDaysController();


        myBedAllocationDaysControllerObject.get_specific_bed_allocation_days(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_bed_allocation_days',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    BedAllocationId:request.query.BedAllocationId
		
      
           };
	
         var myBedAllocationDaysControllerObject=new BedAllocationDaysController();
          myBedAllocationDaysControllerObject.individual_bed_allocation_days_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_bed_allocation_days',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myBedAllocationDaysControllerObject=new BedAllocationDaysController();
    myBedAllocationDaysControllerObject.delete_bed_allocation_days_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


