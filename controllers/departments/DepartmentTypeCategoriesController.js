/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the department_type_categories's controller class.
It receives calls from the "DepartmentTypeCategoriesRoutes" class and
passes the calls down to the "DepartmentTypeCategoriesModel" class

*/



const DepartmentTypeCategoriesModel = require('../../models/departments/DepartmentTypeCategoriesModel.js');




module.exports = class DepartmentTypeCategoriesController{
    constructor(){

    }
	
	
	
   insert_department_type_categories(jsonObject_,callback){
     const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
     myDepartmentTypeCategoriesObject.insert_department_type_categories(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}		

	
	
	
	
   get_all_department_type_categories(callback){
        const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
        myDepartmentTypeCategoriesObject.get_all_department_type_categories(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_department_type_categories(ColumnName,value_,callback){
         const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
        myDepartmentTypeCategoriesObject.get_specific_department_type_categories(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_department_type_categories_update(jsonObject_,callback){
       const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
        
		myDepartmentTypeCategoriesObject.batch_department_type_categories_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_department_type_categories_update(ColumnName,value_,jsonObject_,callback){
         const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
        
		myDepartmentTypeCategoriesObject.individual_department_type_categories_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_department_type_categories_record(ColumnName,value_,callback){
        const  myDepartmentTypeCategoriesObject=new DepartmentTypeCategoriesModel();
        
		myDepartmentTypeCategoriesObject.delete_department_type_categories_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
		
	
	
}