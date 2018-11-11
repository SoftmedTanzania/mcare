/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the drug_configurations's controller class.
It receives calls from the "DrugConfigurationsRoutes" class and
passes the calls down to the "DrugConfigurationsModel" class

*/





const DrugConfigurationsModel = require('../../models/drugs_and_medication/DrugConfigurationsModel.js');



module.exports = class DrugConfigurationsController{
    constructor(){

    }
	
	
	
	

	
   insert_drug_configurations(jsonObject_,callback){
     const  myDrugConfigurationsObject=new DrugConfigurationsModel();
     myDrugConfigurationsObject.insert_drug_configurations(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
	
	
   get_all_drug_configurations(callback){
        const  myDrugConfigurationsObject=new DrugConfigurationsModel();
        myDrugConfigurationsObject.get_all_drug_configurations(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_drug_configurations(ColumnName,value_,callback){
        const  myDrugConfigurationsObject=new DrugConfigurationsModel();
        myDrugConfigurationsObject.get_specific_drug_configurations(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_drug_configurations_update(jsonObject_,callback){
        const  myDrugConfigurationsObject=new DrugConfigurationsModel();
        
		myDrugConfigurationsObject.batch_drug_configurations_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
   individual_drug_configurations_update(ColumnName,value_,jsonObject_,callback){
        const  myDrugConfigurationsObject=new DrugConfigurationsModel();
        
		myDrugConfigurationsObject.individual_drug_configurations_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
   delete_drug_configurations_record(ColumnName,value_,callback){
        const  myDrugConfigurationsObject=new DrugConfigurationsModel();
        
		myDrugConfigurationsObject.delete_drug_configurations_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
}