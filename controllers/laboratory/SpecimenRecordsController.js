/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_records's controller class.
It receives calls from the "SpecimenRecordsRoutes" class and
passes the calls down to the "SpecimenRecordsModel" class

*/



const SpecimenRecordsModel = require('../../models/laboratory/SpecimenRecordsModel.js');



module.exports = class SpecimenRecordsController{
    constructor(){

    }
	
	
	

	
	
   insert_specimen_records(jsonObject_,callback){
     const  mySpecimenRecordsObject=new SpecimenRecordsModel();
     mySpecimenRecordsObject.insert_specimen_records(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_specimen_records(callback){
        const  mySpecimenRecordsObject=new SpecimenRecordsModel();
        mySpecimenRecordsObject.get_all_specimen_records(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_specimen_records(ColumnName,value_,callback){
        const  mySpecimenRecordsObject=new SpecimenRecordsModel();
        mySpecimenRecordsObject.get_specific_specimen_records(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_specimen_records_update(jsonObject_,callback){
       const  mySpecimenRecordsObject=new SpecimenRecordsModel();
        
		mySpecimenRecordsObject.batch_specimen_records_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_specimen_records_update(ColumnName,value_,jsonObject_,callback){
        const  mySpecimenRecordsObject=new SpecimenRecordsModel();
        
		mySpecimenRecordsObject.individual_specimen_records_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_specimen_records_record(ColumnName,value_,callback){
       const  mySpecimenRecordsObject=new SpecimenRecordsModel();
        
		mySpecimenRecordsObject.delete_specimen_records_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}