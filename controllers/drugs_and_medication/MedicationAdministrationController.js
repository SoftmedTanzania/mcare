/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_administration's controller class.
It receives calls from the "MedicationAdministrationRoutes" class and
passes the calls down to the "MedicationAdministrationModel" class

*/





const MedicationAdministrationModel = require('../../models/drugs_and_medication/MedicationAdministrationModel.js');



module.exports = class MedicationAdministrationController{
    constructor(){

    }
	
	
	
	
	
   insert_medication_administration(jsonObject_,callback){
     const  myMedicationAdministrationObject=new MedicationAdministrationModel();
     myMedicationAdministrationObject.insert_medication_administration(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}	
	
	
	
	
	
	
	
	
   get_all_medication_administration(callback){
        const  myMedicationAdministrationObject=new MedicationAdministrationModel();
        myMedicationAdministrationObject.get_all_medication_administration(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   get_specific_medication_administration(ColumnName,value_,callback){
        const  myMedicationAdministrationObject=new MedicationAdministrationModel();
        myMedicationAdministrationObject.get_specific_medication_administration(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_medication_administration_update(jsonObject_,callback){
        const  myMedicationAdministrationObject=new MedicationAdministrationModel();
        
		myMedicationAdministrationObject.batch_medication_administration_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   individual_medication_administration_update(ColumnName,value_,jsonObject_,callback){
         const  myMedicationAdministrationObject=new MedicationAdministrationModel();
        
		myMedicationAdministrationObject.individual_medication_administration_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   delete_medication_administration_record(ColumnName,value_,callback){
        const  myMedicationAdministrationObject=new MedicationAdministrationModel();
        
		myMedicationAdministrationObject.delete_medication_administration_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	

	
	
}