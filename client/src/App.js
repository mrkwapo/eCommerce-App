import React, { Component } from 'react';

class App extends Component {
  state = {
    itemName: "",
    itemPrice: "",
    description: "",
    sellerName: ""
  }


  searchForItem = () => {
    console.log(this.state);
  } 

render() {
  return (
    <div className="App">
      <h2>eCommerce App</h2>
      <h3>Search for an item</h3>
      <input 
      onChange={e=> this.setState ({
        itemName: e.target.value
      })}
      placeholder="item name" type="text"/>
      <button onClick={this.searchForItem}>search</button> 

      <h3> Post an item for sale</h3>
      <input 
      onChange={e=> this.setState ({
        itemName: e.target.value
         })}
         placeholder= "item name" type="text"/>
         <input 
      onChange={e=> this.setState ({
        itemPrice: e.target.value
         })}
         placeholder= "item name" type="text"/>
         <input 
      onChange={e=> this.setState ({
        description: e.target.value
         })}
         placeholder= "item name" type="text"/>
         <input 
      onChange={e=> this.setState ({
        sellerName: e.target.value
         })}
         placeholder= "item name" type="text"/>
         <button onClick={this.postItem}>post</button>

      
        
        

    </div>
  );
}

}
export default App;
