const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

// const eleveRouter = require('./routes/eleveRouter')
const personneRouter = require('./routes/personneRouter')
// const aploadRouter = require("./routes/aploadRouter")


const app = express();

app.use(fileUpload({
  createParentPath: true
}));

app.use(express.static('uploads'));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use("/eleve",eleveRouter)
app.use("/personne", personneRouter)
// app.use("/upload",aploadRouter)

const port = process.env.PORT || 8000;

app.listen(port, async () => {
  console.log("server is running on port: " + port);
});
