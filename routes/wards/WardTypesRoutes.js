/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the ward_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"WardTypesController" class

*/




const express = require('express');
const router = express.Router();
const WardTypesController = require('../../controllers/wards/WardTypesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_ward_types',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 
		 WardTypeDescription:request.query.WardTypeDescription
		
      
        };
	
	      var myWardTypesControllerObject=new WardTypesController();
          myWardTypesControllerObject.insert_ward_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_ward_types',function(request,response){
    var myWardTypesControllerObject=new WardTypesController();
    myWardTypesControllerObject.get_all_ward_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_ward_types',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		WardTypeDescription:request.query.WardTypeDescription
		
      
        };
	
   var myWardTypesControllerObject=new WardTypesController();
    myWardTypesControllerObject.batch_ward_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_ward_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myWardTypesControllerObject=new WardTypesController();


        myWardTypesControllerObject.get_specific_ward_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_ward_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		         WardTypeDescription:request.query.WardTypeDescription
		
      
           };
	
          var myWardTypesControllerObject=new WardTypesController();
          myWardTypesControllerObject.individual_ward_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_ward_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myWardTypesControllerObject=new WardTypesController();
    myWardTypesControllerObject.delete_ward_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


