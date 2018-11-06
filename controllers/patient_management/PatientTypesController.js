/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_types's controller class.
It receives calls from the "PatientTypesRoutes" class and
passes the calls down to the "PatientTypesModel" class

*/




const PatientTypesModel = require('../../models/patient_management/PatientTypesModel.js');


module.exports = class PatientTypesController{
    constructor(){

    }
    
	
	insert_patient_types(jsonObject_,callback){
     const  myPatientTypesObject=new PatientTypesModel();
     myPatientTypesObject.insert_patient_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}
	
	
	get_all_patient_types(callback){
        const  myPatientTypesObject=new PatientTypesModel();
        myPatientTypesObject.get_all_patient_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }
	
	
	
	get_specific_patient_types(ColumnName,value_,callback){
        const  myPatientTypesObject=new PatientTypesModel();
        myPatientTypesObject.get_specific_patient_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	batch_patient_types_update(jsonObject_,callback){
        const  myPatientTypesObject=new PatientTypesModel();
        
		myPatientTypesObject.batch_patient_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	individual_patient_types_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientTypesObject=new PatientTypesModel();
        
		myPatientTypesObject.individual_patient_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	delete_patient_types_record(ColumnName,value_,callback){
        const  myPatientTypesObject=new PatientTypesModel();
        
		myPatientTypesObject.delete_patient_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	
	
	
	
	
	
	
}