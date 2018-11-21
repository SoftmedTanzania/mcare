/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the beds's controller class.
It receives calls from the "BedsRoutes" class and
passes the calls down to the "BedsModel" class

*/



const BedsModel = require('../../models/wards/BedsModel.js');



module.exports = class BedsController{
    constructor(){

    }
	
	
	

	
	
   insert_beds(jsonObject_,callback){
     const  myBedsObject=new BedsModel();
     myBedsObject.insert_beds(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_beds(callback){
         const  myBedsObject=new BedsModel();
        myBedsObject.get_all_beds(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_beds(ColumnName,value_,callback){
         const  myBedsObject=new BedsModel();
        myBedsObject.get_specific_beds(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_beds_update(jsonObject_,callback){
       const  myBedsObject=new BedsModel();
        
		myBedsObject.batch_beds_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_beds_update(ColumnName,value_,jsonObject_,callback){
        const  myBedsObject=new BedsModel();
        
		myBedsObject.individual_beds_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_beds_record(ColumnName,value_,callback){
         const  myBedsObject=new BedsModel();
        
		myBedsObject.delete_beds_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}