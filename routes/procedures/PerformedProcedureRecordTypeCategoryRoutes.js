/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedure_record_type_category table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PerformedProcedureRecordTypeCategoryController" class

*/


const express = require('express');
const router = express.Router();
const PerformedProcedureRecordTypeCategoryController = require('../../controllers/procedures/PerformedProcedureRecordTypeCategoryController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});




   router.get('/add_performed_procedure_record_type_category',function(request,response){
        var	jsonObject_ = {
         
		     
			 PerformedProcedureRecordTypeId:request.query.PerformedProcedureRecordTypeId,
		     PerformedProcedureRecordTypeCategoryDescription:request.query.PerformedProcedureRecordTypeCategoryDescription
		
      
              };
	
	      var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();
          myPerformedProcedureRecordTypeCategoryControllerObject.insert_performed_procedure_record_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_performed_procedure_record_type_category',function(request,response){
     var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();
    myPerformedProcedureRecordTypeCategoryControllerObject.get_all_performed_procedure_record_type_category(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/update_performed_procedure_record_type_category',function(request,response){
	
    var	jsonObject_ = {
         
		     PerformedProcedureRecordTypeId:request.query.PerformedProcedureRecordTypeId,
		     PerformedProcedureRecordTypeCategoryDescription:request.query.PerformedProcedureRecordTypeCategoryDescription
		
      
              };
	
  var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();
    myPerformedProcedureRecordTypeCategoryControllerObject.batch_performed_procedure_record_type_category_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_performed_procedure_record_type_category',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();


        myPerformedProcedureRecordTypeCategoryControllerObject.get_specific_performed_procedure_record_type_category(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });




   router.get('/update_individual_performed_procedure_record_type_category',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		     PerformedProcedureRecordTypeId:request.query.PerformedProcedureRecordTypeId,
		     PerformedProcedureRecordTypeCategoryDescription:request.query.PerformedProcedureRecordTypeCategoryDescription
		
      
              };
	
          var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();
          myPerformedProcedureRecordTypeCategoryControllerObject.individual_performed_procedure_record_type_category_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_performed_procedure_record_type_category',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
     var myPerformedProcedureRecordTypeCategoryControllerObject=new PerformedProcedureRecordTypeCategoryController();
    myPerformedProcedureRecordTypeCategoryControllerObject.delete_performed_procedure_record_type_category_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




