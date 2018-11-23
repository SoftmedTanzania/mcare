/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the users's controller class.
It receives calls from the "UsersRoutes" class and
passes the calls down to the "UsersModel" class

*/



const UsersModel = require('../../models/user_management/UsersModel.js');
const ModelMaster = require('../../models/ModelMaster.js');
//const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const TableName="users";
var pbkdf2 = require('pbkdf2');




module.exports = class UsersController{
    constructor(){

    }
	
	
	
   insert_users(jsonObject_,callback){
     
	   
	 var  secrets_jsonObject=this.hashPassword(jsonObject_.Password);
	   
	 var encrypted_Password=secrets_jsonObject.encrypted_Password;
	 var salt=secrets_jsonObject.salt;
	   
	 delete jsonObject_["Password"];
	 jsonObject_["encrypted_Password"] = encrypted_Password;
	 jsonObject_["salt"] = salt;
	   
	   
	   const  myUsersObject=new UsersModel();
     myUsersObject.insert_users(jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
	}
	
	
	
	user_login(AttemptedJobReferenceNo,AttemptedPassword){
	
		var ColumnName="JobReferenceNo";
		var value_=AttemptedJobReferenceNo;
		
	    const  myModelMaster=new ModelMaster();
		
		
		
		
		myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            
        });
		
	
	
	}

	
	
	
	
   get_all_users(callback){
       const  myUsersObject=new UsersModel();
        myUsersObject.get_all_users(function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   get_specific_users(ColumnName,value_,callback){
         const  myUsersObject=new UsersModel();
        myUsersObject.get_specific_users(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }	
			
	
	
	
   batch_users_update(jsonObject_,callback){
        const  myUsersObject=new UsersModel();
        
		myUsersObject.batch_users_update(jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   individual_users_update(ColumnName,value_,jsonObject_,callback){
         const  myUsersObject=new UsersModel();
        
		myUsersObject.individual_users_update(ColumnName,value_,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }		
	
	
	
	
	
   delete_users_record(ColumnName,value_,callback){
        const  myUsersObject=new UsersModel();
        
		myUsersObject.delete_users_record(ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });
    }
	
	
	
	
	
	hashPassword(password) {
        var salt = crypto.randomBytes(128).toString('base64');
        var iterations = 10000;
        var encrypted_Password = pbkdf2.pbkdf2Sync(password, salt, 1, 32, 'sha512');

    return {
        salt: salt,
        encrypted_Password: encrypted_Password
        };
    }
	
	
	
	
	
	isPasswordCorrect(savedHash, savedSalt, AttemptedPassword) {
        return savedHash == pbkdf2.pbkdf2Sync(AttemptedPassword, savedSalt, 1, 32, 'sha512');
    }
	
	
     
	
	
		
	
	
}