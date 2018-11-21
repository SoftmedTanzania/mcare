/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_group table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"BedGroupController" class

*/




const express = require('express');
const router = express.Router();
const BedGroupController = require('../../controllers/wards/BedGroupController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_bed_group',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		    
			BedGroupDescription:request.query.BedGroupDescription,
			WardId:request.query.WardId
		
      
        };
	
	      var myBedGroupControllerObject=new BedGroupController();
          myBedGroupControllerObject.insert_bed_group(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_bed_group(',function(request,response){
   var myBedGroupControllerObject=new BedGroupController();
    myBedGroupControllerObject.get_all_bed_group(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_bed_group',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    BedGroupDescription:request.query.BedGroupDescription,
			WardId:request.query.WardId
		
      
        };
	
     var myBedGroupControllerObject=new BedGroupController();
    myBedGroupControllerObject.batch_bed_group_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_bed_group',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
          var myBedGroupControllerObject=new BedGroupController();


        myBedGroupControllerObject.get_specific_bed_group(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_bed_group',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    BedGroupDescription:request.query.BedGroupDescription,
			WardId:request.query.WardId
		
      
           };
	
         var myBedGroupControllerObject=new BedGroupController();
          myBedGroupControllerObject.individual_bed_group_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_bed_type',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myBedGroupControllerObject=new BedGroupController();
    myBedGroupControllerObject.delete_bed_group_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


