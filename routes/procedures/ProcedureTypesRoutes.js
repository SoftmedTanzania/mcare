/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedure_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ProcedureTypesController" class

*/


const express = require('express');
const router = express.Router();
const ProcedureTypesController = require('../../controllers/procedures/ProcedureTypesController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});




   router.get('/add_procedure_types',function(request,response){
        var	jsonObject_ = {
         
		 ProcedureTypeDescription:request.query.ProcedureTypeDescription,
		 ProcedureTypeCode:request.query.ProcedureTypeCode
		
      
        };
	
	      var myProcedureTypesControllerObject=new ProcedureTypesController();
          myProcedureTypesControllerObject.insert_procedure_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_procedure_types',function(request,response){
    var myProcedureTypesControllerObject=new ProcedureTypesController();
    myProcedureTypesControllerObject.get_all_procedure_types(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_procedure_types',function(request,response){
	
    var	jsonObject_ = {
         
		 ProcedureTypeDescription:request.query.ProcedureTypeDescription,
		 ProcedureTypeCode:request.query.ProcedureTypeCode
		
      
        };
	
   var myProcedureTypesControllerObject=new ProcedureTypesController();
    myProcedureTypesControllerObject.batch_procedure_types_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_procedure_types',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myProcedureTypesControllerObject=new ProcedureTypesController();


        myProcedureTypesControllerObject.get_specific_procedure_types(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_procedure_types',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		        ProcedureTypeDescription:request.query.ProcedureTypeDescription,
		        ProcedureTypeCode:request.query.ProcedureTypeCode
		
      
                };
	
          var myProcedureTypesControllerObject=new ProcedureTypesController();
          myProcedureTypesControllerObject.individual_procedure_types_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_procedure_types',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myProcedureTypesControllerObject=new ProcedureTypesController();
    myProcedureTypesControllerObject.delete_procedure_types_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


