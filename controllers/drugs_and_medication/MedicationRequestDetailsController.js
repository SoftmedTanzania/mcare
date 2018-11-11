/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_request_details's controller class.
It receives calls from the "MedicationRequestDetailsRoutes" class and
passes the calls down to the "MedicationRequestDetailsModel" class

*/



const MedicationRequestDetailsModel = require('../../models/drugs_and_medication/MedicationRequestDetailsModel.js');



module.exports = class MedicationRequestDetailsController{
    constructor(){

    }
	
	
	
	
	
   insert_medication_request_details(jsonObject_,callback){
     const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
     myMedicationRequestDetailsObject.insert_medication_request_details(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
	
	
	
   get_all_medication_request_details(callback){
        const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
        myMedicationRequestDetailsObject.get_all_medication_request_details(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
	
   get_specific_medication_request_details(ColumnName,value_,callback){
        const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
        myMedicationRequestDetailsObject.get_specific_medication_request_details(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   batch_medication_request_details_update(jsonObject_,callback){
        const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
        
		myMedicationRequestDetailsObject.batch_medication_request_details_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
	
   individual_medication_request_details_update(ColumnName,value_,jsonObject_,callback){
        const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
        
		myMedicationRequestDetailsObject.individual_medication_request_details_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
   delete_medication_request_details_record(ColumnName,value_,callback){
        const  myMedicationRequestDetailsObject=new MedicationRequestDetailsModel();
        
		myMedicationRequestDetailsObject.delete_medication_request_details_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
}
