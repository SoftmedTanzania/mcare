/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the wards's controller class.
It receives calls from the "BedTypeRoutes" class and
passes the calls down to the "BedTypeModel" class

*/



const BedTypeModel = require('../../models/wards/BedTypeModel.js');



module.exports = class BedTypeController{
    constructor(){

    }
	
	
	

	
	
   insert_bed_type(jsonObject_,callback){
     const  myBedTypeObject=new BedTypeModel();
     myBedTypeObject.insert_bed_type(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_bed_type(callback){
         const  myBedTypeObject=new BedTypeModel();
        myBedTypeObject.get_all_bed_type(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_bed_type(ColumnName,value_,callback){
         const  myBedTypeObject=new BedTypeModel();
        myBedTypeObject.get_specific_bed_type(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_bed_type_update(jsonObject_,callback){
       const  myBedTypeObject=new BedTypeModel();
        
		myBedTypeObject.batch_bed_type_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_bed_type_update(ColumnName,value_,jsonObject_,callback){
        const  myBedTypeObject=new BedTypeModel();
        
		myBedTypeObject.individual_bed_type_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_bed_type_record(ColumnName,value_,callback){
         const  myBedTypeObject=new BedTypeModel();
        
		myBedTypeObject.delete_bed_type_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}