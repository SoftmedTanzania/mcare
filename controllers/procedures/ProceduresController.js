/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the procedures's controller class.
It receives calls from the "ProceduresRoutes" class and
passes the calls down to the "ProceduresModel" class

*/



const ProceduresModel = require('../../models/procedures/ProceduresModel.js');


module.exports = class ProceduresController{
    constructor(){

    }
	
	
	
	

	
   insert_procedures(jsonObject_,callback){
     const  myProceduresObject=new ProceduresModel();
     myProceduresObject.insert_procedures(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
	
	
	
	
	
   get_all_procedures(callback){
        const  myProceduresObject=new ProceduresModel();
        myProceduresObject.get_all_procedures(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
   get_specific_procedures(ColumnName,value_,callback){
          const  myProceduresObject=new ProceduresModel();
        myProceduresObject.get_specific_procedures(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
   batch_procedures_update(jsonObject_,callback){
        const  myProceduresObject=new ProceduresModel();
        
		myProceduresObject.batch_procedures_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
	
	
	
	
   individual_procedures_update(ColumnName,value_,jsonObject_,callback){
        const  myProceduresObject=new ProceduresModel();
        
		myProceduresObject.individual_procedures_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
   delete_procedures_record(ColumnName,value_,callback){
        const  myProceduresObject=new ProceduresModel();
        
		myProceduresObject.delete_procedures_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }			
		
	
	
	
	
	
	
	
}
