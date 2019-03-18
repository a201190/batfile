const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
const fs=require("fs");
var {spawn, execFile} = require('child_process');
// var shell = require('shelljs');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });


  app.get('/', (req, res)=>{
    let bat=spawn('cmd /c start "" cmd /c /C:/amit.bat', {shell:true});
    bat.stdout.on('data', (data) => {
      console.log(data.toString());
     
    });
    
    bat.stderr.on('data', (data) => {
      console.log('Child',data.toString());
    });
    
    bat.on('exit', (code) => {
      res.sendFile(path.resolve('./test.txt'))

      console.log(`Child exited with code ${code}`);
    });
  
  
    
})
app.listen(5000)