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
        postItem: {
          ...this.state.postItem,
        itemName: e.target.value
        }
         })}
         placeholder= "item name" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        postItem: {
          ...this.state.postItem,
        itemPrice: e.target.value
        }
         })}
         placeholder= "price" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        postItem: {
          ...this.state.postItem,
        description: e.target.value
        }
         })}
         placeholder= "description" 
         type="text"/>
         <input 
      onChange={e=> this.setState ({
        postItem: {
          ...this.state.postItem,
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