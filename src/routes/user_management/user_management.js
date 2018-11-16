/**
 * Created by ebundala on 11/14/2018.
 */
const express =require("express");
const router = express.Router();
import dbcon from "../../common/asyncConnect";
import ApiResponse from "../../common/types/ApiResponse"
import RolesModel from "../../models/user_management/roles_models/RolesModel"

router.get('/role/type/insert',function(request,response){

    let roleType={
        RoleTypeId:'null',
        RoleTypeDescription:"some description of role",
        RoleTypeCode:45

    }
    let model = new RolesModel();
    model.addRoleType(roleType).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
}).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
    response.json(JSON.stringify(api));
})


});
router.get('/role/type/update/:id',function(request,response){

    //todo remove this after testing complete
    let roleType={
        RoleTypeDescription:"some description of role updated",
        RoleTypeCode:45

    }

    let where={
        RoleTypeId:request.params.id
    }
    let model = new RolesModel();
    model.update("role_types",roleType,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/type/delete/:id',function(request,response){

    let where={
        RoleTypeId:request.params.id
    }
    let model = new RolesModel();
    model.delete("role_types",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/type',function(request,response){

    let where={
       // RoleTypeId:'null',
        RoleTypeDescription:"some description of role",
        RoleTypeCode:45

    }
    let model = new RolesModel();
    model.read("role_types",where).then((result)=>{

        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});

router.get('/role/category/insert',function(request,response){

    let roleTypeCategory={
        RoleTypeCategoryId:null,
        RoleTypeId:8,
        RoleTypeCategoryDescription:"description",
        RoleTypeCategoryCode:67
    }
    let model = new RolesModel();
    model.addRoleCategory(roleTypeCategory).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
}).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
    response.json(JSON.stringify(api));
})


});
router.get('/role/category/update/:id',function(request,response){

    let roleTypeCategory={
        RoleTypeCategoryId:request.params.id,
        RoleTypeId:9,
        RoleTypeCategoryDescription:"description updated",
       // RoleTypeCategoryCode:67
    }
   let where={
        RoleTypeCategoryId:request.params.id,
       RoleTypeId:8,
    }
    let model = new RolesModel();
    model.update("role_type_categories",roleTypeCategory,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/category/delete/:id',function(request,response){

    let where={
        RoleTypeCategoryId:request.params.id,
    }
    let model = new RolesModel();
    model.deleteRecord("role_type_categories",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/category',function(request,response){

    //todo make this form request data
    let where={
       // RoleTypeCategoryId:null,
        RoleTypeId:8,
        RoleTypeCategoryDescription:"description",
        RoleTypeCategoryCode:67
    }
    let model = new RolesModel();
    model.read("role_type_categories",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});

router.get('/role/insert',function(request,response){

    let role={
        RoleId:null,
        RoleTypeCategoryId:12,
        RoleDescription:"some description",
        UserId:0

    }
    let model = new RolesModel();
    model.create("roles",role).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/update/:id',function(request,response){

    let role={
        RoleTypeCategoryId:12,
        RoleDescription:"some description ".Math.random(),
        UserId:0
    }
    where={
        RoleId:request.params.id,
    }
    let model = new RolesModel();
    model.update("roles",role,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/role/delete/:id',function(request,response){

    let where={
        RoleId:request.params.id,
    }
    let model = new RolesModel();
    model.deleteRecord("roles",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});897
router.get('/role',function(request,response){

    let where={
        RoleTypeCategoryId:12,
        UserId:1
    }
    let model = new RolesModel();
    model.read("roles",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});

router.get('/user/insert',function(request,response){

    let user={
        UserId:null,
        DepartmentId:0,
        Surname:"john",
        MiddleName:"doe",
        LastName:"frank",
        PhoneNumber:986466,
        Email:"example@example.com",
        Password:"ghjjk",
        ProfPicUrl:"some url",
        PhysicalAddress:"",
        NationalId:"",
        JobReferenceNo:""
    }
    let model = new RolesModel();
    model.addUser(user).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/user/update/:id',function(request,response){

    let user={
        UserId:null,
        DepartmentId:null,
        Surname:"john".Math.random(),
        MiddleName:"doe",
        LastName:"frank",
        PhoneNumber:986466,
        Email:"example@example.com",
        Password:"ghjjk",
        ProfPicUrl:"some url",
        PhysicalAddress:"",
        NationalId:"",
        JobReferenceNo:""
    }
    let where={
        UserId:request.params.id
    }
    let model = new RolesModel();
    model.updateUser(user,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/user/delete/:id',function(request,response){

    let where={
        UserId:request.params.id
    }
    let model = new RolesModel();
    model.deleteRecord("users",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/user',function(request,response){

    let where={
        MiddleName:"doe",
        LastName:"frank",
        PhoneNumber:986466,
        Email:"example@example.com",
        Password:"ghjjk",
    }
    let model = new RolesModel();
    model.read("users",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});

export default router;