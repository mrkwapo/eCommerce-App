import React, { Component } from 'react';
import AllItems from './components/AllItems';
import SearchItem from './components/SearchItem';
import ListItem from './components/ListItem';

class App extends Component {
  state = {
    searchForItem: {
    itemName: ""
  },

  postItem: {
    itemName: "",
    itemPrice: "",
    description: "",
    sellerName: ""
  }
}


  searchForItem = () => {
    console.log(this.state);
  } 

  listItem = () => {
    console.log(this.state)
  }

  showAllItems = () => {
    console.log("Show all listings");
  }
 

render() {
  return (
     <div style={{ margin: "10px", textAlign: "center" }} className="App">
      <h2>eCommerce App</h2>
      <h3>Search for an item</h3>
      <SearchItem/>

      <ListItem/>

         <AllItems/>

      
        
        

    </div>
  );
}

}
export default App;
