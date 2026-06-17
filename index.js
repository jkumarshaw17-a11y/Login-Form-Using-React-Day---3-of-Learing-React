const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const { name } = req.body;
  const { password } = req.body;
  console.log(password);



  if(!name) {
     res.json({
      message2: "Please Fill All Details",
  
    });
  }


    if(!password) {
     res.json({
      message2: "Please Fill All Details",
  
    });
  }


});

app.listen(5000, () => {
  console.log("Server Is Listing....");
});
