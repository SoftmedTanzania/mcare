/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the slot_type_category's controller class.
It receives calls from the "SlotTypeCategoryRoutes" class and
passes the calls down to the "SlotTypeCategoryModel" class

*/



const SlotTypeCategoryModel = require('../../models/appointments_and_scheduling/SlotTypeCategoryModel.js');



module.exports = class SlotTypeCategoryController{
    constructor(){

    }
	
	
	

	
	
   insert_slot_type_category(jsonObject_,callback){
     const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
     mySlotTypeCategoryObject.insert_slot_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_slot_type_category(callback){
         const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
        mySlotTypeCategoryObject.get_all_slot_type_category(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_slot_type_category(ColumnName,value_,callback){
         const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
        mySlotTypeCategoryObject.get_specific_slot_type_category(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_slot_type_category_update(jsonObject_,callback){
       const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
        
		mySlotTypeCategoryObject.batch_slot_type_category_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_slot_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
        
		mySlotTypeCategoryObject.individual_slot_type_category_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_slot_type_category_record(ColumnName,value_,callback){
         const  mySlotTypeCategoryObject=new SlotTypeCategoryModel();
        
		mySlotTypeCategoryObject.delete_slot_type_category_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}