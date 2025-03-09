import "./WeatherProperty.css";
const WeatherProperty = ({property, val, icon}) => {
  return (
    <div className="weather-props">
      <div>{property}</div>
      <div>{val}</div>
    </div>
  )
}
export default WeatherProperty;

