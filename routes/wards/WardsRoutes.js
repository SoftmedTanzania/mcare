/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"WardsController" class

*/




const express = require('express');
const router = express.Router();
const WardsController = require('../../controllers/wards/WardsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_wards',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		    WardTypeCategoryId:request.query.WardTypeCategoryId,
			WardName:request.query.WardName,
			FacilityId:request.query.FacilityId,
			WardReferenceNo:request.query.WardReferenceNo
		
      
        };
	
	      var myWardsControllerObject=new WardsController();
          myWardsControllerObject.insert_wards(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_wards',function(request,response){
   var myWardsControllerObject=new WardsController();
    myWardsControllerObject.get_all_wards(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_wards',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    WardTypeCategoryId:request.query.WardTypeCategoryId,
			WardName:request.query.WardName,
			FacilityId:request.query.FacilityId,
			WardReferenceNo:request.query.WardReferenceNo
		
      
        };
	
    var myWardsControllerObject=new WardsController();
    myWardsControllerObject.batch_wards_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_wards',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
          var myWardsControllerObject=new WardsController();


        myWardsControllerObject.get_specific_wards(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_wards',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		     WardTypeCategoryId:request.query.WardTypeCategoryId,
			WardName:request.query.WardName,
			FacilityId:request.query.FacilityId,
			WardReferenceNo:request.query.WardReferenceNo
		
      
           };
	
         var myWardsControllerObject=new WardsController();
          myWardsControllerObject.individual_wards_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_wards',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myWardsControllerObject=new WardsController();
    myWardsControllerObject.delete_wards_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


