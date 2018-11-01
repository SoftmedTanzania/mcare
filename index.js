const mysqlx = require('@mysql/xdevapi');
var express = require('express');
var app = express();
var path =require("path");
var dbcredentials;
if(process.env.DB_USER==null){
 dbcredentials=require("./dbcredentials.js");
}
else{
 dbcredentials={
		  host:"localhost", //process.env.DB_HOST,
		  user:"root", //process.env.DB_USER,
		  password:"admin", //process.env.DB_PASS,
      schema:"mcare", //process.env.DB_NAME,
      port: 33060,
		}
}



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


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!\n'+err.message);
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});