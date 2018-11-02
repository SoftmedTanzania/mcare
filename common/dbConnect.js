var mysql = require('mysql');
var dbcredentials;

 dbcredentials={
		  host: process.env.DB_HOST,
		  user: process.env.DB_USER,
		  password: process.env.DB_PASS,
          database: process.env.DB_DATABASE,
	      insecureAuth : true
		}


var con = mysql.createConnection(dbcredentials);
	con.on('error',(err) =>{
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      console.log(err);                        // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      //throw err;                                  // server variable configures this)
    }
  });
module.exports=con;