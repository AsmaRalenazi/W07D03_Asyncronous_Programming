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
// readFile()



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
//   writeFile()
  //q4
  //Write a function getPost that takes one parameter id and returns
  // the post from JSONPlaceholder API that has the passed id.
// const getPost = (id) => {
//         console.log('GET /getPost');
//         axios
//           .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//           // in `.then()` we add the code for the success
//           .then((response) => {
//             console.log('DATA', response.data);
//           })
//           // in `.catch()` we add the code to handel the error
//           .catch((err) => {
//             console.log('ERR', err);
//           });
//   };
  
//   getPost(1);
//   getPost(50);



//q5
//Write an async function getPostAsync that does the same as the previous
// function but it must be implemented by using async and await.

const getPostAsync = async (data) => {

        response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`)
      // in `.then()` we add the code for the success
      .then((response) => {
        console.log('DATA', response.data);
      })
      // in `.catch()` we add the code to handel the error
      .catch((err) => {
        console.log('ERR', err);
      });
   };
    // getPostAsync(1)
    // getPostAsync(50)


//Practice
//q1
//Write a function appendToFile that accepts one argument data
// and will append the passed argument as a new line to
// the data.txt file without writing over the content in that file.
// Check out this link from the Node JS documentation for more information.


//use  
//fs.writeFileSync(file, data[, options])
const appendToFile = (data) => {
    fs.writeFileSync(`./data.txt`,`hello`,
    (err) => {
        if (err) {
          console.log(err);
        }
            console.log('DONE WRITE OVER THAT FILE');
          }
    );
};
//   appendToFile();
  




  //q2
  //Write a function copyFile that accepts one argument fileName and
  // it would copy the file that matches the argument to the same directory 
  //but with a modified name, data.txt would become copy_of_data.txt,
  // it will create or overwrite copied file if exist and when it is done copying log done .
  // Search the NodeJS file system documentation for more information.

  //use 
  //copyFile('source.txt', 'destination.txt', callback);

const copyFile = (fileName) => {
    copyFile('./data.txt', 'copy_of_data.txt',(err, data) => {
        if (err) {
          console.log('ERR',err);
        }
        console.log('DATA: ', data.toString());
    });
  };
//   copyFile()



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });
