const express = require("express");
const app = express();
const port = process.env.PORT || 5020;
const catagories = require('./Data/catagories.json')

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get('/catagories' , (req, res) =>{
    res.send(catagories);  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
