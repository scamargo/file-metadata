var express = require("express")
var path = require('path')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var port = process.env.PORT || 8080;

var app = express()

app.use(express.static(path.join(__dirname,"public")))

app.post('/upload', upload.single('image-file'), function (req, res, next) {
    console.log("Firstname: "+ req.body.firstname)
    res.send('File Size: ' + req.file.size + ' bytes')
})


app.listen(port, function(){
    console.log("Port listening on: " + port)
})