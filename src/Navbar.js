import React from "react";
import './App.css';
import axios from "axios";

import logoBanner from "./logoCrenvyBanner.png"

export default function Navbar({Iconimage, country, place, temp, weather, dateText, hour_text}){
    //<a href = "/" className="site-title">Crenvy</a> 
    return (
    <nav className="nav">
      <ul>
      <img src = {logoBanner} alt = "icon"/>    
      </ul>
      
      <ul>
        <li>
          <img src = {Iconimage} alt = "icon"/> 
        </li> 
          <li className="Weather">
              <div> {country} </div>
              <div> {place} </div>
              <div> {temp} </div>
              <div> {weather} </div>
          </li>
          <li className="App">
              <div> {dateText} </div>
              <p> {hour_text} </p>
          </li>
      </ul>
    </nav>
    )
}