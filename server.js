const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const keys = require("./keys");
const Item = require("./models/Item");
const api = require('./routes/api');

// Connect to Mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB connected"));



app.use(bodyParser.json());
app.use('/', express.static("public"));
app.get('/', (req, res) => res.send('Hello World!'))
var data = [];
app.use("/api", api);

   
   app.get("/showitem/:itemname", function (req, res) {
    const item = req.params.itemname;
    console.log(item);
   
    Item.find({ itemname: item })
    .then(result => {
      console.log("Showing", item, "profile:", result)
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
 
   })
   
   
   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


console.log('server running');