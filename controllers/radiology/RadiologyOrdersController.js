/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_orders's controller class.
It receives calls from the "RadiologyOrdersRoutes" class and
passes the calls down to the "RadiologyOrdersModel" class

*/



const RadiologyOrdersModel = require('../../models/radiology/RadiologyOrdersModel.js');




module.exports = class RadiologyOrdersController{
    constructor(){

    }
	
	
	
   insert_radiology_orders(jsonObject_,callback){
     const  myRadiologyOrdersObject=new RadiologyOrdersModel();
     myRadiologyOrdersObject.insert_radiology_orders(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_radiology_orders(callback){
        const  myRadiologyOrdersObject=new RadiologyOrdersModel();
        myRadiologyOrdersObject.get_all_radiology_orders(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_radiology_orders(ColumnName,value_,callback){
         const  myRadiologyOrdersObject=new RadiologyOrdersModel();
        myRadiologyOrdersObject.get_specific_radiology_orders(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_radiology_orders_update(jsonObject_,callback){
       const  myRadiologyOrdersObject=new RadiologyOrdersModel();
        
		myRadiologyOrdersObject.batch_radiology_orders_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_radiology_orders_update(ColumnName,value_,jsonObject_,callback){
        const  myRadiologyOrdersObject=new RadiologyOrdersModel();
        
		myRadiologyOrdersObject.individual_radiology_orders_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_radiology_orders_record(ColumnName,value_,callback){
        const  myRadiologyOrdersObject=new RadiologyOrdersModel();
        
		myRadiologyOrdersObject.delete_radiology_orders_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}