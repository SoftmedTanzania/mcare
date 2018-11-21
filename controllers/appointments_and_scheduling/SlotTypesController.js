/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the slot_types's controller class.
It receives calls from the "SlotTypesRoutes" class and
passes the calls down to the "SlotTypesModel" class

*/



const SlotTypesModel = require('../../models/appointments_and_scheduling/SlotTypesModel.js');



module.exports = class SlotTypesController{
    constructor(){

    }
	
	
	

	
	
   insert_slot_types(jsonObject_,callback){
     const  mySlotTypesObject=new SlotTypesModel();
     mySlotTypesObject.insert_slot_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_slot_types(callback){
         const  mySlotTypesObject=new SlotTypesModel();
        mySlotTypesObject.get_all_slot_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_slot_types(ColumnName,value_,callback){
         const  mySlotTypesObject=new SlotTypesModel();
        mySlotTypesObject.get_specific_slot_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_slot_types_update(jsonObject_,callback){
       const  mySlotTypesObject=new SlotTypesModel();
        
		mySlotTypesObject.batch_slot_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_slot_types_update(ColumnName,value_,jsonObject_,callback){
        const  mySlotTypesObject=new SlotTypesModel();
        
		mySlotTypesObject.individual_slot_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_slot_types_record(ColumnName,value_,callback){
         const  mySlotTypesObject=new SlotTypesModel();
        
		mySlotTypesObject.delete_slot_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}