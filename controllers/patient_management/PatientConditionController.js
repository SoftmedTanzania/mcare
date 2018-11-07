/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_condition's controller class.
It receives calls from the "PatientVisitsRoutes" class and
passes the calls down to the "PatientConditionModel" class

*/



const PatientConditionModel = require('../../models/patient_management/PatientConditionModel.js');


module.exports = class PatientConditionController{
    constructor(){

    }
	
	

   insert_patient_condition(jsonObject_,callback){
     const  myPatientConditionObject=new PatientConditionModel();
     myPatientConditionObject.insert_patient_condition(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
   get_all_patient_condition(callback){
        const  myPatientConditionObject=new PatientConditionModel();
        myPatientConditionObject.get_all_patient_condition(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_patient_condition(ColumnName,value_,callback){
         const  myPatientConditionObject=new PatientConditionModel();
        myPatientConditionObject.get_specific_patient_condition(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
   batch_patient_condition_update(jsonObject_,callback){
        const  myPatientConditionObject=new PatientConditionModel();
        
		myPatientConditionObject.batch_patient_condition_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_patient_condition_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientConditionObject=new PatientConditionModel();
        
		myPatientConditionObject.individual_patient_condition_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
   delete_patient_condition_record(ColumnName,value_,callback){
        const  myPatientConditionObject=new PatientConditionModel();
        
		myPatientConditionObject.delete_patient_condition_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
}