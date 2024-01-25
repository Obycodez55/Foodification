require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public/'));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "public/index.html");
});
app.listen(PORT, function(){
    console.log(`app listening on ${PORT}`);
});