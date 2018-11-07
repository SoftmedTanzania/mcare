/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient_individual_qualities's controller class.
It receives calls from the "PatientIndividualQualitiesRoutes" class and
passes the calls down to the "PatientIndividualQualitiesModel" class

*/



const PatientIndividualQualitiesModel = require('../../models/patient_management/PatientIndividualQualitiesModel.js');


module.exports = class PatientIndividualQualitiesController{
    constructor(){

    }
	
	
	
	
	
   insert_patient_individual_qualities(jsonObject_,callback){
     const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
     myIndividualQualitiesObject.insert_patient_individual_qualities(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	

	
	
	
	
   get_all_patient_individual_qualities(callback){
        const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
        myIndividualQualitiesObject.get_all_patient_individual_qualities(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }	
	
	
	
	
	
   get_specific_patient_individual_qualities(ColumnName,value_,callback){
        const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
        myIndividualQualitiesObject.get_specific_patient_individual_qualities(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
   batch_patient_individual_qualities_update(jsonObject_,callback){
        const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
        
		myIndividualQualitiesObject.batch_patient_individual_qualities_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
   individual_patient_individual_qualities_update(ColumnName,value_,jsonObject_,callback){
        const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
        
		myIndividualQualitiesObject.individual_patient_individual_qualities_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
   delete_patient_individual_qualities_record(ColumnName,value_,callback){
        const  myIndividualQualitiesObject=new PatientIndividualQualitiesModel();
        
		myIndividualQualitiesObject.delete_patient_individual_qualities_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
	
	
	
	
	
	
}