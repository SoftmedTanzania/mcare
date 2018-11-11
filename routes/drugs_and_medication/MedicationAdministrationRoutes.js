/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_administration table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"MedicationAdministrationController" class

*/





const express = require('express');
const router = express.Router();
const MedicationAdministrationController = require('../../controllers/drugs_and_medication/MedicationAdministrationController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});




   router.get('/add_medication_administration',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    MedicationRequestDetailId:request.query.MedicationRequestDetailId,
			AdministrationStatus:request.query.AdministrationStatus,
			AdministrationComment:request.query.AdministrationComment,
		    AdministrationDate:date
		
      
        };
	
	      var myMedicationAdministrationControllerObject=new MedicationAdministrationController();
          myMedicationAdministrationControllerObject.insert_medication_administration(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_medication_administration',function(request,response){
    var myMedicationAdministrationControllerObject=new MedicationAdministrationController();
    myMedicationAdministrationControllerObject.get_all_medication_administration(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_medication_administration',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    MedicationRequestDetailId:request.query.MedicationRequestDetailId,
			AdministrationStatus:request.query.AdministrationStatus,
			AdministrationComment:request.query.AdministrationComment,
		    AdministrationDate:date
		
      
        };
	
    var myMedicationAdministrationControllerObject=new MedicationAdministrationController();
    myMedicationAdministrationControllerObject.batch_medication_administration_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_medication_administration',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myMedicationAdministrationControllerObject=new MedicationAdministrationController();


        myMedicationAdministrationControllerObject.get_specific_medication_administration(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });








   router.get('/update_individual_medication_administration',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	      var date = new Date();
	      date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		    MedicationRequestDetailId:request.query.MedicationRequestDetailId,
			AdministrationStatus:request.query.AdministrationStatus,
			AdministrationComment:request.query.AdministrationComment,
		    AdministrationDate:date
		
      
           };
	
          var myMedicationAdministrationControllerObject=new MedicationAdministrationController();
          myMedicationAdministrationControllerObject.individual_medication_administration_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });








   router.get('/delete_individual_medication_administration',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myMedicationAdministrationControllerObject=new MedicationAdministrationController();
    myMedicationAdministrationControllerObject.delete_medication_administration_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

