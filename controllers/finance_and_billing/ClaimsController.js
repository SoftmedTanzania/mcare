/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the claims's controller class.
It receives calls from the "ClaimsRoutes" class and
passes the calls down to the "ClaimsModel" class

*/



const ClaimsModel = require('../../models/finance_and_billing/ClaimsModel.js');




module.exports = class ClaimsController{
    constructor(){

    }
	
	
	
   insert_claims(jsonObject_,callback){
     const  myClaimsObject=new ClaimsModel();
     myClaimsObject.insert_claims(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_claims(callback){
        const  myClaimsObject=new ClaimsModel();
        myClaimsObject.get_all_claims(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_claims(ColumnName,value_,callback){
        const  myClaimsObject=new ClaimsModel();
        myClaimsObject.get_specific_claims(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_claims_update(jsonObject_,callback){
        const  myClaimsObject=new ClaimsModel();
        
		myClaimsObject.batch_claims_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_claims_update(ColumnName,value_,jsonObject_,callback){
        const  myClaimsObject=new ClaimsModel();
        
		myClaimsObject.individual_claims_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_claims_record(ColumnName,value_,callback){
        const  myClaimsObject=new ClaimsModel();
        
		myClaimsObject.delete_claims_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}