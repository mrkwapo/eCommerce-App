function searchForItem() {
    const input = document.getElementById("itemName").value;
    const url = "/api/showitem/" + input;
    console.log(input);
    axios.get(url)
    .then(response => {
      displayItems(response.data, "itemInfo");
    })
  }

  function displayItems(itemData, itemid){
        const listItems = itemData.map( (element, index) => {
            return (
                "<table>"
                +"<caption>"
                +"result: "
                + (index + 1)
                +"</caption>"

                +"<tr>"

                +"<th>"

                +"Item"

                +"</th>"

                +"<th>"

                +"Price"

                +"</th>"

                +"<th>"

                +"Description"

                +"</th>"             

                +"</tr>"

                +"<tr>"

        + "<td>"

                + element.itemname

        + "</td>"

        + "<td>" 
        +"$"

                + element.itemprice

                + "</td>"

                + "<td>"

                + (element.description ? element.description : " " +

            element.itemname + " no description.")

                + "</td>"

                + "</tr>"

                + "</table>"
            )
          })
     
          document.getElementById(itemid).innerHTML 
     = "<ul>" + listItems.join("\n") + "</ul>"
    
 
   }
   

   function postItem() {
    const itemName = document.getElementById("item-name").value;
    const itemPrice = document.getElementById("item-price").value;
    const description = document.getElementById("item-description").value;
    const sellerName = document.getElementById("seller-name").value;

    
    console.log(itemName, description, itemPrice, sellerName);

    const payload = {
        itemname: itemName,
        itemprice: itemPrice,
        sellername: sellerName,
        description
      }
      axios.post("/api/", payload)
        .then(response => {
          console.log(response.data)
        })
     
   }
   
   function showAllItems() {
    axios.get("/api/getallitems/")
      .then(response => {
        displayItems(response.data, "result")
      })
   }
   