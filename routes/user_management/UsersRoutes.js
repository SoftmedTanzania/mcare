/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the users table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"UsersController" class

*/



const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/user_management/UsersController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.get('user/registration',function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
			DepartmentId:request.query.DepartmentId,
			Surname:request.query.Surname,
			MiddleName:request.query.MiddleName,
			LastName:request.query.LastName,
			PhoneNumber:request.query.PhoneNumber,
			Email:request.query.Email,
			Password:request.query.Password,
			PhysicalAddress:request.query.PhysicalAddress,
			NationalId:request.query.NationalId,
			JobReferenceNo:request.query.JobReferenceNo
		 
		
      
        };
	
	      var myUsersControllerObject=new UsersController();
          myUsersControllerObject.insert_users(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

    });






   router.get('/get_all_users',function(request,response){
   var myUsersControllerObject=new UsersController();
    myUsersControllerObject.get_all_users(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });






   router.get('/update_users',function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		   DepartmentId:request.query.DepartmentId,
			Surname:request.query.Surname,
			MiddleName:request.query.MiddleName,
			LastName:request.query.LastName,
			PhoneNumber:request.query.PhoneNumber,
			Email:request.query.Email,
			Password:request.query.Password,
			PhysicalAddress:request.query.PhysicalAddress,
			NationalId:request.query.NationalId,
			JobReferenceNo:request.query.JobReferenceNo
		
      
        };
	
     var myUsersControllerObject=new UsersController();
    myUsersControllerObject.batch_users_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });







   router.get('/get_specific_users',function(request,response){
        var mKey=request.query.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.query.search_value;
   
         var myUsersControllerObject=new UsersController();


        myUsersControllerObject.get_specific_users(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
       });

     });






   router.get('/update_individual_users',function(request,response){
	
          var column_name=request.query.ColumnName;
          var value_=request.query.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		         
		    DepartmentId:request.query.DepartmentId,
			Surname:request.query.Surname,
			MiddleName:request.query.MiddleName,
			LastName:request.query.LastName,
			PhoneNumber:request.query.PhoneNumber,
			Email:request.query.Email,
			Password:request.query.Password,
			PhysicalAddress:request.query.PhysicalAddress,
			NationalId:request.query.NationalId,
			JobReferenceNo:request.query.JobReferenceNo
		
      
           };
	
            var myUsersControllerObject=new UsersController();
          myUsersControllerObject.individual_users_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

  });






   router.get('/delete_individual_users',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myUsersControllerObject=new UsersController();
    myUsersControllerObject.delete_users_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

   });
 
 
module.exports = router;




