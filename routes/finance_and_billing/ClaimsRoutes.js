/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the claims table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClaimsController" class

*/



const express = require('express');
const router = express.Router();
const ClaimsController = require('../../controllers/finance_and_billing/ClaimsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('/add_claims',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
        
			//added by api
		 
		
      
        };
	
	      var myClaimsControllerObject=new ClaimsController();
          myClaimsControllerObject.insert_claims(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_claims',function(request,response){
     var myClaimsControllerObject=new ClaimsController();
    myClaimsControllerObject.get_all_claims(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_claims',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    //No general update
		
      
        };
	
   var myClaimsControllerObject=new ClaimsController();
    myClaimsControllerObject.batch_claims_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_claims',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myClaimsControllerObject=new ClaimsController();


        myClaimsControllerObject.get_specific_claims(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_claims',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		  
			ClaimAmount:request.query.ClaimAmount
		
      
           };
	
          var myClaimsControllerObject=new ClaimsController();
          myClaimsControllerObject.individual_claims_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_claims',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
  var myClaimsControllerObject=new ClaimsController();
    myClaimsControllerObject.delete_claims_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




