const Express=require("express")
const Mongoose=require("mongoose")
const BodyParser=require("body-parser")
const Cors=require("cors")

const eModel=require("./models/ecommercemodel")
Mongoose.connect("mongodb+srv://college:college12345@cluster0.clz3nig.mongodb.net/ecommercedb?retryWrites=true&w=majority",{useNewUrlParser:true})


var app=Express()
app.use(Cors())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/add",async(req,res)=>{
    let data=new eModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
})

app.post("/display",async(req,res)=>{
    let data=await eModel.find()
    res.send(data)
})

app.post("/update",async(req,res)=>{
    let data=await eModel.find(req.body)
    res.send(data)
})

app.post("/delete",async(req,res)=>{
    let data=await eModel.find(req.body)
    res.send(data)
})

app.listen(3000)

