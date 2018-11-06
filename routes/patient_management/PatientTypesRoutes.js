/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patients table's route class.
It receives calls from the "Index.js" and
passes the calls down to the "PatientTypesController"
class

*/


const express = require('express');
const router = express.Router();
const PatientTypesController = require('../../controllers/patient_management/PatientTypesController.js');
 
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/patient_types_configuration',function(request,response){
    var	jsonObject_ = {
        PatientTypeDescription:request.query.PatientTypeDescription,
		PatientTypeCode:request.query.PatientTypeCode
		
      
   };
	
	var myPatientTypesControllerObject=new PatientTypesController();
    myPatientTypesControllerObject.insert_patient_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/get_all_patient_types',function(request,response){
    var myPatientTypesControllerObject=new PatientTypesController();
    myPatientTypesControllerObject.get_all_patient_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/update_patient_types',function(request,response){
	
var	jsonObject_ = {
      PatientTypeDescription:request.query.PatientTypeDescription,
      PatientTypeCode:request.query.PatientTypeCode
   };
	
    var myPatientTypesControllerObject=new PatientTypesController();
    myPatientTypesControllerObject.batch_patient_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/get_specific_patient_types',function(request,response){
   var mKey=request.query.column_name;
   //var mValue=parseInt(request.query.search_value, 10);
   var mValue=request.query.search_value;
   
   var myPatientTypesControllerObject=new PatientTypesController();


    myPatientTypesControllerObject.get_specific_patient_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
    });

});






router.get('/update_individual_patient_types',function(request,response){
	
   var column_name=request.query.ColumnName;
   var value_=request.query.ColumnValue;
	
   var	jsonObject_ = {
      PatientTypeDescription:request.query.PatientTypeDescription,
      PatientTypeCode:request.query.PatientTypeCode
   };
	
    var myPatientTypesControllerObject=new PatientTypesController();
    myPatientTypesControllerObject.individual_patient_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/delete_individual_patient_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientTypesControllerObject=new PatientTypesController();
    myPatientTypesControllerObject.delete_patient_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});
 
 
module.exports = router;