import WeatherDetails from "./WeatherDetails";
import search from '../assets/images/icons/search.svg';

import "./RightContainer.css"
const RightContainer = ({handleClick,handleChange,value,tempmax,tempmin,humidity,cloudy,wind}) => {
  return (
    <div className="right-container">
        <div className="input-container">
          <input onChange={handleChange} type="search" placeholder="Search Location..." value={value}/>
          <button onClick={handleClick}><img src={search} alt="Search image" /></button>
        </div>  
        <hr />
        <WeatherDetails tempmax={tempmax} tempmin={tempmin} humidity={humidity} cloudy={cloudy} wind={wind}/>
   
    </div>
  )
}
export default RightContainer;