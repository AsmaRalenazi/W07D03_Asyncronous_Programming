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


//i try use this   fs.writeFileSync(file, data[, options]) 
//and i think this is true   appendFile('message.txt', 'data to append',
const appendToFile = (data) => {
    // fs.writeFileSync(`./data.txt`,`hello`,
    // (err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //         console.log('DONE WRITE OVER THAT FILE');
    //       }
    // );
    appendFile('./data.txt', 'hi', (err) => {
        if (err) throw err;
        console.log('The "hi" was appended to file!');
      });
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





//q3
//Write a function createPost that accepts one argument post and
// sends a post request to https://jsonplaceholder.typicode.com/posts 
//then returns the newly added post, make sure to parse the response ,
//checkout the Axios documentation for more information on creating a POST request.

// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const newPost = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post

    userId: 1,
  });
  
  const createPost = (post) => {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
          firstName: 'Asma',
          lastName: 'Al-enazi'
        }
      });
  };
//   createPost(newPost)




//q4
//Write a function updatePost that accepts two arguments postId and data.
// The function should update the post from JSONPlaceholder 
//with the passed postId using the new data provided,
// and then it should return the response after parsing. 
//Read the JSONPlaceholder documentation to be find the endpoint and check out Axios documentation 
//for more information on creating a PUT request.

const newPost = JSON.stringify({
    // the post id that we want to update, change it when trying to update another post
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  });
  
  const updatePost = (id, data) => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1',{
      method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
    })
  })
}
  updatePost(1, newPost);



//q5
//Write an async function getUsers that returns all users from JSONPLaceholder API 
//by using async and await. Search JSONPlaceholder documentation to know how to get the users.

const getUsers = async() => {
    response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    // in `.then()` we add the code for the success
    .then((response) => {
      console.log('DATA', response.data);
    })
    // in `.catch()` we add the code to handel the error
    .catch((err) => {
      console.log('ERR', err);
    });
 };
//  getUsers()



//q6
//Write a function saveUsers that would save all the users from JSONPLaceholder API
// to a new file called users.txt.
//users.txt.انشئ ملف اول واسميه
// JSONPLaceholder APIبعدين احفظ فيه اليوزر اللي باخذها من 
const saveUsers = () => {
    fs.writeFile('./users.txt',
        (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`https://jsonplaceholder.typicode.com/users/1/posts`);
    }
  );
  fs.readFile ("./users.txt",(err, data) => {
    if (err) {
      console.log('ERR',err);
    }
    console.log('DATA: ', data.toString());
});
  };



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });
