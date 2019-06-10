const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use('/', express.static("public"));
app.get('/', (req, res) => res.send('Hello World!'))
var data = [];
app.post('/api', function (req, res) {
    const itemName = req.body.itemname;
    const itemId = req.body.itemid;
    const description = req.body.description;
    const sellerName = req.body.sellername;
    const itemPrice = req.body.itemprice;
    
    const temp = {
        itemname: itemName,
        itemprice: itemPrice,
        itemid: itemId,
        description: description
      }
     
      data.push(temp)
      console.log(data);
     
    const reply = `Item : ${itemName}  Price: $ ${itemPrice} Description: ${description} Item ID#: ${itemId} Seller: ${sellerName}`
   
    res.send(reply);
   })
   
   app.get("/showitem/:itemname", function (req, res) {
    const item = req.params.itemname;
    const price = req.params.itemprice;
    console.log(item);
   
    res.send(`The ${item} is available for $ ${price}.`);
   })
   
   app.get("/getallitems", function (req, res) {
    res.send(data)
   })
   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


console.log('server running');