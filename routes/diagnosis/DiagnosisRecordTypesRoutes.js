/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis_record_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DiagnosisRecordTypesController" class

*/


const express = require('express');
const router = express.Router();
const DiagnosisRecordTypesController = require('../../controllers/diagnosis/DiagnosisRecordTypesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_diagnosis_record_types',function(request,response){
	   
	   
        var	jsonObject_ = {
         
		 DiagnosisRecordTypeDescription:request.query.DiagnosisRecordTypeDescription,
		 DiagnosisRecordTypeCode:request.query.DiagnosisRecordTypeCode
		
      
        };
	
	      var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();
          myDiagnosisRecordTypesControllerObject.insert_diagnosis_record_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_diagnosis_record_types',function(request,response){
    var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();
    myDiagnosisRecordTypesControllerObject.get_all_diagnosis_record_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_diagnosis_record_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 DiagnosisRecordTypeDescription:request.query.DiagnosisRecordTypeDescription,
		 DiagnosisRecordTypeCode:request.query.DiagnosisRecordTypeCode
		
      
        };
	
   var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();
    myDiagnosisRecordTypesControllerObject.batch_diagnosis_record_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_diagnosis_record_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();


        myDiagnosisRecordTypesControllerObject.get_specific_diagnosis_record_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_diagnosis_record_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         DiagnosisRecordTypeDescription:request.query.DiagnosisRecordTypeDescription,
		         DiagnosisRecordTypeCode:request.query.DiagnosisRecordTypeCode
		
      
           };
	
          var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();
          myDiagnosisRecordTypesControllerObject.individual_diagnosis_record_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_diagnosis_record_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myDiagnosisRecordTypesControllerObject=new DiagnosisRecordTypesController();
    myDiagnosisRecordTypesControllerObject.delete_diagnosis_record_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;



