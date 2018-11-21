/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards's controller class.
It receives calls from the "WardsRoutes" class and
passes the calls down to the "WardsModel" class

*/



const WardsModel = require('../../models/wards/WardsModel.js');



module.exports = class WardsController{
    constructor(){

    }
	
	
	

	
	
   insert_wards(jsonObject_,callback){
     const  myWardsObject=new WardsModel();
     myWardsObject.insert_wards(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_wards(callback){
         const  myWardsObject=new WardsModel();
        myWardsObject.get_all_wards(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_wards(ColumnName,value_,callback){
         const  myWardsObject=new WardsModel();
        myWardsObject.get_specific_wards(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_wards_update(jsonObject_,callback){
       const  myWardsObject=new WardsModel();
        
		myWardsObject.batch_wards_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_wards_update(ColumnName,value_,jsonObject_,callback){
        const  myWardsObject=new WardsModel();
        
		myWardsObject.individual_wards_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_wards_record(ColumnName,value_,callback){
         const  myWardsObject=new WardsModel();
        
		myWardsObject.delete_wards_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}