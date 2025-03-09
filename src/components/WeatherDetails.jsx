import WeatherProperty from "./WeatherProperty";
import "./WeatherDetails.css"
const WeatherDetails = ({tempmax,tempmin,humidity,cloudy,wind}) => {  
  return (
    <div className="weather-details-container">
      <p>Weather Details</p>
      <div className="properties">
        <h3>MIST</h3>
        <WeatherProperty property="Temp Max" val={`${tempmax}°`} icon=""/>
        <WeatherProperty property="Temp Min" val={`${tempmin}°`} icon=""/>
        <WeatherProperty property="Humidity" val={`${humidity}%`} icon=""/>
        <WeatherProperty property="Cloudy" val={`${cloudy}%`} icon=""/>
        <WeatherProperty property="Wind" val={`${wind}km/hr`} icon=""/>
      </div>
      <div className="weather-forecast">
        
      </div>
    </div>
  )
}
export default WeatherDetails;