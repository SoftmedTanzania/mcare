/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the labs table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"LabsController" class

*/




const express = require('express');
const router = express.Router();
const LabsController = require('../../controllers/laboratory/LabsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_labs',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 LabCategoryId:request.query.LabCategoryId,
		 LabDescription:request.query.LabDescription,
		 LabReferenceNo:request.query.LabReferenceNo,
		 FacilityId:request.query.FacilityId
		
      
        };
	
	      var myLabsControllerObject=new LabsController();
          myLabsControllerObject.insert_labs(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_labs',function(request,response){
    var myLabsControllerObject=new LabsController();
    myLabsControllerObject.get_all_labs(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_labs',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 LabCategoryId:request.query.LabCategoryId,
		 LabDescription:request.query.LabDescription,
		 LabReferenceNo:request.query.LabReferenceNo,
		 FacilityId:request.query.FacilityId
		
      
        };
	
   var myLabsControllerObject=new LabsController();
    myLabsControllerObject.batch_labs_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_labs',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myLabsControllerObject=new LabsController();


        myLabsControllerObject.get_specific_labs(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_labs',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         LabCategoryId:request.query.LabCategoryId,
		         LabDescription:request.query.LabDescription,
		         LabReferenceNo:request.query.LabReferenceNo,
		         FacilityId:request.query.FacilityId
		
      
           };
	
          var myLabsControllerObject=new LabsController();
          myLabsControllerObject.individual_labs_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_labs',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myLabsControllerObject=new LabsController();
    myLabsControllerObject.delete_labs_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


