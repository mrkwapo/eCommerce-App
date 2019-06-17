import React, { Component } from 'react';
import AllItems from './components/AllItems';
import SearchItem from './components/SearchItem';
import ListItem from './components/ListItem';

class App extends Component {
  state = {
    pageView: ""
  }



render() {
  return (
     <div style={{ margin: "10px", textAlign: "center" }} className="App">
      <h2>eCommerce App</h2>

      <button
         style={{ margin: "10px" }}
         href="#"
         onClick={() => this.setState({ pageView: 
        <ListItem/>})}
       >List Item</button>



      <button
         style={{ margin: "10px" }}
         href="#"
         onClick={() => this.setState({ pageView: 
        <SearchItem />})}
       >Search Listings</button>


       <button
         style={{ margin: "10px" }}
         href="#"
         onClick={() => this.setState({ pageView: 
        <AllItems/> })}
       >All Items</button>

       <br />
       {this.state.pageView}

      
        
        

    </div>
  );
}

}
export default App;
