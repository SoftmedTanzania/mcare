/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the ward_types's controller class.
It receives calls from the "WardTypesRoutes" class and
passes the calls down to the "WardTypesModel" class

*/



const WardTypesModel = require('../../models/wards/WardTypesModel.js');



module.exports = class WardTypesController{
    constructor(){

    }
	
	
	

	
	
   insert_ward_types(jsonObject_,callback){
     const  myWardTypesObject=new WardTypesModel();
     myWardTypesObject.insert_ward_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_ward_types(callback){
        const  myWardTypesObject=new WardTypesModel();
        myWardTypesObject.get_all_ward_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_ward_types(ColumnName,value_,callback){
        const  myWardTypesObject=new WardTypesModel();
        myWardTypesObject.get_specific_ward_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_ward_types_update(jsonObject_,callback){
       const  myWardTypesObject=new WardTypesModel();
        
		myWardTypesObject.batch_ward_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_ward_types_update(ColumnName,value_,jsonObject_,callback){
        const  myWardTypesObject=new WardTypesModel();
        
		myWardTypesObject.individual_ward_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_ward_types_record(ColumnName,value_,callback){
        const  myWardTypesObject=new WardTypesModel();
        
		myWardTypesObject.delete_ward_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}