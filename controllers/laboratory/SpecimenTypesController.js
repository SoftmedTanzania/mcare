/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the specimen_types's controller class.
It receives calls from the "SpecimenTypesRoutes" class and
passes the calls down to the "SpecimenTypesModel" class

*/





const SpecimenTypesModel = require('../../models/laboratory/SpecimenTypesModel.js');



module.exports = class SpecimenTypesController{
    constructor(){

    }
	
	
	
	

	
   insert_specimen_types(jsonObject_,callback){
     const  mySpecimenTypesObject=new SpecimenTypesModel();
     mySpecimenTypesObject.insert_specimen_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
			
	
	
	
	
	
	
   get_all_specimen_types(callback){
        const  mySpecimenTypesObject=new SpecimenTypesModel();
        mySpecimenTypesObject.get_all_specimen_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
		
	
	
	
	
	
	
   get_specific_specimen_types(ColumnName,value_,callback){
        const  mySpecimenTypesObject=new SpecimenTypesModel();
        mySpecimenTypesObject.get_specific_specimen_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
	
   batch_specimen_types_update(jsonObject_,callback){
      const  mySpecimenTypesObject=new SpecimenTypesModel();
        
		mySpecimenTypesObject.batch_specimen_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
			
	
	
	
	
	
   individual_specimen_types_update(ColumnName,value_,jsonObject_,callback){
        const  mySpecimenTypesObject=new SpecimenTypesModel();
        
		mySpecimenTypesObject.individual_specimen_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
				
	
	
	
	
	
	
	
	
	
   delete_specimen_types_record(ColumnName,value_,callback){
        const  mySpecimenTypesObject=new SpecimenTypesModel();
        
		mySpecimenTypesObject.delete_specimen_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
	
	
	
}