/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the expected_appointment_activities's controller class.
It receives calls from the "ExpectedAppointmentActivitiesRoutes" class and
passes the calls down to the "ExpectedAppointmentActivitiesModel" class

*/



const ExpectedAppointmentActivitiesModel = require('../../models/appointments_and_scheduling/ExpectedAppointmentActivitiesModel.js');



module.exports = class ExpectedAppointmentActivitiesController{
    constructor(){

    }
	
	
	

	
	
   insert_expected_appointment_activities(jsonObject_,callback){
     const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
     myExpectedAppointmentActivitiesObject.insert_expected_appointment_activities(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_expected_appointment_activities(callback){
         const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
        myExpectedAppointmentActivitiesObject.get_all_expected_appointment_activities(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_expected_appointment_activities(ColumnName,value_,callback){
         const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
        myExpectedAppointmentActivitiesObject.get_specific_expected_appointment_activities(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_expected_appointment_activities_update(jsonObject_,callback){
      const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
        
		myExpectedAppointmentActivitiesObject.batch_expected_appointment_activities_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_expected_appointment_activities_update(ColumnName,value_,jsonObject_,callback){
         const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
        
		myExpectedAppointmentActivitiesObject.individual_expected_appointment_activities_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_expected_appointment_activities_record(ColumnName,value_,callback){
         const  myExpectedAppointmentActivitiesObject=new ExpectedAppointmentActivitiesModel();
        
		myExpectedAppointmentActivitiesObject.delete_expected_appointment_activities_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}