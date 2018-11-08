/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the performed_procedures's controller class.
It receives calls from the "PerformedProceduresRoutes" class and
passes the calls down to the "PerformedProceduresModel" class

*/



const PerformedProceduresModel = require('../../models/procedures/PerformedProceduresModel.js');


module.exports = class PerformedProceduresController{
    constructor(){

    }
	
	

	
   insert_performed_procedures(jsonObject_,callback){
     const  myPerformedProceduresObject=new PerformedProceduresModel();
     myPerformedProceduresObject.insert_performed_procedures(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}			
	
	
	
	
	
   get_all_performed_procedures(callback){
       const  myPerformedProceduresObject=new PerformedProceduresModel();
        myPerformedProceduresObject.get_all_performed_procedures(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
   get_specific_performed_procedures(ColumnName,value_,callback){
          const  myPerformedProceduresObject=new PerformedProceduresModel();
        myPerformedProceduresObject.get_specific_performed_procedures(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
		
	
	
	
   batch_performed_procedures_update(jsonObject_,callback){
        const  myPerformedProceduresObject=new PerformedProceduresModel();
        
		myPerformedProceduresObject.batch_performed_procedures_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
   individual_performed_procedures_update(ColumnName,value_,jsonObject_,callback){
        const  myPerformedProceduresObject=new PerformedProceduresModel();
        
		myPerformedProceduresObject.individual_performed_procedures_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
	
	
	
   delete_performed_procedures_record(ColumnName,value_,callback){
        const  myPerformedProceduresObject=new PerformedProceduresModel();
        
		myPerformedProceduresObject.delete_performed_procedures_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
}