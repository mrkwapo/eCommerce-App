const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get("/", (req, res) => res.send("api route is working!"))

router.post('/api', function (req, res) {
    const itemName = req.body.itemname;
    const description = req.body.description;
    const sellerName = req.body.sellername;
    const itemPrice = req.body.itemprice;
    
    const data = {
        itemname: itemName,
        itemprice: itemPrice,
        description: description,
        sellername: sellerName
      }
     
      console.log(data)

 const item = new Item(data)
 item.save()
   .then(() => {
    console.log("New item posted");   
    res.send(data))
   .catch(err => console.log(err))

   })

   app.get("/getallitems", function (req, res) {
    Item
    .find()
    .then(results => {
      console.log(results)
      res.send(results)
    })
 
   })

module.exports = router;
