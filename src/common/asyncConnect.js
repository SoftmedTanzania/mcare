var con=require('./dbConnect.js');


 
export default function connect(){    
    return new Promise((resolve,reject)=>{
           
             if(con){
             resolve(con)
             }else{
             reject(con)
            }
           
        })
      
}