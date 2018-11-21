/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the sponsor_types's controller class.
It receives calls from the "SponsorTypesRoutes" class and
passes the calls down to the "SponsorTypesModel" class

*/



const SponsorTypesModel = require('../../models/finance_and_billing/SponsorTypesModel.js');




module.exports = class SponsorTypesController{
    constructor(){

    }
	
	
	
   insert_sponsor_types(jsonObject_,callback){
     const  mySponsorTypesObject=new SponsorTypesModel();
     mySponsorTypesObject.insert_sponsor_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_sponsor_types(callback){
        const  mySponsorTypesObject=new SponsorTypesModel();
        mySponsorTypesObject.get_all_sponsor_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_sponsor_types(ColumnName,value_,callback){
        const  mySponsorTypesObject=new SponsorTypesModel();
        mySponsorTypesObject.get_specific_sponsor_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_sponsor_types_update(jsonObject_,callback){
       const  mySponsorTypesObject=new SponsorTypesModel();
        
		mySponsorTypesObject.batch_sponsor_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_sponsor_types_update(ColumnName,value_,jsonObject_,callback){
        const  mySponsorTypesObject=new SponsorTypesModel();
        
		mySponsorTypesObject.individual_sponsor_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_sponsor_types_record(ColumnName,value_,callback){
        const  mySponsorTypesObject=new SponsorTypesModel();
        
		mySponsorTypesObject.delete_sponsor_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}