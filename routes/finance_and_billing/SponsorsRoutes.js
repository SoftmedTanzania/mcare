/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the sponsors table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"SponsorsController" class

*/



const express = require('express');
const router = express.Router();
const SponsorsController = require('../../controllers/finance_and_billing/SponsorsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_sponsors',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
        
			SponsorTypeId:request.query.SponsorTypeId,
			SponsorName:request.query.SponsorName,
			SponsorCode:request.query.SponsorCode
		 
		
      
        };
	
	      var mySponsorsControllerObject=new SponsorsController();
          mySponsorsControllerObject.insert_sponsors(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_sponsors',function(request,response){
     var mySponsorsControllerObject=new SponsorsController();
    mySponsorsControllerObject.get_all_sponsors(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_sponsors',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    SponsorTypeId:request.query.SponsorTypeId,
			SponsorName:request.query.SponsorName,
			SponsorCode:request.query.SponsorCode
		
      
        };
	
   var mySponsorsControllerObject=new SponsorsController();
    mySponsorsControllerObject.batch_sponsors_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_sponsors',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var mySponsorsControllerObject=new SponsorsController();


        mySponsorsControllerObject.get_specific_sponsors(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_sponsors',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		  SponsorTypeId:request.query.SponsorTypeId,
			SponsorName:request.query.SponsorName,
			SponsorCode:request.query.SponsorCode
		
      
           };
	
          var mySponsorsControllerObject=new SponsorsController();
          mySponsorsControllerObject.individual_sponsors_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_sponsors',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
   var mySponsorsControllerObject=new SponsorsController();
    mySponsorsControllerObject.delete_sponsors_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




