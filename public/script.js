function searchForItem() {
    const input = document.getElementById("itemName").value;
    console.log(input);
    axios.get("/showitem/" + input)
    .then(response => {
        document.getElementById("itemInfo").innerHTML = response.data

    })
 
   }
   

   function postItem() {
    const itemName = document.getElementById("item-name").value;
    const itemPrice = document.getElementById("item-price").value;
    const description = document.getElementById("item-description").value;
    const itemId = document.getElementById("item-id").value;
    const sellerName = document.getElementById("seller-name").value;

    
    console.log(itemName, itemId, description, itemPrice, sellerName);

    const payload = {
        itemname: itemName,
        itemid: itemId,
        itemprice: itemPrice,
        description
      }
      axios.post("/api/", payload)
        .then(response => {
          console.log(response)
        })
     
   }
   
   function showAllItems() {
    axios.get("/getallitems/")
      .then(response => {
        document.getElementById("result").innerHTML = JSON.stringify(response.data)
      })
   }
   