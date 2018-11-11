/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the medication_request's controller class.
It receives calls from the "MedicationRequestRoutes" class and
passes the calls down to the "MedicationRequestModel" class

*/




const MedicationRequestModel = require('../../models/drugs_and_medication/MedicationRequestModel.js');



module.exports = class MedicationRequestController{
    constructor(){

    }
	
	
	
	
	
	

   insert_medication_request(jsonObject_,callback){
     const  myMedicationRequestObject=new MedicationRequestModel();
     myMedicationRequestObject.insert_medication_request(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
   get_all_medication_request(callback){
        const  myMedicationRequestObject=new MedicationRequestModel();
        myMedicationRequestObject.get_all_medication_request(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
	
   get_specific_medication_request(ColumnName,value_,callback){
        const  myMedicationRequestObject=new MedicationRequestModel();
        myMedicationRequestObject.get_specific_medication_request(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_medication_request_update(jsonObject_,callback){
         const  myMedicationRequestObject=new MedicationRequestModel();
        
		myMedicationRequestObject.batch_medication_request_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   individual_medication_request_update(ColumnName,value_,jsonObject_,callback){
        const  myMedicationRequestObject=new MedicationRequestModel();
        
		myMedicationRequestObject.individual_medication_request_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   delete_medication_request_record(ColumnName,value_,callback){
        const  myMedicationRequestObject=new MedicationRequestModel();
        
		myMedicationRequestObject.delete_medication_request_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
		
	
	
}