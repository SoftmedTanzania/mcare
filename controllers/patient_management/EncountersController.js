/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the encounters's controller class.
It receives calls from the "EncountersRoutes" class and
passes the calls down to the "EncountersModel" class

*/



const EncountersModel = require('../../models/patient_management/EncountersModel.js');


module.exports = class EncountersController{
    constructor(){

    }
	
	

   insert_encounters(jsonObject_,callback){
     const  myEncountersObject=new EncountersModel();
     myEncountersObject.insert_encounters(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
   get_all_encounters(callback){
        const  myEncountersObject=new EncountersModel();
        myEncountersObject.get_all_encounters(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_encounters(ColumnName,value_,callback){
         const  myEncountersObject=new EncountersModel();
        myEncountersObject.get_specific_encounters(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
		
	
	
   batch_encounters_update(jsonObject_,callback){
        const  myEncountersObject=new EncountersModel();
        
		myEncountersObject.batch_encounters_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
   individual_encounters_update(ColumnName,value_,jsonObject_,callback){
        const  myEncountersObject=new EncountersModel();
        
		myEncountersObject.individual_encounters_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_encounters_record(ColumnName,value_,callback){
        const  myEncountersObject=new EncountersModel();
        
		myEncountersObject.delete_encounters_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
}