/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedures table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"PerformedProceduresController" class

*/


const express = require('express');
const router = express.Router();
const PerformedProceduresController = require('../../controllers/procedures/PerformedProceduresController.js');


   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});






   router.get('/add_performed_procedures',function(request,response){
        var	jsonObject_ = {
         
		     EncounterId:request.query.EncounterId,
		     ProcedureId:request.query.ProcedureId
		
      
              };
	
	      var myPerformedProceduresControllerObject=new PerformedProceduresController();
          myPerformedProceduresControllerObject.insert_performed_procedures(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });




   router.get('/get_all_performed_procedures',function(request,response){
     var myPerformedProceduresControllerObject=new PerformedProceduresController();
    myPerformedProceduresControllerObject.get_all_performed_procedures(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_performed_procedures',function(request,response){
	
    var	jsonObject_ = {
         
		     EncounterId:request.query.EncounterId,
		     ProcedureId:request.query.ProcedureId
		
      
              };
	
	
  var myPerformedProceduresControllerObject=new PerformedProceduresController();
    myPerformedProceduresControllerObject.batch_performed_procedures_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/get_specific_performed_procedures',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myPerformedProceduresControllerObject=new PerformedProceduresController();


        myPerformedProceduresControllerObject.get_specific_performed_procedures(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });







   router.get('/update_individual_performed_procedures',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	
            var	jsonObject_ = {
         
		                   EncounterId:request.query.EncounterId,
		                   ProcedureId:request.query.ProcedureId
		
      
              };
	
         var myPerformedProceduresControllerObject=new PerformedProceduresController();
          myPerformedProceduresControllerObject.individual_performed_procedures_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });







   router.get('/delete_individual_performed_procedures',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPerformedProceduresControllerObject=new PerformedProceduresController();
    myPerformedProceduresControllerObject.delete_performed_procedures_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;


