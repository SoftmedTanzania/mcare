/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the slots's controller class.
It receives calls from the "SlotsRoutes" class and
passes the calls down to the "SlotsModel" class

*/



const SlotsModel = require('../../models/appointments_and_scheduling/SlotsModel.js');



module.exports = class SlotsController{
    constructor(){

    }
	
	
	

	
	
   insert_slots(jsonObject_,callback){
     const  mySlotsObject=new SlotsModel();
     mySlotsObject.insert_slots(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_slots(callback){
         const  mySlotsObject=new SlotsModel();
        mySlotsObject.get_all_slots(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_slots(ColumnName,value_,callback){
         const  mySlotsObject=new SlotsModel();
        mySlotsObject.get_specific_slots(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_slots_update(jsonObject_,callback){
       const  mySlotsObject=new SlotsModel();
        
		mySlotsObject.batch_slots_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_slots_update(ColumnName,value_,jsonObject_,callback){
        const  mySlotsObject=new SlotsModel();
        
		mySlotsObject.individual_slots_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_slots_record(ColumnName,value_,callback){
         const  mySlotsObject=new SlotsModel();
        
		mySlotsObject.delete_slots_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}