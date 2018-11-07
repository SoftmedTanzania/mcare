/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_visits's controller class.
It receives calls from the "PatientVisitsRoutes" class and
passes the calls down to the "PatientVisitsModel" class

*/


const PatientVisitsModel = require('../../models/patient_management/PatientVisitsModel.js');


module.exports = class PatientVisitsController{
    constructor(){

    }
	
	
	
	
   insert_patient_visits(jsonObject_,callback){
     const  myPatientVisitsObject=new PatientVisitsModel();
     myPatientVisitsObject.insert_patient_visits(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
   get_all_patient_visits(callback){
         const  myPatientVisitsObject=new PatientVisitsModel();
        myPatientVisitsObject.get_all_patient_visits(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
   get_specific_patient_visits(ColumnName,value_,callback){
         const  myPatientVisitsObject=new PatientVisitsModel();
        myPatientVisitsObject.get_specific_patient_visits(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   batch_patient_visits_update(jsonObject_,callback){
        const  myPatientVisitsObject=new PatientVisitsModel();
        
		myPatientVisitsObject.batch_patient_visits_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
   individual_patient_visits_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientVisitsObject=new PatientVisitsModel();
        
		myPatientVisitsObject.individual_patient_visits_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	
	
	
delete_patient_visits_record(ColumnName,value_,callback){
        const  myPatientVisitsObject=new PatientVisitsModel();
        
		myPatientVisitsObject.delete_patient_visits_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
		
	
	
}