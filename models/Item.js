const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
 itemname: String,
 description: String,
sellername: String,
itemprice: String

})

module.exports = mongoose.model('Item', itemSchema);
