import React, {useState} from 'react'
//import PropTypes from 'prop-types'
import clear_icon from "../components/assets/clear.png"
import cloud_icon from "../components/assets/cloud.png"
import drizzle_icon from "../components/assets/drizzle.png"
import snow_icon from "../components/assets/snow.png"
import rain_icon from "../components/assets/rain.png"

import humidity_icon from "../components/assets/humidity.png"
import wind_icon from "../components/assets/wind.png"
 

export default function Card(props) {
        const [windicon, seticon] = useState(cloud_icon);

    let api_key = "99879e77fdeb8dfc4420c0949ebd9b3b";
    const search = async () => {
        const element = document.getElementsByClassName("input-search");
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json(); 

        const humidity = document.getElementsByClassName("humudity");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("temp");
        const location = document.getElementsByClassName("location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
        {
            seticon(clear_icon);
        }

        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
        {
            seticon(cloud_icon);
        }

        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            seticon(drizzle_icon);
        }

        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            seticon(drizzle_icon);
        }

        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            seticon(rain_icon);
        }

        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            seticon(rain_icon);
        }

        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            seticon(snow_icon);
        }

        else {
            seticon(clear_icon);
        }




    
        
    } 
    return (
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-4 left">
                     <div className = "time">
                        <h2 align="center"> {props.ctime}</h2>
                        <h2 className="date" align="center"> {props.customDateFormat}</h2>
                    </div>

                    <div className='search'>
                <div className="search-box">
                    <button className="btn-search" onClick={search}><i className="fas fa-search"></i></button>
                   <input type="text" class="input-search" placeholder="Type to Search..." />
                        </div>
                </div>

                  
   
                </div>
                <div className="col-4 right">

                    <div className="weather-image">
                        <img src = {windicon} alt = ""/>
                    </div>

                    <div className="temp"> 40°C</div>
                    <div className="location">London</div>
                    
                    <div className="data-container">
                        <div className = "element">
                        <img src={humidity_icon} className = "icon" alt="" />
                        </div>
                        <div className="data">
                            <div className="humudity">64%</div >
                            <div className="text">
                            Humidity
                        </div>
                        </div>
                    
                    
                    
                    <div className = "element">
                        <img src={wind_icon} className = "icon" alt="" />
                        </div>
                        <div className="data">
                            <div className="wind-speed">18 km/h</div >
                            <div className="text">
                            Wind-Speed
                        </div>
                        </div>
                 </div>   
                    
                </div>
            </div>

        
        </div>
    )
    }

