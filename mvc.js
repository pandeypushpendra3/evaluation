const express = require("express");
const mongoose = require("mongoose");

const connect =()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/Naukri")
}


// create  a schema for company portals 

const companySchema  = new mongoose.Schema({
    company_name:{type:String,required:true},
    company_vacancies:{type:String,required:true},
    working_mode:{type:String,required:true},
    noticePeriod_time:{type:String,required:true},
    rating:{type:String,required:true},
});

// connect the companySchema to naukri collection

const Company = mongoose.model('company',companySchema);

// crea