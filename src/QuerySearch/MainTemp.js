import React from "react";

const moment = require('moment');

const MainTemp = (props) => {
  return (
  < >


 <p class="subtitle is-6  has-text-white  has-text-weight-light ">
 {moment.utc(props.dt).format('ll')}
    </p>
    <p className="title is-4  has-text-weight-bold has-text-white   ">
    {props.name}, {props.country}
    </p>

    <p className="subtitle is-6 has-text-weight-light has-text-white ">
    Population: {props.population}    </p>

    <p className="subtitle is-6 has-text-weight-light has-text-white ">
    Population: {props.rain}    </p>

    <p className=" title is-size-2 mb-4-desktop has-text-white ">
{props.main_temp}°F
</p>








    </>
  );
};
export default MainTemp;