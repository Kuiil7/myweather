import React from "react";


const WeatherIcons= (props) => {



  return (
    < >
    <div className="fade-in-image">
  <img src={`http://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
alt='weather icons'  width="160px" className="mt-5 " >
</img>
</div>
    </>
  );
};
export default WeatherIcons;