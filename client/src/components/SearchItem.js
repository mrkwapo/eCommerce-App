import React, { Component } from 'react'

class SearchItem extends Component {
 state = {
   itemName: ""
 }

 searchForItem = () => {
     console.log(this.state);
 }

 render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ itemName: e.target.value })}
          placeholder="item name"
          type="text"
        />
        <button onClick={this.searchForItem}>Search for an Item</button>
      </div>
    )
  }
 }
 
 
 export default SearchItem;
 