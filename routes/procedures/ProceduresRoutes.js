/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedures table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ProceduresController" class

*/


const express = require('express');
const router = express.Router();
const ProceduresController = require('../../controllers/procedures/ProceduresController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



   router.get('/add_procedures',function(request,response){
        var	jsonObject_ = {
         
		     ProcedureTypeCategoryId:request.query.ProcedureTypeCategoryId,
			 ProcedureDescription:request.query.ProcedureDescription,
			 Price:request.query.Price,
		     RoleTypeCategoryId:request.query.RoleTypeCategoryId
		
      
              };
	
	      var myProceduresControllerObject=new ProceduresController();
          myProceduresControllerObject.insert_procedures(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });







   router.get('/get_all_procedures',function(request,response){
     var myProceduresControllerObject=new ProceduresController();
    myProceduresControllerObject.get_all_procedures(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/update_procedures',function(request,response){
	
    var	jsonObject_ = {
         
		     ProcedureTypeCategoryId:request.query.ProcedureTypeCategoryId,
			 ProcedureDescription:request.query.ProcedureDescription,
			 Price:request.query.Price,
		     RoleTypeCategoryId:request.query.RoleTypeCategoryId
		
      
              };
	
   var myProceduresControllerObject=new ProceduresController();
    myProceduresControllerObject.batch_procedures_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_procedures',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myProceduresControllerObject=new ProceduresController();


        myProceduresControllerObject.get_specific_procedures(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_procedures',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		     ProcedureTypeCategoryId:request.query.ProcedureTypeCategoryId,
			 ProcedureDescription:request.query.ProcedureDescription,
			 Price:request.query.Price,
		     RoleTypeCategoryId:request.query.RoleTypeCategoryId
		
      
              };
	
          var myProceduresControllerObject=new ProceduresController();
          myProceduresControllerObject.individual_procedures_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });








   router.get('/delete_individual_procedures',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myProceduresControllerObject=new ProceduresController();
    myProceduresControllerObject.delete_procedures_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;





