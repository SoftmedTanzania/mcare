/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_order_results's controller class.
It receives calls from the "RadiologyOrderResultsRoutes" class and
passes the calls down to the "RadiologyOrderResultsModel" class

*/



const RadiologyOrderResultsModel = require('../../models/radiology/RadiologyOrderResultsModel.js');




module.exports = class RadiologyOrderResultsController{
    constructor(){

    }
	
	
	
   insert_radiology_order_results(jsonObject_,callback){
     const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
     myRadiologyOrderResultsObject.insert_radiology_order_results(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_radiology_order_results(callback){
        const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
        myRadiologyOrderResultsObject.get_all_radiology_order_results(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_radiology_order_results(ColumnName,value_,callback){
         const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
        myRadiologyOrderResultsObject.get_specific_radiology_order_results(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_radiology_order_results_update(jsonObject_,callback){
       const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
        
		myRadiologyOrderResultsObject.batch_radiology_order_results_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_radiology_order_results_update(ColumnName,value_,jsonObject_,callback){
        const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
        
		myRadiologyOrderResultsObject.individual_radiology_order_results_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_radiology_order_results_record(ColumnName,value_,callback){
        const  myRadiologyOrderResultsObject=new RadiologyOrderResultsModel();
        
		myRadiologyOrderResultsObject.delete_radiology_order_results_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}