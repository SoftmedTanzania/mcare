const PatientTypesModel = require('../../models/patient_management/PatientTypesModel.js');
var patientTypeDescription="Juvenile";
var patientTypeCode="P005";


module.exports = class PatientTypesController{
    constructor(){

    }
    insertPatientTypes(){
        const  myPatientTypesObject=new PatientTypesModel(patientTypeDescription,patientTypeCode);
        myPatientTypesObject.insertPatientTypes();
    }

};