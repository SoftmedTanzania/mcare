/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the bed_allocation_days's controller class.
It receives calls from the "BedAllocationDaysRoutes" class and
passes the calls down to the "BedAllocationDaysModel" class

*/



const BedAllocationDaysModel = require('../../models/wards/BedAllocationDaysModel.js');



module.exports = class BedAllocationDaysController{
    constructor(){

    }
	
	
	

	
	
   insert_bed_allocation_days(jsonObject_,callback){
     const  myBedAllocationDaysObject=new BedAllocationDaysModel();
     myBedAllocationDaysObject.insert_bed_allocation_days(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		
		
	
	
	
	
	
	
	
   get_all_bed_allocation_days(callback){
         const  myBedAllocationDaysObject=new BedAllocationDaysModel();
        myBedAllocationDaysObject.get_all_bed_allocation_days(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   get_specific_bed_allocation_days(ColumnName,value_,callback){
         const  myBedAllocationDaysObject=new BedAllocationDaysModel();
        myBedAllocationDaysObject.get_specific_bed_allocation_days(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
	
   batch_bed_allocation_days_update(jsonObject_,callback){
       const  myBedAllocationDaysObject=new BedAllocationDaysModel();
        
		myBedAllocationDaysObject.batch_bed_allocation_days_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
		
		
	
	
	
	
	
   individual_bed_allocation_days_update(ColumnName,value_,jsonObject_,callback){
        const  myBedAllocationDaysObject=new BedAllocationDaysModel();
        
		myBedAllocationDaysObject.individual_bed_allocation_days_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
			
	
	
	
	
	
	
	
	
	
   delete_bed_allocation_days_record(ColumnName,value_,callback){
         const  myBedAllocationDaysObject=new BedAllocationDaysModel();
        
		myBedAllocationDaysObject.delete_bed_allocation_days_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	

	
	
}