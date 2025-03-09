import svg from '../assets/images/icons/01d.svg';
import logo from '../assets/images/icons/logo.svg';

import "./LeftContainer.css";
const LeftContainer = ({temperature,city,date}) => {
  return (
  <div className="left-container">
    <div className="logo"><img src={logo} className='logo-svg'/></div>
    <div className="info">
      <div className="deg-number">{temperature}</div>
      <div className="degree">°</div>
      <div className="date-loc-cloud-container">
        <div className="date-loc-container">
          <div className="location">{city}</div>
          <div className="date">{date}</div>
        </div>
        <div className="cloud">
          <img src={svg} className='image'/>
        </div>
      </div>
    </div>
  </div>
  )
}
export default LeftContainer;