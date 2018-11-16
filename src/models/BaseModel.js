
import con from "../common/asyncConnect";

export default class BaseModel {
  constructor(){

  }
     db(){
       return con()
     }
     

     
    create(tableName,val){

        return this.db().then((con)=>{
            let collums,params=[],placeholders=[];
            collums= Object.keys(val);
            collums.forEach((key)=>{
                placeholders.push("?")
                params.push(val[key])
            })
            console.log(collums,params);
            var sql="INSERT INTO ?? (??) VALUES ("+placeholders.join(",")+")";
          return new Promise((resolve,reject)=>{
            let query = con.query(sql,[tableName,collums,...params],(err, result, fields)=>{
               console.log(query.sql)
            if(err) reject(err)
            resolve(result)
          })
        })
          
        })

    }
    read(tableName,where,select="*",mode="AND",like=false,first = false, offset = false, order_by = false){


         return this.db().then((con)=>{

             let collumsP=select,collums,params=[],values=[];
             if(select!=="*"){
                 collumsP="??"
                 params.push(select);
             }
             collums= Object.keys(where);
             collums.forEach((key)=>{
                 values.push(where[key])
             })
             let len=collums.length;
             let sql="SELECT "+collumsP+" FROM ?? WHERE "+(len>1?collums.join("=? "+mode+" "):collums.join())+"=?";
             params.push(tableName,...values);
             return new Promise((resolve,reject)=>{
                 let query = con.query(sql,params,(err, result, fields)=>{
                     console.log(query.sql)
                     if(err) reject(err)
                     resolve(result)
                 })
             })

         })
    }
    update(tableName,val,where,mode="AND"){
            return this.db().then((con)=>{

                let values=[], collums= Object.keys(where);
                collums.forEach((key)=>{
                    values.push(where[key])
                })

                let len=collums.length;
                let sql="UPDATE ?? SET ? WHERE "+(len>1?collums.join("=? "+mode+" "):collums.join())+"=?";
                console.log(len,collums,values)
                return new Promise((resolve,reject)=>{
                    let query = con.query(sql,[tableName,val,...values],(err, result, fields)=>{
                        console.log(query.sql)
                        if(err) reject(err)
                        resolve(result)
                    })
                })

            })

    }
    deleteRecord(tableName,where,mode="AND"){

        return this.db().then((con)=>{
            let collums,values=[];
            collums= Object.keys(where);

            collums.forEach((key)=>{
                values.push(where[key])
            })

            let len=collums.length;

            var sql="DELETE FROM ?? WHERE "+(len>1?collums.join("=? "+mode+""):collums.join())+"=?";

            return new Promise((resolve,reject)=>{
                let query = con.query(sql,[tableName,...values],(err, result, fields)=>{
                    console.log(query.sql)
                    if(err) reject(err)
                    resolve(result)
                })
            })

        })
    }
    query(sql,params){
        return this.db().then((con)=>{
            return new Promise((resolve,reject)=>{
                let query = con.query(sql,[...params],(err, result, fields)=>{
                    console.log(query.sql)
                    if(err) reject(err)
                    resolve(result)
                })
            })

        })
    }
}