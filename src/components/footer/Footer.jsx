import React from 'react'
import "./Footer.css"
import instra from "../../images/instra.png"
import likin from "../../images/in.png"
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
      <div className="fleft">
        <h3 className="p1">Prompt Generator</h3>
        <h3 className="p2">Dweep Daily</h3>
        <h3 className="p3">All Contributors</h3>
        <h3 className="p4">Your data on Dweep.io</h3>
        <h3 className="p5">Contribute to Dweep</h3>
      </div>
      <div className="fright">
        <h3 className="ff1"> Dweep.io</h3>
        <h3 className="ff2">Made with love in India</h3>
          <img className="icon-instra" src={instra} alt="" />
          <img className="icon-in" src={likin} alt="" />       
        </div>
        <h3 className="ff3">hello@dweep.io</h3>
      </div>
    </>
  )
}

export default Footer;
