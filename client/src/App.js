import React, { Component } from 'react';
import AllItems from './components/AllItems';
import SearchItem from './components/SearchItem';
import ListItem from './components/ListItem';

class App extends Component {
  state = {
    data:""
  }

   updateData = (newData) => {
    this.setState({
      data: newData
    })
  }
 
 

render() {
  return (
     <div style={{ margin: "10px", textAlign: "center" }} className="App">
      <h2>eCommerce App</h2>
      
      <SearchItem data={this.state.data}/>

      <ListItem setData={this.updateData}/>

         <AllItems/>

      
        
        

    </div>
  );
}

}
export default App;
