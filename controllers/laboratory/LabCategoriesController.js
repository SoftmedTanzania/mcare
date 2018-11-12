/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the lab_categories's controller class.
It receives calls from the "LabCategoriesRoutes" class and
passes the calls down to the "LabCategoriesModel" class

*/




const LabCategoriesModel = require('../../models/laboratory/LabCategoriesModel.js');




module.exports = class LabCategoriesController{
    constructor(){

    }

	
	

	
   insert_lab_categories(jsonObject_,callback){
     const  myLabCategoriesObject=new LabCategoriesModel();
     myLabCategoriesObject.insert_lab_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
	
   get_all_lab_categories(callback){
        const  myLabCategoriesObject=new LabCategoriesModel();
        myLabCategoriesObject.get_all_lab_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
	
   get_specific_lab_categories(ColumnName,value_,callback){
        const  myLabCategoriesObject=new LabCategoriesModel();
        myLabCategoriesObject.get_specific_lab_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_lab_categories_update(jsonObject_,callback){
        const  myLabCategoriesObject=new LabCategoriesModel();
        
		myLabCategoriesObject.batch_lab_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
	
   individual_lab_categories_update(ColumnName,value_,jsonObject_,callback){
        const  myLabCategoriesObject=new LabCategoriesModel();
        
		myLabCategoriesObject.individual_lab_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
   delete_lab_categories_record(ColumnName,value_,callback){
        const  myLabCategoriesObject=new LabCategoriesModel();
        
		myLabCategoriesObject.delete_lab_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
}