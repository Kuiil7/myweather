import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

const moment = require('moment');
require('dotenv').config()


const Geo5days = () => {


  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState( {list: []} );

    useEffect(() => {

      function geolocation () {
        navigator.geolocation.getCurrentPosition(function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
        });
      }


      function getData () {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

          axios.get(url)
            .then(function (response) {
              setData(response.data);
            })
            .catch(function (error) {
              return error
          });
        }

geolocation()
if (!lat || !lon) return;
getData();
}, [lat, lon]);



  return (
<>

    <div id="Geo5Day" className="has-text-centered has-background-primary ">
    <p className=" is-size-1 mt-5 has-text-white ">
Current Geolocation:</p>
    { data.list.slice(0, 1).map(items =>
  <div key={items} >
<div className=" column   has-text-white ">
  <p className=" is-size-1 mt-5">
     {data.city.name}, {data.city.country}
    </p>
    <p className="subtitle has-text-white">
    Population: {data.city.population.toLocaleString()}

    </p>
<p>
{moment.utc(data.list[0].dt_txt).format('LLLL').toUpperCase()}
</p>
  <img className="has-content-centered has-text-white" style={{height:"200px"}} src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb- 2 has-text-white">{ data.list[9].weather[0].description.toUpperCase() }</p>

    <ul>
<li className="is-size-2">
{data.list[0].main.temp}   &#8457;
</li>
<li>
Humidity: {data.list[0].main.humidity} %
</li>
<li>
Wind Speed: {data.list[0].wind.speed} mph
</li>
<li>
Gust: {data.list[0].wind.gust} mph
</li>

</ul>

</div>

    <div className="columns p-6  is-flex-wrap-wrap has-background-primary ">
  <div className="column   box has-text-primary  mr-2">

<p className="is-size-2">
{DateTime.now().toLocaleString() }
</p>
  <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' >
  </img>

<p className="mb-2 has-text-primary ">{ data.list[9].weather[0].description.toUpperCase() }</p>
<ul >


<li className="is-size-2">
{data.list[0].main.temp}   &#8457;
</li>
<li>
Humidity: {data.list[0].main.humidity} %
</li>
<li>
Wind Speed: {data.list[0].wind.speed} mph
</li>
<li>
Gust: {data.list[0].wind.gust} mph
</li>

</ul>
  </div>

  <div className="column box  has-text-primary mr-2">
  <p className="is-size-2">

{moment( data.list[8].dt_txt).format('L') }
</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`}  alt='weather icons' >
  </img>
<p className="mb-2 has-text-primary">{ data.list[8].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[8].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[8].main.humidity} %
        </li>
        <li>
        Wind Speed: {data.list[8].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[8].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary mr-2 ">
  <p className="is-size-2">
{moment( data.list[16].dt_txt).format('L') }
</p>
<img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`}  alt='weather icons' >
</img>

<p className="mb-2 has-text-primary">{ data.list[16].weather[0].description.toUpperCase() }</p>


<ul>
  <li className="is-size-2">
  {data.list[16].main.temp}   &#8457;
  </li>
   <li>
   Humidity: {data.list[16].main.humidity} %
 </li>
   <li>
 Wind Speed: {data.list[16].wind.speed} mph
</li>
<li>
   Gust: {data.list[16].wind.gust} mph
        </li>
</ul>

  </div>

  <div className="column box has-text-primary mr-2">

  <p className="is-size-2">
{moment( data.list[24].dt_txt).format('L') }
</p>

<img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

<p className="mb-2 has-text-primary">{ data.list[24].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[24].main.temp}   &#8457;
  </li>
   <li>
       Humidity: {data.list[24].main.humidity} %
        </li>

  <li>
        Wind Speed: {data.list[24].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[24].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary mb-5">
  <p className="is-size-2">
{moment( data.list[32].dt_txt).format('L') }
</p>

  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 has-text-primary">{ data.list[32].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[32].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[32].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[32].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[32].wind.gust} mph
        </li>
</ul>
  </div>
</div>
</div>

)}

    </div>

</>
  );
};
export default Geo5days;