/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_custodian's controller class.
It receives calls from the "PatientCustodianRoutes" class and
passes the calls down to the "PatientCustodianModel" class

*/



const PatientCustodianModel = require('../../models/patient_management/PatientCustodianModel.js');


module.exports = class PatientCustodianController{
    constructor(){

    }
	
	
	

	
   insert_patient_custodian(jsonObject_,callback){
     const  myPatientCustodianObject=new PatientCustodianModel();
     myPatientCustodianObject.insert_patient_custodian(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
   get_all_patient_custodian(callback){
        const  myPatientCustodianObject=new PatientCustodianModel();
        myPatientCustodianObject.get_all_patient_custodian(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_patient_custodian(ColumnName,value_,callback){
          const  myPatientCustodianObject=new PatientCustodianModel();
        myPatientCustodianObject.get_specific_patient_custodian(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_patient_custodian_update(jsonObject_,callback){
        const  myPatientCustodianObject=new PatientCustodianModel();
        
		myPatientCustodianObject.batch_patient_custodian_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
   individual_patient_custodian_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientCustodianObject=new PatientCustodianModel();
        
		myPatientCustodianObject.individual_patient_custodian_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   delete_patient_custodian_record(ColumnName,value_,callback){
        const  myPatientCustodianObject=new PatientCustodianModel();
        
		myPatientCustodianObject.delete_patient_custodian_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
}