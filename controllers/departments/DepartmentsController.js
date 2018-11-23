/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the departments's controller class.
It receives calls from the "DepartmentsRoutes" class and
passes the calls down to the "DepartmentsModel" class

*/



const DepartmentsModel = require('../../models/departments/DepartmentsModel.js');




module.exports = class DepartmentsController{
    constructor(){

    }
	
	
	
   insert_departments(jsonObject_,callback){
     const  myDepartmentsObject=new DepartmentsModel();
     myDepartmentsObject.insert_departments(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_departments(callback){
       const  myDepartmentsObject=new DepartmentsModel();
        myDepartmentsObject.get_all_departments(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_departments(ColumnName,value_,callback){
         const  myDepartmentsObject=new DepartmentsModel();
        myDepartmentsObject.get_specific_departments(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_departments_update(jsonObject_,callback){
       const  myDepartmentsObject=new DepartmentsModel();
        
		myDepartmentsObject.batch_departments_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_departments_update(ColumnName,value_,jsonObject_,callback){
         const  myDepartmentsObject=new DepartmentsModel();
        
		myDepartmentsObject.individual_departments_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_departments_record(ColumnName,value_,callback){
        const  myDepartmentsObject=new DepartmentsModel();
        
		myDepartmentsObject.delete_departments_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}