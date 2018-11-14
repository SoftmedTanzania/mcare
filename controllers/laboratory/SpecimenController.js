/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen's controller class.
It receives calls from the "SpecimenRoutes" class and
passes the calls down to the "SpecimenModel" class

*/




const SpecimenModel = require('../../models/laboratory/SpecimenModel.js');



module.exports = class SpecimenController{
    constructor(){

    }
	
	
	
	
	
   insert_specimen(jsonObject_,callback){
     const  mySpecimenObject=new SpecimenModel();
     mySpecimenObject.insert_specimen(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
		

	
	
	
	
   get_all_specimen(callback){
        const  mySpecimenObject=new SpecimenModel();
        mySpecimenObject.get_all_specimen(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
		
	
	
	
	
   get_specific_specimen(ColumnName,value_,callback){
        const  mySpecimenObject=new SpecimenModel();
        mySpecimenObject.get_specific_specimen(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
	
   batch_specimen_update(jsonObject_,callback){
       const  mySpecimenObject=new SpecimenModel();
        
		mySpecimenObject.batch_specimen_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
			
	
	
	
	
	
	
	
   individual_specimen_update(ColumnName,value_,jsonObject_,callback){
       const  mySpecimenObject=new SpecimenModel();
        
		mySpecimenObject.individual_specimen_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
				
	
	
	
	
	
	
	
	
   delete_specimen_record(ColumnName,value_,callback){
        const  mySpecimenObject=new SpecimenModel();
        
		mySpecimenObject.delete_specimen_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	

	
	
}
	