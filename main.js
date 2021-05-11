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



//q3
//Write a function writeFile that writes A new file has been created on a new file called text.txt.

const writeFile = () => {
    fs.writeFile('./text.txt',`A new file has been created`,
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log('DONE WRITE OVER THAT FILE');
        }
      );
  };
  writeFile()
  //q4
  //Write a function getPost that takes one parameter id and returns
  // the post from JSONPlaceholder API that has the passed id.

// const getPost = (id) => {
//     // TODO: Your code here
//   };
  
//   getPost(1);
//   getPost(50);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });
