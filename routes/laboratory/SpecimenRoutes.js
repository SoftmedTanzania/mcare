/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SpecimenController" class

*/




const express = require('express');
const router = express.Router();
const SpecimenController = require('../../controllers/laboratory/SpecimenController.js');




   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_specimen',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 SpecimenTypeId:request.query.SpecimenTypeId,
		 SpecimenDescription:request.query.SpecimenDescription,
		 QualificationStatus:request.query.QualificationStatus,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 PaymentStatus:request.query.PaymentStatus,
		 ArrivalStatus:request.query.ArrivalStatus
		
      
        };
	
	      var mySpecimenControllerObject=new SpecimenController();
          mySpecimenControllerObject.insert_specimen(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_specimen',function(request,response){
    var mySpecimenControllerObject=new SpecimenController();
    mySpecimenControllerObject.get_all_specimen(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/update_specimen',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 SpecimenTypeId:request.query.SpecimenTypeId,
		 SpecimenDescription:request.query.SpecimenDescription,
		 QualificationStatus:request.query.QualificationStatus,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 PaymentStatus:request.query.PaymentStatus,
		 ArrivalStatus:request.query.ArrivalStatus
		
      
        };
	
   var mySpecimenControllerObject=new SpecimenController();
    mySpecimenControllerObject.batch_specimen_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_specimen',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var mySpecimenControllerObject=new SpecimenController();


        mySpecimenControllerObject.get_specific_specimen(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });








   router.get('/update_individual_specimen',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		 SpecimenTypeId:request.query.SpecimenTypeId,
		 SpecimenDescription:request.query.SpecimenDescription,
		 QualificationStatus:request.query.QualificationStatus,
		 PatientId:request.query.PatientId,
		 EncounterId:request.query.EncounterId,
		 PaymentStatus:request.query.PaymentStatus,
		 ArrivalStatus:request.query.ArrivalStatus
		
      
           };
	
          var mySpecimenControllerObject=new SpecimenController();
          mySpecimenControllerObject.individual_specimen_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_specimen',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySpecimenControllerObject=new SpecimenController();
    mySpecimenControllerObject.delete_specimen_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;






