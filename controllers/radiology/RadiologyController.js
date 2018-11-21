/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the radiology's controller class.
It receives calls from the "RadiologyRoutes" class and
passes the calls down to the "RadiologyModel" class

*/



const RadiologyModel = require('../../models/radiology/RadiologyModel.js');




module.exports = class RadiologyController{
    constructor(){

    }
	
	
	
   insert_radiology(jsonObject_,callback){
     const  myRadiologyObject=new RadiologyModel();
     myRadiologyObject.insert_radiology(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_radiology(callback){
        const  myRadiologyObject=new RadiologyModel();
        myRadiologyObject.get_all_radiology(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_radiology(ColumnName,value_,callback){
         const  myRadiologyObject=new RadiologyModel();
        myRadiologyObject.get_specific_radiology(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_radiology_update(jsonObject_,callback){
       const  myRadiologyObject=new RadiologyModel();
        
		myRadiologyObject.batch_radiology_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_radiology_update(ColumnName,value_,jsonObject_,callback){
        const  myRadiologyObject=new RadiologyModel();
        
		myRadiologyObject.individual_radiology_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_radiology_record(ColumnName,value_,callback){
        const  myRadiologyObject=new RadiologyModel();
        
		myRadiologyObject.delete_radiology_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}