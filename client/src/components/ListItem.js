import React, { Component } from 'react'

 function ListItem() {
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
         <button onClick={this.ListItem}>create listing</button>
        </div>
    )
}

export default ListItem;