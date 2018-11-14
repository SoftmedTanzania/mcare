/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_records table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"LabsController" class

*/




const express = require('express');
const router = express.Router();
const SpecimenRecordsController = require('../../controllers/laboratory/SpecimenRecordsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_specimen_records',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		 SpecimenRecordCategoryId:request.query.SpecimenRecordCategoryId,
		 SpecimenId:request.query.SpecimenId,
		 SpecimenRecordValue:request.query.SpecimenRecordValue,
		 SpecimenRecordDate:date
		
      
        };
	
	      var mySpecimenRecordsControllerObject=new SpecimenRecordsController();
          mySpecimenRecordsControllerObject.insert_specimen_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_specimen_records',function(request,response){
    var mySpecimenRecordsControllerObject=new SpecimenRecordsController();
    mySpecimenRecordsControllerObject.get_all_specimen_records(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_specimen_records',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		 SpecimenRecordCategoryId:request.query.SpecimenRecordCategoryId,
		 SpecimenId:request.query.SpecimenId,
		 SpecimenRecordValue:request.query.SpecimenRecordValue,
		 SpecimenRecordDate:date
		
      
        };
	
   var mySpecimenRecordsControllerObject=new SpecimenRecordsController();
    mySpecimenRecordsControllerObject.batch_specimen_records_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_specimen_records',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var mySpecimenRecordsControllerObject=new SpecimenRecordsController();


        mySpecimenRecordsControllerObject.get_specific_specimen_records(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_specimen_records',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		 SpecimenRecordCategoryId:request.query.SpecimenRecordCategoryId,
		 SpecimenId:request.query.SpecimenId,
		 SpecimenRecordValue:request.query.SpecimenRecordValue,
		 SpecimenRecordDate:date
		
      
           };
	
          var mySpecimenRecordsControllerObject=new SpecimenRecordsController();
          mySpecimenRecordsControllerObject.individual_specimen_records_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_specimen_records',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
     var mySpecimenRecordsControllerObject=new SpecimenRecordsController();
    mySpecimenRecordsControllerObject.delete_specimen_records_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


