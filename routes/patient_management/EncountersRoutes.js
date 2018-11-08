/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the encounters table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EncountersController" class

*/


const express = require('express');
const router = express.Router();
const EncountersController = require('../../controllers/patient_management/EncountersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});




   router.get('/add_encounters',function(request,response){
        var	jsonObject_ = {
         
		 PatientRevisitId:request.query.PatientRevisitId,
		 UserId:request.query.UserId,
		 EncounterDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
	      var myEncountersControllerObject=new EncountersController();
          myEncountersControllerObject.insert_encounters(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });





   router.get('/get_all_encounters',function(request,response){
    var myEncountersControllerObject=new EncountersController();
    myEncountersControllerObject.get_all_encounters(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_encounters',function(request,response){
	
    var	jsonObject_ = {
         
		 PatientRevisitId:request.query.PatientRevisitId,
		 UserId:request.query.UserId,
		 EncounterDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
        };
	
   var myEncountersControllerObject=new EncountersController();
    myEncountersControllerObject.batch_encounters_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_encounters',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myEncountersControllerObject=new EncountersController();


        myEncountersControllerObject.get_specific_encounters(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });





   router.get('/update_individual_encounters',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
          var	jsonObject_ = {
         
		         PatientRevisitId:request.query.PatientRevisitId,
		         UserId:request.query.UserId,
		         EncounterDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
		
      
           };
	
          var myEncountersControllerObject=new EncountersController();
          myEncountersControllerObject.individual_encounters_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_encounters',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myEncountersControllerObject=new EncountersController();
    myEncountersControllerObject.delete_encounters_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

