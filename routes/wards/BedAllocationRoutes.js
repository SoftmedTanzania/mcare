/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_allocation table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BedAllocationController" class

*/




const express = require('express');
const router = express.Router();
const BedAllocationController = require('../../controllers/wards/BedAllocationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_bed_allocation',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		 
		    PatientRevisitId:request.query.PatientRevisitId,
			BedId:request.query.BedId,
			UserId:request.query.UserId,
			AllocationStatus:request.query.AllocationStatus,
			AllocationDate:date
		
      
        };
	
	      var myBedAllocationControllerObject=new BedAllocationController();
          myBedAllocationControllerObject.insert_bed_allocation(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_bed_allocation(',function(request,response){
  var myBedAllocationControllerObject=new BedAllocationController();
    myBedAllocationControllerObject.get_all_bed_allocation(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_bed_allocation',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    PatientRevisitId:request.query.PatientRevisitId,
			BedId:request.query.BedId,
			UserId:request.query.UserId,
			AllocationStatus:request.query.AllocationStatus,
			AllocationDate:date
		
      
        };
	
     var myBedAllocationControllerObject=new BedAllocationController();
    myBedAllocationControllerObject.batch_bed_allocation_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_bed_allocation',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
          var myBedAllocationControllerObject=new BedAllocationController();


        myBedAllocationControllerObject.get_specific_bed_allocation(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_bed_allocation',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    PatientRevisitId:request.query.PatientRevisitId,
			BedId:request.query.BedId,
			UserId:request.query.UserId,
			AllocationStatus:request.query.AllocationStatus,
			AllocationDate:date
		
      
           };
	
         var myBedAllocationControllerObject=new BedAllocationController();
          myBedAllocationControllerObject.individual_bed_allocation_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_bed_allocation',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myBedAllocationControllerObject=new BedAllocationController();
    myBedAllocationControllerObject.delete_bed_allocation_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


