/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_record_categories's controller class.
It receives calls from the "SpecimenRecordCategoriesRoutes" class and
passes the calls down to the "SpecimenRecordCategoriesModel" class

*/



const SpecimenRecordCategoriesModel = require('../../models/laboratory/SpecimenRecordCategoriesModel.js');



module.exports = class SpecimenRecordCategoriesController{
    constructor(){

    }
	
	
	

	
	
   insert_specimen_record_categories(jsonObject_,callback){
     const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
     mySpecimenRecordCategoriesObject.insert_specimen_record_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_specimen_record_categories(callback){
        const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
        mySpecimenRecordCategoriesObject.get_all_specimen_record_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_specimen_record_categories(ColumnName,value_,callback){
        const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
        mySpecimenRecordCategoriesObject.get_specific_specimen_record_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_specimen_record_categories_update(jsonObject_,callback){
       const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
        
		mySpecimenRecordCategoriesObject.batch_specimen_record_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_specimen_record_categories_update(ColumnName,value_,jsonObject_,callback){
        const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
        
		mySpecimenRecordCategoriesObject.individual_specimen_record_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_specimen_record_categories_record(ColumnName,value_,callback){
        const  mySpecimenRecordCategoriesObject=new SpecimenRecordCategoriesModel();
        
		mySpecimenRecordCategoriesObject.delete_specimen_record_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}