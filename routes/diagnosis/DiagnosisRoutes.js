/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the diagnosis table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DiagnosisController" class

*/



const express = require('express');
const router = express.Router();
const DiagnosisController = require('../../controllers/diagnosis/DiagnosisController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_diagnosis',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		 PatientRevisitId:request.query.PatientRevisitId,
		 DiagnosisDate:date
		
      
        };
	
	      var myDiagnosisControllerObject=new DiagnosisController();
          myDiagnosisControllerObject.insert_diagnosis(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_diagnosis',function(request,response){
    var myDiagnosisControllerObject=new DiagnosisController();
    myDiagnosisControllerObject.get_all_diagnosis(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_diagnosis',function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		 PatientRevisitId:request.query.PatientRevisitId,
		 DiagnosisDate:date
		
      
        };
	
   var myDiagnosisControllerObject=new DiagnosisController();
    myDiagnosisControllerObject.batch_diagnosis_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_diagnosis',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myDiagnosisControllerObject=new DiagnosisController();


        myDiagnosisControllerObject.get_specific_diagnosis(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_diagnosis',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		         PatientRevisitId:request.query.PatientRevisitId,
		         DiagnosisDate:date
		
      
           };
	
          var myDiagnosisControllerObject=new DiagnosisController();
          myDiagnosisControllerObject.individual_diagnosis_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_diagnosis',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myDiagnosisControllerObject=new DiagnosisController();
    myDiagnosisControllerObject.delete_diagnosis_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




