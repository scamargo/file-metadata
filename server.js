var express = require("express")
var path = require('path')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var port = process.env.PORT || 8080;

var app = express()

app.use(express.static(path.join(__dirname,"public")))

app.get('/jquery/jquery.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});

app.post('/upload', upload.single('image-file'), function (req, res, next) {
    res.send({'size': req.file.size})
})

app.listen(port, function(){
    console.log("Port listening on: " + port)
})