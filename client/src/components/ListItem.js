import React, { Component } from 'react'
import axios from 'axios';

class ListItem extends Component {
    state = {
        itemName: "",
        itemPrice: "",
        description: "",
        sellerName: ""
      }
     
      listItem = () => {
          console.log(this.state);
          const data = {
            itemname: this.state.itemName,
            itemprice: this.state.itemPrice,
            description: this.state.description,
            sellername: this.state.sellerName

          }
          
          axios.post('/api', data)
            .then(res => console.log(res.data))
       
      }


    render() {
    return (
        <div>
        <h3> List an item for sale</h3>
      <input 
      onChange={e=> this.setState ({
        listItem: {
          ...this.state.listItem,
        itemName: e.target.value
        }
         })}
         placeholder= "item name" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        listItem: {
          ...this.state.listItem,
        itemPrice: e.target.value
        }
         })}
         placeholder= "price" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        listItem: {
          ...this.state.listItem,
        description: e.target.value
        }
         })}
         placeholder= "description" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        listItem: {
          ...this.state.listItem,
        sellerName: e.target.value
        }
         })}
         placeholder= "seller's name" 
         type="text"/>
         <button onClick={this.listItem}>create listing</button>
        </div>
    )
}
}

export default ListItem;