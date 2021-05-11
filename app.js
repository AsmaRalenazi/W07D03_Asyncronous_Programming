const fs = require("fs");
const axios = require("axios");


const app = express();
app.use(express.json());


app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });