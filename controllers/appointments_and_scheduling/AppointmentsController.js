/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the appointments's controller class.
It receives calls from the "AppointmentsRoutes" class and
passes the calls down to the "AppointmentsModel" class

*/



const AppointmentsModel = require('../../models/appointments_and_scheduling/AppointmentsModel.js');



module.exports = class AppointmentsController{
    constructor(){

    }
	
	
	

	
	
   insert_appointments(jsonObject_,callback){
     const  myAppointmentsObject=new AppointmentsModel();
     myAppointmentsObject.insert_appointments(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_appointments(callback){
         const  myAppointmentsObject=new AppointmentsModel();
        myAppointmentsObject.get_all_appointments(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_appointments(ColumnName,value_,callback){
         const  myAppointmentsObject=new AppointmentsModel();
        myAppointmentsObject.get_specific_appointments(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_appointments_update(jsonObject_,callback){
       const  myAppointmentsObject=new AppointmentsModel();
        
		myAppointmentsObject.batch_appointments_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_appointments_update(ColumnName,value_,jsonObject_,callback){
        const  myAppointmentsObject=new AppointmentsModel();
        
		myAppointmentsObject.individual_appointments_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_appointments_record(ColumnName,value_,callback){
         const  myAppointmentsObject=new AppointmentsModel();
        
		myAppointmentsObject.delete_appointments_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}