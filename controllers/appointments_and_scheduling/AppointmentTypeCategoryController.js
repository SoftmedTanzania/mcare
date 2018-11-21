/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the appointment_type_category's controller class.
It receives calls from the "AppointmentTypeCategoryRoutes" class and
passes the calls down to the "AppointmentTypeCategoryModel" class

*/



const AppointmentTypeCategoryModel = require('../../models/appointments_and_scheduling/AppointmentTypeCategoryModel.js');



module.exports = class AppointmentTypeCategoryController{
    constructor(){

    }
	
	
	

	
	
   insert_appointment_type_category(jsonObject_,callback){
     const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
     myAppointmentTypeCategoryObject.insert_appointment_type_category(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_appointment_type_category(callback){
         const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
        myAppointmentTypeCategoryObject.get_all_appointment_type_category(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_appointment_type_category(ColumnName,value_,callback){
        const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
        myAppointmentTypeCategoryObject.get_specific_appointment_type_category(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_appointment_type_category_update(jsonObject_,callback){
       const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
        
		myAppointmentTypeCategoryObject.batch_appointment_type_category_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_appointment_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
        
		myAppointmentTypeCategoryObject.individual_appointment_type_category_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_appointment_type_category_record(ColumnName,value_,callback){
         const  myAppointmentTypeCategoryObject=new AppointmentTypeCategoryModel();
        
		myAppointmentTypeCategoryObject.delete_appointment_type_category_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}