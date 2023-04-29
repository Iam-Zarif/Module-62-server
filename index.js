const express = require("express");
const app = express();
const port = process.env.PORT || 5022;
const catagories = require("./Data/catagories.json");
const news = require("./Data/news.json");

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find(n => n._id === id)
});
app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("catagories/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  console.log(id);
  if(id ===0){
    res.send(news);
  }
  else {const categoryNews = news.filter(n => parseInt(n.category_id) ===id);
  res.send(categoryNews)}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
