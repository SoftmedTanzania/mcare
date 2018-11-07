/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_checkups's controller class.
It receives calls from the "PatientCheckUpsRoutes" class and
passes the calls down to the "PatientCheckUpsModel" class

*/


const PatientCheckUpsModel = require('../../models/patient_management/PatientCheckUpsModel.js');


module.exports = class PatientCheckUpsController{
    constructor(){

    }
	
	
	
	
   insert_patient_checkups(jsonObject_,callback){
     const  myPatientCheckUpsObject=new PatientCheckUpsModel();
     myPatientCheckUpsObject.insert_patient_checkups(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
	
	
   get_all_patient_checkups(callback){
        const  myPatientCheckUpsObject=new PatientCheckUpsModel();
        myPatientCheckUpsObject.get_all_patient_checkups(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }	
	
	
	
	
	
   get_specific_patient_checkups(ColumnName,value_,callback){
         const  myPatientCheckUpsObject=new PatientCheckUpsModel();
        myPatientCheckUpsObject.get_specific_patient_checkups(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
   batch_patient_checkups_update(jsonObject_,callback){
        const  myPatientCheckUpsObject=new PatientCheckUpsModel();
        
		myPatientCheckUpsObject.batch_patient_checkups_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_patient_checkups_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientCheckUpsObject=new PatientCheckUpsModel();
        
		myPatientCheckUpsObject.individual_patient_checkups_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   delete_patient_checkups_record(ColumnName,value_,callback){
        const  myPatientCheckUpsObject=new PatientCheckUpsModel();
        
		myPatientCheckUpsObject.delete_patient_checkups_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
}
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
