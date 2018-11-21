/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the schedules's controller class.
It receives calls from the "SchedulesRoutes" class and
passes the calls down to the "SchedulesModel" class

*/



const SchedulesModel = require('../../models/appointments_and_scheduling/SchedulesModel.js');



module.exports = class SchedulesController{
    constructor(){

    }
	
	
	

	
	
   insert_schedules(jsonObject_,callback){
     const  mySchedulesObject=new SchedulesModel();
     mySchedulesObject.insert_schedules(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_schedules(callback){
         const  mySchedulesObject=new SchedulesModel();
        mySchedulesObject.get_all_schedules(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_schedules(ColumnName,value_,callback){
         const  mySchedulesObject=new SchedulesModel();
        mySchedulesObject.get_specific_schedules(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_schedules_update(jsonObject_,callback){
      const  mySchedulesObject=new SchedulesModel();
        
		mySchedulesObject.batch_schedules_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_schedules_update(ColumnName,value_,jsonObject_,callback){
        const  mySchedulesObject=new SchedulesModel();
        
		mySchedulesObject.individual_schedules_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_schedules_record(ColumnName,value_,callback){
         const  mySchedulesObject=new SchedulesModel();
        
		mySchedulesObject.delete_schedules_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}