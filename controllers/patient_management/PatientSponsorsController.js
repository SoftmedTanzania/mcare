/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_sponsors's controller class.
It receives calls from the "PatientSponsorsRoutes" class and
passes the calls down to the "PatientSponsorsModel" class

*/




const PatientSponsorsModel = require('../../models/patient_management/PatientSponsorsModel.js');


module.exports = class PatientSponsorsController{
    constructor(){

    }
	
	
	

	
	
   insert_patient_sponsors(jsonObject_,callback){
     const  myPatientSponsorsObject=new PatientSponsorsModel();
     myPatientSponsorsObject.insert_patient_sponsors(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
   get_all_patient_sponsors(callback){
        const  myPatientSponsorsObject=new PatientSponsorsModel();
        myPatientSponsorsObject.get_all_patient_sponsors(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
   get_specific_patient_sponsors(ColumnName,value_,callback){
         const  myPatientSponsorsObject=new PatientSponsorsModel();
        myPatientSponsorsObject.get_specific_patient_sponsors(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
   batch_patient_sponsors_update(jsonObject_,callback){
        const  myPatientSponsorsObject=new PatientSponsorsModel();
        
		myPatientSponsorsObject.batch_patient_sponsors_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
	
	
   individual_patient_sponsors_update(ColumnName,value_,jsonObject_,callback){
        const  myPatientSponsorsObject=new PatientSponsorsModel();
        
		myPatientSponsorsObject.individual_patient_sponsors_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
   delete_patient_sponsors_record(ColumnName,value_,callback){
        const  myPatientSponsorsObject=new PatientSponsorsModel();
        
		myPatientSponsorsObject.delete_patient_sponsors_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
	
	
}