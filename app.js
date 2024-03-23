const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

const app = express()

const upload = require("express-fileupload")
app.set('view engine','hbs')

app.use(express.static('public'))

app.use(bodyParser.text())
// app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})

app.use (upload())

app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.hbs");
})

app.post("/",function(req,res){
    if(req,res){
        const file = req.files.filename,
        filename = file.name;
        file.mv("./public/uploads/"+filename,function(err){
            if(err){
                console.log(err)
                res.send("error occured")
            }
            else{
                console.log("Done")
            }
        })
    }
})