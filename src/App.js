import logo from './logoCrenvyMenu.gif';
import './App.css';
import Navbar from './Navbar';
import Publicacion from './Publicacion'
import Post from './Post'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,InputGroup,FormControl,Button,Row,Card} from 'react-bootstrap';

import React from "react";
import axios from "axios";


const CLIENT_ID="b01669ce06464e06ad1afe9c395c7c15";
const CLIENT_SECRET="c7e50afc03dc417ca2181cf3d81664ff";

const API_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "885247edcfd01bf83861e339962c9756";


function App() {
  const[searchInput, setSearchInput] = React.useState("");
  const[accessToken, setAccessToken] = React.useState("");
  const[loading, setLoading] = React.useState("");
  const[songs, setSongs] = React.useState([]);


  const [temp, setTemp] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const [Iconimage, setIconImage] = React.useState("");

  let date = new Date();
  let dayDate = date.getDate();
  let month = date.getMonth() + 1;
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let iconUrl = "";

  let hour_text = `${hour}:${minutes}`;
  let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  let dateText = `${days[day]} ${dayDate}/${month}`;

  let longitude;
  let latitude;


  React.useEffect(()=>{
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      const crd = pos.coords;
      longitude = crd.longitude;
      latitude = crd.latitude;

      let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;
    
      axios.get(finalAPIEndPoint)
      .then((response) => { 
        let t = response.data.main.temp -272.15; 
        setPlace(response.data.name);
        setCountry(response.data.sys.country);
        setWeather(response.data.weather[0].main);
        setTemp(`${t.toFixed(1)} °C`);

        let url = "http://openweathermap.org/img/wn/";
        iconUrl = url + response.data.weather[0].icon + "@2x.png";
        setIconImage(iconUrl);

      })
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);

    setLoading(true);
    setTimeout(() => {setLoading(false);}, 3000);
  },[])

  return(
    <div>
      {loading ?
        (
        <div className="Loading">
          <header className="Loading-header">
            <img src={logo} className="Loading-logo" alt="Loading" />
          </header>
        </div>
        ):
        (
          <header className='App-header'>
            <Navbar Iconimage={Iconimage}
              country={country} place={place} temp={temp} 
              weather={weather} dateText={dateText} hour_text={hour_text} />
            <Post songs = {songs} setSongs = {setSongs} Iconimage={Iconimage} hour_text={hour_text} weather={weather}/>
          </header>
          
        )
    }
    </div>
  )
}

export default App;
