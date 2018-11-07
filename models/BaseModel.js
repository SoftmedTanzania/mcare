
import con from "../common/asyncConnect";

export default class BaseModel {
  constructor(){

  }
     db(){
       return con()
     }
     

     
    create(tableName,val){
      let collums,params=[],placeholders=[];
        if(val){
          collums= Object.keys(val);
          collums.forEach((key)=>{
           placeholders.push("?")    
          params.push(val[key])
          })
          console.log(collums,params);
        var sql="INSERT INTO ?? (??) VALUES ("+placeholders.join(",")+")";
        return this.db().then((con)=>{
          return new Promise((resolve,reject)=>{
            let query = con.query(sql,[tableName,collums,...params],(err, result, fields)=>{
               console.log(query.sql)
            if(err) reject(err)
            resolve(result)
          })
        })
          
        })
      }
    }
    /* read(select,where,like,first = false, offset = false, order_by = false){
     
    } */
    update(){}
    delete(){}
    
}