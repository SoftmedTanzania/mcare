/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_sponsors table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PatientSponsorsController" class

*/


const express = require('express');
const router = express.Router();
const PatientSponsorsController = require('../../controllers/patient_management/PatientSponsorsController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_patient_sponsor',function(request,response){
     var	jsonObject_ = {
        PatientId:request.query.PatientId,
		SponsorId:request.query.SponsorId
		
      
        };
	
	      var myPatientSponsorsControllerObject=new PatientSponsorsController();
          myPatientSponsorsControllerObject.insert_patient_sponsors(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_patient_sponsors',function(request,response){
    var myPatientSponsorsControllerObject=new PatientSponsorsController();
    myPatientSponsorsControllerObject.get_all_patient_sponsors(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/update_patient_sponsors',function(request,response){
	
    var	jsonObject_ = {
        PatientId:request.query.PatientId,
		SponsorId:request.query.SponsorId
		
      
        };
	
    var myPatientSponsorsControllerObject=new PatientSponsorsController();
    myPatientSponsorsControllerObject.batch_patient_sponsors_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_patient_sponsors',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPatientSponsorsControllerObject=new PatientSponsorsController();


        myPatientSponsorsControllerObject.get_specific_patient_sponsors(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_patient_sponsors',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
          var	jsonObject_ = {
                PatientId:request.query.PatientId,
		        SponsorId:request.query.SponsorId
		
      
               };
	
          var myPatientSponsorsControllerObject=new PatientSponsorsController();
          myPatientSponsorsControllerObject.individual_patient_sponsors_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_patient_sponsors',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientSponsorsControllerObject=new PatientSponsorsController();
    myPatientSponsorsControllerObject.delete_patient_sponsors_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;
