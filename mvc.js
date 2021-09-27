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
},{
    versionKey:false
}
);

// connect the companySchema to naukri collection

const Company = mongoose.model('company',companySchema);

// create a schema for jobb 

const jobSchema  = new mongoose.Schema({
    job_criteria :{type:String,required:true},
    working_hour :{type:String,required:true},
    location_wise_job :{type:String,required:true},
    job_rating :{type:String,required:true},
    skill :{type:String,required:true},
    jobNoticePeriod :{type:String,required:false},
    // company ={type:mongoose.Schema.Types.ObjectId,ref="company",required:true},
},

{
    versionKey:false
});

const job = mongoose.model('job',jobSchema);

const app=  express();
app.use(express.json());

// crud API------------------>

app.post("/company",async(req, res)=>{
    const user = await Company.create(req.body);
    return res.send(201).send({user})
});

app.get("/company",async(req, res)=>{
    const user = await Company.find().lean().exec();
    return res.status(200).send({user});

})

app.listen(2354,async function() {
await connect();
console.log("listening to port 2354")

});