import BaseModel from "../../BaseModel";


export default class Roles extends BaseModel{
    constructor(){
     super();
    }
   /* read(select="*",where=null,like=null,first = false, offset = false, order_by = false){
     let sql="SELECT "+select+" FROM roles ";
        if(where!=null){
            sql+="WHERE "
           where.keys().map((key,i,arr)=>{
               sql+=" "+key+" = "+where[key]; 
               if((i+1)<arr.length){
               sql+=" AND "
               }
           })
        }
        if(like!=null){
            
        }
        if(first){
            sql+=" FIRST "+first
        }
        if(offset){
            sql+=" LIMIT "+first
        }

        if(order_by){

        }

    return db().then((con)=>{
       con.query(sql,(err, result, fields) =>{
        if (err) throw err;
        console.log(result);
        return result
      })
     })
    }*/
    addRoleType(roleType){  
        return this.create("role_types",roleType)
    }
    addRoleCategory(roleTypeCategory){
          return this.create("role_type_categories",roleTypeCategory)
    }
    update(){}
    delete(){} 
    getByID(){}
    getByCategory(){}
    assignRole(){}
    revokeRole(){}
    hasRole(){}
    getRoles(){}
    count(){}
}