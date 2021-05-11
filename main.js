const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

//q2
//Write a function readFile that reads the content of the data.txt file.

const fs = require('fs');
 const readFile = () => {
     fs.readFile ("./data.txt",(err, data) => {
         if (err) {
           console.log('ERR',err);
         }
         console.log('DATA: ', data.toString());
     });
  };
readFile()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });
