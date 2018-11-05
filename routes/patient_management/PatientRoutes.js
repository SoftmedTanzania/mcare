const express = require('express');
const router = express.Router();
const PatientController = require('../../controllers/patient_management/PatientController.js');
const PatientTypesController = require('../../controllers/patient_management/PatientTypesController.js');
 
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
 
 
router.get('/my_form.html', function (req, res) {
    res.sendFile( __dirname + "/" + "my_form.html" );
})

router.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



router.get('/',function(request,res){
	
   res.send("Hello!Welcome to mcare");
});

router.get('/patient_registration',function(request,response){
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.insertPatient();

});

router.get('/get_all_patients',function(request,response){
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.getAllPatients(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});

router.get('/update_patients',function(request,response){
	
var	jsonObject_ = {
      Surname:req.query.first_name,
      MiddleName:req.query.last_name
   };
	
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.batch_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});

router.get('/get_specific_patients',function(request,response){
   var mKey=request.query.column_name;
   //var mValue=parseInt(request.query.search_value, 10);
   var mValue=request.query.search_value;
   
   var myPatientControllerObject=new PatientController();


    myPatientControllerObject.getSpecificPatients(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
    });

});
 
 
module.exports = router;