/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_group's controller class.
It receives calls from the "BedGroupRoutes" class and
passes the calls down to the "BedGroupModel" class

*/



const BedGroupModel = require('../../models/wards/BedGroupModel.js');



module.exports = class BedGroupController{
    constructor(){

    }
	
	
	

	
	
   insert_bed_group(jsonObject_,callback){
     const  myBedGroupObject=new BedGroupModel();
     myBedGroupObject.insert_bed_group(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_bed_group(callback){
        const  myBedGroupObject=new BedGroupModel();
        myBedGroupObject.get_all_bed_group(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_bed_group(ColumnName,value_,callback){
         const  myBedGroupObject=new BedGroupModel();
        myBedGroupObject.get_specific_bed_group(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_bed_group_update(jsonObject_,callback){
       const  myBedGroupObject=new BedGroupModel();
        
		myBedGroupObject.batch_bed_group_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_bed_group_update(ColumnName,value_,jsonObject_,callback){
        const  myBedGroupObject=new BedGroupModel();
        
		myBedGroupObject.individual_bed_group_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_bed_group_record(ColumnName,value_,callback){
         const  myBedGroupObject=new BedGroupModel();
        
		myBedGroupObject.delete_bed_group_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}