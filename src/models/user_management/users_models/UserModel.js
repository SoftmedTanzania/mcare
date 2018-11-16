import BaseModel from "../../BaseModel";

export default class UserModel extends BaseModel{
    getUsers(select,where,mode="AND",like=false,first = false, offset = false, order_by = false){
     return this.read("users",where,select,mode)
    }


    getByID(){}
    getByCategory(){}
    getByDepartment(){}
    getByRole(){} 
    count(){}
}