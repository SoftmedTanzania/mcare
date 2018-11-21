/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the sponsor_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SponsorTypesController" class

*/



const express = require('express');
const router = express.Router();
const SponsorTypesController = require('../../controllers/finance_and_billing/SponsorTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_sponsor_types',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
        
			SponsorTypeDescription:request.query.SponsorTypeDescription,
			SponsorTypeCode:request.query.SponsorTypeCode
		 
		
      
        };
	
	      var mySponsorTypesControllerObject=new SponsorTypesController();
          mySponsorTypesControllerObject.insert_sponsor_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_sponsor_types',function(request,response){
     var mySponsorTypesControllerObject=new SponsorTypesController();
    mySponsorTypesControllerObject.get_all_sponsor_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_sponsor_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    SponsorTypeDescription:request.query.SponsorTypeDescription,
			SponsorTypeCode:request.query.SponsorTypeCode
		
      
        };
	
   var mySponsorTypesControllerObject=new SponsorTypesController();
    mySponsorTypesControllerObject.batch_sponsor_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_sponsor_types_update',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var mySponsorTypesControllerObject=new SponsorTypesController();


        mySponsorTypesControllerObject.get_specific_sponsor_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_sponsor_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		   SponsorTypeDescription:request.query.SponsorTypeDescription,
			SponsorTypeCode:request.query.SponsorTypeCode
		
      
           };
	
           var mySponsorTypesControllerObject=new SponsorTypesController();
          mySponsorTypesControllerObject.individual_sponsor_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_sponsor_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
   var mySponsorTypesControllerObject=new SponsorTypesController();
    mySponsorTypesControllerObject.delete_sponsor_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




