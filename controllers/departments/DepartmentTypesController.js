/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the department_types's controller class.
It receives calls from the "DepartmentTypesRoutes" class and
passes the calls down to the "DepartmentTypesModel" class

*/



const DepartmentTypesModel = require('../../models/departments/DepartmentTypesModel.js');




module.exports = class DepartmentTypesController{
    constructor(){

    }
	
	
	
   insert_department_types(jsonObject_,callback){
     const  myDepartmentTypesObject=new DepartmentTypesModel();
     myDepartmentTypesObject.insert_department_types(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_department_types(callback){
        const  myDepartmentTypesObject=new DepartmentTypesModel();
        myDepartmentTypesObject.get_all_department_types(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_department_types(ColumnName,value_,callback){
         const  myDepartmentTypesObject=new DepartmentTypesModel();
        myDepartmentTypesObject.get_specific_department_types(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_department_types_update(jsonObject_,callback){
       const  myDepartmentTypesObject=new DepartmentTypesModel();
        
		myDepartmentTypesObject.batch_department_types_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_department_types_update(ColumnName,value_,jsonObject_,callback){
        const  myDepartmentTypesObject=new DepartmentTypesModel();
        
		myDepartmentTypesObject.individual_department_types_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_department_types_record(ColumnName,value_,callback){
        const  myDepartmentTypesObject=new DepartmentTypesModel();
        
		myDepartmentTypesObject.delete_department_types_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}