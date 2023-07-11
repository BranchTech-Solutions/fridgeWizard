import React from 'react'

function Dashboard() {
  return (
    <div>
      You are logged in
    </div>
  )
}

export default Dashboard
import React, { useState } from 'react';
import logo from "../images/logo.png"
import wizzardBuddy from "../images/wizzardBuddy.png"
import expiringSoon from "../images/expiringSoon.png"
import spoiled  from "../images/spoiled.png"
import { Contents } from './Contents';
//import types object from json object in db

export const Dashboard = () => {
    const [purchaseDate, setpurchaseDate] = useState('')
    return (
        <div>
            <header>
            <img className='logo' src={logo} alt="Logo" />
            <h1>Fridge Wizzard</h1>
            <button>Logout</button>
            </header>
            <button><img src={expiringSoon} alt="expiringSoon"/></button>
            <button><img src={spoiled} alt="spoiled"/></button>
            <form>
                <h2>Add an item</h2>
                <label htmlFor="purchaseDate">Date Purchased:</label>
                <input className="input" value={purchaseDate} onChange={(e) => setpurchaseDate(e.target.value)}  type='date' placeholder="Date Purchased" id="purchaseDate" name="purchaseDate"/>
                <label htmlFor='type'>Type:</label>
                <input className='input' type='dropdown' name='type' id='type' placeholder='Enter Type'/>
                <label htmlFor='expDate'>Expiration date:</label>
                <input className='input' type='date' placeholder="Expiration Date" id="expDate" name="expDate"/>
                <label htmlFor='itemName'>Name:</label>
                <input className='input' type='text' placeholder='Item Name' id='itemName'name='itemName'/>
                <button>placeholder for a button</button>
            </form>
            <Contents/>
        </div>
    );
};