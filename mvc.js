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
    // companys ={ type:mongoose.Schema.Types.ObjectId,ref:"job",required:true}
},{
    versionKey:false
}
);

// connect the companySchema to naukri collection

const Company = mongoose.model('company',companySchema);



const app=  express();
app.use(express.json());

// crud API- for company----------------->

app.post("/company",async(req, res)=>{
    const user = await Company.create(req.body);
    return res.send(201).send({user})
});
app.get("/company/:id",async(req,res)=>{
    const user = await Company.findById(req.params.working_mode,req.body,{new:true}).lean().exec();
    return res.send(200).send({user});
    
});
app.get("/company/:id",async(req,res)=>{
    const user = await Company.find(req.params.company_vacancies).lean().exec();
    return res.send(200).send({user});
    
});

app.get("/company",async(req, res)=>{
    const user = await Company.find().lean().exec();
    return res.status(200).send({user});

});

//  crud api for job ---------------------->

app.post("/job",async(req, res)=>{
    const user = await Job.create(req.body);
    return res.send(201).send({user})
});
app.get("/job/:id",async(req,res)=>{
    const user = await Job.findById(req.params.working_mode,req.body,{new:true}).lean().exec();
    return res.send(200).send({user});
    
})


app.get("/job",async(req, res)=>{
    const user = await Job.find().lean().exec();
    return res.status(200).send({user});

});





app.listen(2354,async function() {
await connect();
console.log("listening to port 2354")

});