/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the sponsors's controller class.
It receives calls from the "SponsorsRoutes" class and
passes the calls down to the "SponsorsModel" class

*/



const SponsorsModel = require('../../models/finance_and_billing/SponsorsModel.js');




module.exports = class SponsorsController{
    constructor(){

    }
	
	
	
   insert_sponsors(jsonObject_,callback){
     const  mySponsorsObject=new SponsorsModel();
     mySponsorsObject.insert_sponsors(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_sponsors(callback){
        const  mySponsorsObject=new SponsorsModel();
        mySponsorsObject.get_all_sponsors(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_sponsors(ColumnName,value_,callback){
        const  mySponsorsObject=new SponsorsModel();
        mySponsorsObject.get_specific_sponsors(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_sponsors_update(jsonObject_,callback){
        const  mySponsorsObject=new SponsorsModel();
        
		mySponsorsObject.batch_sponsors_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_sponsors_update(ColumnName,value_,jsonObject_,callback){
        const  mySponsorsObject=new SponsorsModel();
        
		mySponsorsObject.individual_sponsors_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_sponsors_record(ColumnName,value_,callback){
        const  mySponsorsObject=new SponsorsModel();
        
		mySponsorsObject.delete_sponsors_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}