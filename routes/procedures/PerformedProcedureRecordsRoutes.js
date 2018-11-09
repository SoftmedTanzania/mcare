/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedure_records table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PerformedProcedureRecordsController" class

*/



const express = require('express');
const router = express.Router();
const PerformedProcedureRecordsController = require('../../controllers/procedures/PerformedProcedureRecordsController.js');

   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


   router.get('/add_performed_procedure_records',function(request,response){
        var	jsonObject_ = {
         
		     PerformedProcedureId:request.query.PerformedProcedureId,
			 PerformedProcedureRecordTypeCategoryId:request.query.PerformedProcedureRecordTypeCategoryId,
			 PerformedProcedureRecordValue:request.query.PerformedProcedureRecordValue,
		     DateRecorded:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
              };
	
	      var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();
          myPerformedProcedureRecordsControllerObject.insert_performed_procedure_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });




   router.get('/get_all_performed_procedure_records',function(request,response){
     var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();
    myPerformedProcedureRecordsControllerObject.get_all_performed_procedure_records(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/update_performed_procedure_records',function(request,response){
	
    var	jsonObject_ = {
         
		     PerformedProcedureId:request.query.PerformedProcedureId,
			 PerformedProcedureRecordTypeCategoryId:request.query.PerformedProcedureRecordTypeCategoryId,
			 PerformedProcedureRecordValue:request.query.PerformedProcedureRecordValue,
		     DateRecorded:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
              };
	
   var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();
    myPerformedProcedureRecordsControllerObject.batch_performed_procedure_records_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_performed_procedure_records',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();


        myPerformedProcedureRecordsControllerObject.get_specific_performed_procedure_records(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_performed_procedure_records',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		     PerformedProcedureId:request.query.PerformedProcedureId,
			 PerformedProcedureRecordTypeCategoryId:request.query.PerformedProcedureRecordTypeCategoryId,
			 PerformedProcedureRecordValue:request.query.PerformedProcedureRecordValue,
		     DateRecorded:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
              };
	
         var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();
          myPerformedProcedureRecordsControllerObject.individual_performed_procedure_records_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_performed_procedure_records',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPerformedProcedureRecordsControllerObject=new PerformedProcedureRecordsController();
    myPerformedProcedureRecordsControllerObject.delete_performed_procedure_records_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;



