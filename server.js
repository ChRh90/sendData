/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port 3000!'));


app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req,res) =>{
    res.send("Hello Server");
});


app.get("/getData", (req, res) =>{
    console.log("send file");
    res.sendFile(path.join(__dirname, './assets', 'german_cities.geojson'));
})
