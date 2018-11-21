/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the appointment_types's controller class.
It receives calls from the "AppointmentTypesRoutes" class and
passes the calls down to the "AppointmentTypesModel" class

*/



const AppointmentTypesModel = require('../../models/appointments_and_scheduling/AppointmentTypesModel.js');



module.exports = class AppointmentTypesController{
    constructor(){

    }
	
	
	

	
	
   insert_appointment_types(jsonObject_,callback){
     const  myAppointmentTypesObject=new AppointmentTypesModel();
     myAppointmentTypesObject.insert_appointment_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_appointment_types(callback){
         const  myAppointmentTypesObject=new AppointmentTypesModel();
        myAppointmentTypesObject.get_all_appointment_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_appointment_types(ColumnName,value_,callback){
         const  myAppointmentTypesObject=new AppointmentTypesModel();
        myAppointmentTypesObject.get_specific_appointment_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_appointment_types_update(jsonObject_,callback){
       const  myAppointmentTypesObject=new AppointmentTypesModel();
        
		myAppointmentTypesObject.batch_appointment_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_appointment_types_update(ColumnName,value_,jsonObject_,callback){
        const  myAppointmentTypesObject=new AppointmentTypesModel();
        
		myAppointmentTypesObject.individual_appointment_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_appointment_types_record(ColumnName,value_,callback){
         const  myAppointmentTypesObject=new AppointmentTypesModel();
        
		myAppointmentTypesObject.delete_appointment_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}