/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_revisits's controller class.
It receives calls from the "PatientReVisitsRoutes" class and
passes the calls down to the "PatientRevisitsModel" class

*/


const PatientRevisitsModel = require('../../models/patient_management/PatientRevisitsModel.js');


module.exports = class PatientRevisitsController{
    constructor(){

    }
	
	
	

   insert_patient_revisits(jsonObject_,callback){
     const  myPatientRevisitsObject=new PatientRevisitsModel();
     myPatientRevisitsObject.insert_patient_revisits(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
   get_all_patient_revisits(callback){
        const  myPatientRevisitsObject=new PatientRevisitsModel();
        myPatientRevisitsObject.get_all_patient_revisits(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }			
	
	
	
	
	
   get_specific_patient_revisits(ColumnName,value_,callback){
         const  myPatientRevisitsObject=new PatientRevisitsModel();
        myPatientRevisitsObject.get_specific_patient_revisits(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_patient_revisits_update(jsonObject_,callback){
        const  myPatientRevisitsObject=new PatientRevisitsModel();
        
		myPatientRevisitsObject.batch_patient_revisits_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_patient_revisits_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientRevisitsObject=new PatientRevisitsModel();
        
		myPatientRevisitsObject.individual_patient_revisits_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
	
	
	
   delete_patient_revisits_record(ColumnName,value_,callback){
       const  myPatientRevisitsObject=new PatientRevisitsModel();
        
		myPatientRevisitsObject.delete_patient_revisits_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
}