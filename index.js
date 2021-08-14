const express = require('express');

const app = express();

app.get('/',(req, res) => res.send("Hello every one.... This is a node file"))

const port = 5000;
app.listen(port,()=>console.log("server is runing......"));