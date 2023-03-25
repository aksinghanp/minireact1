import React from 'react'
import "./Header.css"
import img from "../../images/name.png"
const Header = () => {
  return (
    
    <div className="headerContainer">
      <div className="left">
        <div className="content">
          <h1>An inspiring design delivered to your inbox every morning</h1>
          <p>
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>
          <b>Show me how it looks</b>
          <div className="form">
            <input className="f1" type="text" />
             <p className="email">Your e-mail address</p>
            <button className="btn">Register Now</button>
          </div>
          <h4>Free - No Spam - No Data Sharing</h4>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img className="name" src={img} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Header;