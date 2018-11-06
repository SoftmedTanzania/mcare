/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient management"s controller class.
It receives calls from the "PatientRoutes" class and
passes the calls down to the "PatientModel" class

*/



const PatientModel = require('../../models/patient_management/PatientModel.js');


module.exports = class PatientController{
	constructor(){
    
 }
	
	
   insertPatients(jsonObject_,callback){
     const  myPatientObject=new PatientModel();
     myPatientObject.insertPatients(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}

    
	
	getAllPatients(callback){
        const  myPatientObject=new PatientModel();
        myPatientObject.getAllPatients(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }

    getSpecificPatients(ColumnName,value_,callback){
        const  myPatientObject=new PatientModel();
        myPatientObject.getSpecificPatients(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	batch_patients_update(jsonObject_,callback){
        const  myPatientObject=new PatientModel();
        
		myPatientObject.batch_patients_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	individual_patients_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientObject=new PatientModel();
        
		myPatientObject.individual_patients_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	delete_patients_record(ColumnName,value_,callback){
        const  myPatientObject=new PatientModel();
        
		myPatientObject.delete_patients_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }


}