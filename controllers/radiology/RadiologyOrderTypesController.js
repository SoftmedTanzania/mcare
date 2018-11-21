/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology_order_types's controller class.
It receives calls from the "RadiologyOrderTypesRoutes" class and
passes the calls down to the "RadiologyOrderTypesModel" class

*/



const RadiologyOrderTypesModel = require('../../models/radiology/RadiologyOrderTypesModel.js');




module.exports = class RadiologyOrderTypesController{
    constructor(){

    }
	
	
	
   insert_radiology_order_types(jsonObject_,callback){
     const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
     myRadiologyOrderTypesObject.insert_radiology_order_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_radiology_order_types(callback){
       const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
        myRadiologyOrderTypesObject.get_all_radiology_order_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_radiology_order_types(ColumnName,value_,callback){
         const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
        myRadiologyOrderTypesObject.get_specific_radiology_order_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_radiology_order_types_update(jsonObject_,callback){
       const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
        
		myRadiologyOrderTypesObject.batch_radiology_order_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_radiology_order_types_update(ColumnName,value_,jsonObject_,callback){
       const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
        
		myRadiologyOrderTypesObject.individual_radiology_order_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_radiology_order_types_record(ColumnName,value_,callback){
        const  myRadiologyOrderTypesObject=new RadiologyOrderTypesModel();
        
		myRadiologyOrderTypesObject.delete_radiology_order_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}