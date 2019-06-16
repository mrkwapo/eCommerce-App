import React, { Component } from 'react'
// import axios from 'axios';


class SearchItem extends Component {
 state = {
   itemName:"",
   result:""
 }

 searchForItem = () => {
     console.log("state", this.state);
     console.log("props", this.props);
     this.setState({
         result: this.props.data
     })
 }

 render() {
    return (
      <div>
      <h3>Search for an item</h3>
        <input
          onChange={e => this.setState({ itemName: e.target.value })}
          placeholder="item name"
          type="text"
        />
        <button onClick={this.searchForItem}>Search for an Item</button>
        <br/>
        {this.state.result}
      </div>
    )
  }
 }
 
 
 export default SearchItem;
 