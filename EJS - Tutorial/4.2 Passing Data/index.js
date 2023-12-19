import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    let fname = req.body.fName;
    let lname = req.body.lName;
    let nameLength = (fname + lname).length;
    res.render("index.ejs", {nameLength: nameLength});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
