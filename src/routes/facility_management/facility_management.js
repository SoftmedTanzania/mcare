/**
 * Created by ebundala on 11/14/2018.
 */
const express =require("express");
const router = express.Router();
import dbcon from "../../common/asyncConnect";
import ApiResponse from "../../common/types/ApiResponse"
import FacilityModel from "../../models/facility/facilityModel"

router.get('/department/type/insert',function(request,response){

    let roleType={
        DepartmentTypeId:null,
        TypeName:"some name",
        TypeCode:0

    }
    let model = new FacilityModel();
    model.create("department_types",roleType).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/type/update/:id',function(request,response){

    //todo remove this after testing complete
    let depertmentType={
       // DepartmentTypeId:request.params.id,
        TypeName:"some name updated",
        TypeCode:0

    }

    let where={
        departmentTypeId:request.params.id
    }
    let model = new FacilityModel();
    model.update("department_types",depertmentType,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/type/delete/:id',function(request,response){

    let where={
        DepartmentTypeId:request.params.id,
        TypeName:"some name",
        TypeCode:0
    }
    let model = new FacilityModel();
    model.delete("department_types",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/type',function(request,response){

    let where={
        DepartmentTypeId:0,
        TypeName:"some name",
        TypeCode:0

    }
    let model = new FacilityModel();
    model.read("department_types",where).then((result)=>{

        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});


router.get('/department/category/insert',function(request,response){

    let depertmentCategoryType={
        DepartmentTypeCategoryId:null,
        DepartmentTypeId:0,
        TypeCategoryName:"some name",
        TypeCategoryCode:0

    }
    let model = new FacilityModel();
    model.create("department_type_categories",depertmentCategoryType).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/category/update/:id',function(request,response){

    //todo remove this after testing complete
    let depertmentCategoryType={
       // DepartmentTypeCategoryId:null,
        DepartmentTypeId:0,
        TypeCategoryName:"some category name updated",
        TypeCategoryCode:0

    }

    let where={
        DepartmentTypeId:request.params.id
    }
    let model = new FacilityModel();
    model.update("department_type_categories",depertmentCategoryType,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/category/delete/:id',function(request,response){

    let where={
        DepartmentTypeId:request.params.id,
        TypeName:"some name",
        TypeCode:0
    }
    let model = new FacilityModel();
    model.delete("department_type_categories",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/category',function(request,response){

    let where={
        // DepartmentTypeCategoryId:null,
          DepartmentTypeId:0,
        TypeCategoryName:"some category name updated",
        TypeCategoryCode:0

    }
    let model = new FacilityModel();
    model.read("department_type_categories",where).then((result)=>{

        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});


router.get('/department/insert',function(request,response){

    let department={
        DepartmentId:null,
        DepartmentTypeCategoryId:0,
        DepartmentDescription:"some dep description",
        DepartmentReferenceNo:0


    }
    let model = new FacilityModel();
    model.create("department",department).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/update/:id',function(request,response){

    //todo remove this after testing complete
    let department={
       // DepartmentId:null,
        DepartmentTypeCategoryId:0,
        DepartmentDescription:"some dep description updated",
        DepartmentReferenceNo:0

    }

    let where={
        DepartmentId:request.params.id
    }
    let model = new FacilityModel();
    model.update("department",department,where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department/delete/:id',function(request,response){

    let where={
         DepartmentId:request.params.id,
        //DepartmentTypeCategoryId:0,
        //DepartmentDescription:"some dep description updated",
        //DepartmentReferenceNo:0
    }
    let model = new FacilityModel();
    model.delete("department",where).then((result)=>{
        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});
router.get('/department',function(request,response){

    let where={
       // DepartmentId:request.params.id,
        DepartmentTypeCategoryId:0,
        //DepartmentDescription:"some dep description updated",
        DepartmentReferenceNo:0

    }
    let model = new FacilityModel();
    model.read("department",where).then((result)=>{

        let api=new ApiResponse(result,null,true)
        response.json(JSON.stringify(api));
    }).catch((err)=>{
        let api=new ApiResponse(null,err,false)
        response.statusCode=400
        response.json(JSON.stringify(api));
    })


});


export default router;