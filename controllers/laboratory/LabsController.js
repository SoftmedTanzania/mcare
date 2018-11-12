/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the labs's controller class.
It receives calls from the "LabsRoutes" class and
passes the calls down to the "LabsModel" class

*/



const LabsModel = require('../../models/laboratory/LabsModel.js');



module.exports = class LabsController{
    constructor(){

    }
	
	
	

	
	
   insert_labs(jsonObject_,callback){
     const  myLabsObject=new LabsModel();
     myLabsObject.insert_labs(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_labs(callback){
        const  myLabsObject=new LabsModel();
        myLabsObject.get_all_labs(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_labs(ColumnName,value_,callback){
        const  myLabsObject=new LabsModel();
        myLabsObject.get_specific_labs(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_labs_update(jsonObject_,callback){
       const  myLabsObject=new LabsModel();
        
		myLabsObject.batch_labs_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_labs_update(ColumnName,value_,jsonObject_,callback){
        const  myLabsObject=new LabsModel();
        
		myLabsObject.individual_labs_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_labs_record(ColumnName,value_,callback){
        const  myLabsObject=new LabsModel();
        
		myLabsObject.delete_labs_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}