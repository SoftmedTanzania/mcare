/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the drug_configurations table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"DrugConfigurationsController" class

*/




const express = require('express');
const router = express.Router();
const DrugConfigurationsController = require('../../controllers/drugs_and_medication/DrugConfigurationsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});





   router.get('/add_drug_configurations',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    GenericDrugCategoryId:request.query.GenericDrugCategoryId,
			TradeName:request.query.TradeName,
		    PricePerMilligram:request.query.PricePerMilligram
		
      
        };
	
	      var myDrugConfigurationsControllerObject=new DrugConfigurationsController();
          myDrugConfigurationsControllerObject.insert_drug_configurations(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_drug_configurations',function(request,response){
    var myDrugConfigurationsControllerObject=new DrugConfigurationsController();
    myDrugConfigurationsControllerObject.get_all_drug_configurations(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });





   router.get('/update_drug_configurations',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    GenericDrugCategoryId:request.query.GenericDrugCategoryId,
			TradeName:request.query.TradeName,
		    PricePerMilligram:request.query.PricePerMilligram
		
      
        };
	
    var myDrugConfigurationsControllerObject=new DrugConfigurationsController();
    myDrugConfigurationsControllerObject.batch_drug_configurations_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });








   router.get('/get_specific_drug_configurations',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
        var myDrugConfigurationsControllerObject=new DrugConfigurationsController();


        myDrugConfigurationsControllerObject.get_specific_drug_configurations(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });








   router.get('/update_individual_drug_configurations',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		    GenericDrugCategoryId:request.query.GenericDrugCategoryId,
			TradeName:request.query.TradeName,
		    PricePerMilligram:request.query.PricePerMilligram
		
      
           };
	
          var myDrugConfigurationsControllerObject=new DrugConfigurationsController();
          myDrugConfigurationsControllerObject.individual_drug_configurations_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });








   router.get('/delete_individual_drug_configurations',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myDrugConfigurationsControllerObject=new DrugConfigurationsController();
    myDrugConfigurationsControllerObject.delete_drug_configurations_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;

