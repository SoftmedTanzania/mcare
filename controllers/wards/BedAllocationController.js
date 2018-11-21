/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_allocation's controller class.
It receives calls from the "BedAllocationRoutes" class and
passes the calls down to the "BedAllocationModel" class

*/



const BedAllocationModel = require('../../models/wards/BedAllocationModel.js');



module.exports = class BedAllocationController{
    constructor(){

    }
	
	
	

	
	
   insert_bed_allocation(jsonObject_,callback){
     const  myBedAllocationObject=new BedAllocationModel();
     myBedAllocationObject.insert_bed_allocation(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_bed_allocation(callback){
         const  myBedAllocationObject=new BedAllocationModel();
        myBedAllocationObject.get_all_bed_allocation(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_bed_allocation(ColumnName,value_,callback){
         const  myBedAllocationObject=new BedAllocationModel();
        myBedAllocationObject.get_specific_bed_allocation(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_bed_allocation_update(jsonObject_,callback){
      const  myBedAllocationObject=new BedAllocationModel();
        
		myBedAllocationObject.batch_bed_allocation_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_bed_allocation_update(ColumnName,value_,jsonObject_,callback){
        const  myBedAllocationObject=new BedAllocationModel();
        
		myBedAllocationObject.individual_bed_allocation_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_bed_allocation_record(ColumnName,value_,callback){
         const  myBedAllocationObject=new BedAllocationModel();
        
		myBedAllocationObject.delete_bed_allocation_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}