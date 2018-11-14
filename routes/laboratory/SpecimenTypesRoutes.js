/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SpecimenTypesController" class

*/




const express = require('express');
const router = express.Router();
const SpecimenTypesController = require('../../controllers/laboratory/SpecimenTypesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});







   router.get('/add_specimen_types',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 SpecimenTypeDescription:request.query.SpecimenTypeDescription,
		 SpecimenTypeCode:request.query.SpecimenTypeCode
		
      
        };
	
	      var mySpecimenTypesControllerObject=new SpecimenTypesController();
          mySpecimenTypesControllerObject.insert_specimen_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_specimen_types',function(request,response){
    var mySpecimenTypesControllerObject=new SpecimenTypesController();
    mySpecimenTypesControllerObject.get_all_specimen_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_specimen_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		 SpecimenTypeDescription:request.query.SpecimenTypeDescription,
		 SpecimenTypeCode:request.query.SpecimenTypeCode
		
      
        };
	
   var mySpecimenTypesControllerObject=new SpecimenTypesController();
    mySpecimenTypesControllerObject.batch_specimen_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/get_specific_specimen_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
          var mySpecimenTypesControllerObject=new SpecimenTypesController();


        mySpecimenTypesControllerObject.get_specific_specimen_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_specimen_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         SpecimenTypeDescription:request.query.SpecimenTypeDescription,
		         SpecimenTypeCode:request.query.SpecimenTypeCode
		
      
           };
	
          var mySpecimenTypesControllerObject=new SpecimenTypesController();
          mySpecimenTypesControllerObject.individual_specimen_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_specimen_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var mySpecimenTypesControllerObject=new SpecimenTypesController();
    mySpecimenTypesControllerObject.delete_specimen_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;





