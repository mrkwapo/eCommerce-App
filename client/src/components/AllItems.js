import React from 'react'
// import axios from 'axios';


 function AllItems() {
     const showAllItems = () => {
         console.log("getting all listings")
     }
    return (
        <div>
            <h3>Show all listings</h3>
            <button onClick={showAllItems}>Show</button>
        </div>
    )
}

export default AllItems;