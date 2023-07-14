// This component will render items between 0 and 5 days from expiration.

import React, { Component, useState } from "react";
import moment from "moment";

export default function ExpiringSoon( {fridgeContents} ) {
  const email = localStorage.getItem("email");
  console.log(email);
  const [expiringItems, setExpiringItems] = useState([]);
  let renderItems;

  //Hard coded fridgeContents for testing
//   const fridgeContents = [
//     {
//         "item": "its whats for dinner",
//         "category": "meat",
//         "expDate": "2023-07-14",
//         "_id": "64af593c802c318e0d687985",
//         "itemid": "e867d0d6-20ee-4571-beb1-d47510ab579a"
//     },
//     {
//         "item": "popeyes fav",
//         "category": "produce",
//         "expDate": "2023-07-14",
//         "_id": "64af599e802c318e0d687988",
//         "itemid": "d6294a74-4f8e-4f88-ad1f-187b774beded"
//     },
//     {
//         "item": "berries for pancakes",
//         "category": "produce",
//         "expDate": "2023-07-10",
//         "_id": "64af59f2802c318e0d68798c",
//         "itemid": "cd313d51-233c-48a1-97f3-6aa3823fdd0c"
//     },
//     {
//         "item": "party parm",
//         "category": "dairy & dairy substitutes",
//         "expDate": "2023-09-10",
//         "_id": "64af5a32802c318e0d687991",
//         "itemid": "b4f421f1-9a61-4491-ba71-879c5a997734"
//     }
// ]

  return (
  <div>
    <h1>Expiring within 5 days:</h1>
    <ul>
      {fridgeContents.map(element => {
        if (moment(element.expDate).isBetween(moment(), moment().add(5, "d"))) {
          return <li>Item: {element.item}, Expiration Date: {element.expDate}</li>
        }
      })}
    </ul>
  </div>);
}
