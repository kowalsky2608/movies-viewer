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

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})

app.use (upload())

app.get("/admin",function(req,res){
    res.sendFile(__dirname+"/views/admin.hbs");
})

app.post("/admin",function(req,res){
    if(req,res){
        const file = req.files.filename,
        filename = file.name;
        file.mv("./public/uploads/"+filename,function(err){
            if(err){
                console.log(err)
                res.send("error occured")
            }
            else{
                res.send("Done")
                console.log("Done")
            }
        })
    }
})