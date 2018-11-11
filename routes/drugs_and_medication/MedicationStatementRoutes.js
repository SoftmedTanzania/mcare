/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_statement table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"MedicationStatementController" class

*/




const express = require('express');
const router = express.Router();
const MedicationStatementController = require('../../controllers/drugs_and_medication/MedicationStatementController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_medication_statement',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			MedicationStatementDescription:request.query.MedicationStatementDescription,
		    DrugConfigurationId:request.query.DrugConfigurationId,
			AdministrationtDate:date
		
      
        };
	
	      var myMedicationStatementControllerObject=new MedicationStatementController();
          myMedicationStatementControllerObject.insert_medication_statement(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_medication_statement',function(request,response){
    var myMedicationStatementControllerObject=new MedicationStatementController();
    myMedicationStatementControllerObject.get_all_medication_statement(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_medication_statement',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			MedicationStatementDescription:request.query.MedicationStatementDescription,
		    DrugConfigurationId:request.query.DrugConfigurationId,
			AdministrationtDate:date
		
      
        };
	
    var myMedicationStatementControllerObject=new MedicationStatementController();
    myMedicationStatementControllerObject.batch_medication_statement_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_medication_statement',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myMedicationStatementControllerObject=new MedicationStatementController();


        myMedicationStatementControllerObject.get_specific_medication_statement(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_medication_statement',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    PatientId:request.query.PatientId,
			MedicationStatementDescription:request.query.MedicationStatementDescription,
		    DrugConfigurationId:request.query.DrugConfigurationId,
			AdministrationtDate:date
		
      
           };
	
          var myMedicationStatementControllerObject=new MedicationStatementController();
          myMedicationStatementControllerObject.individual_medication_statement_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_medication_statement',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myMedicationStatementControllerObject=new MedicationStatementController();
    myMedicationStatementControllerObject.delete_medication_statement_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




