
var express = require('express');
var app = express();
var path =require("path");
import dbcon from "./common/asyncConnect";
import ApiResponse from "./common/types/ApiResponse"
import RolesModel from "./models/user_management/roles_models/RolesModel"
var con=require('./common/dbConnect.js'); 



app.use((req,res,next)=>{
  mysqlx.getSession(dbcredentials).then((session)=>{
    if(session!=null){
      req.dbSession=session;
      next();
    }

  }).catch((err)=>{
    throw err;
  });
 
});





app.get('/',function(req,res){
   if(req.dbSession==null){
     throw new Error("No database session");
   }
  req.dbSession.getSchema('mcare').getTable('department_types')
                    .select()
                    .execute(row => {
                        console.log(row); // ['bar', 42]
                        res.send(row);
                    });
});

app.get('/roleType',function(request,response){

    let roleType={
      RoleTypeId:'null',
      RoleTypeDescription:"some description of role",
      RoleTypeCode:45

    }
    let model = new RolesModel();
    model.addRoleType(roleType).then((result)=>{
      let api=new ApiResponse(result,null,true)
    response.send(JSON.stringify(api));
    }).catch((err)=>{
      let api=new ApiResponse(null,"err",false)
      response.statusCode=400
      response.send(JSON.stringify(api));
    })
    
  
  });

  app.get('/roleTypeCategory',function(request,response){

    let roleTypeCategory={
      RoleTypeCategoryId:null, 	
      RoleTypeId:8, 	
      RoleTypeCategoryDescription:"description", 	
      RoleTypeCategoryCode:67
    }
    let model = new RolesModel();
    model.addRoleCategory(roleTypeCategory).then((result)=>{
      let api=new ApiResponse(result,null,true)
    response.send(JSON.stringify(api));
    }).catch((err)=>{
      let api=new ApiResponse(null,"err",false)
      response.statusCode=400
      response.send(JSON.stringify(api));
    })
    
  
  });




app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!\n'+err.message);
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});