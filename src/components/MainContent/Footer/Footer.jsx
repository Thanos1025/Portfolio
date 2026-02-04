import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='quicklinks-contact-wrapper'>
        <div className="about-myself">
          <h1>Ponyogi</h1>
          <p>qwertyuiop sdfghjkl sdfghjk fghjkl ertyui fghj</p>
        </div>
        <div className="quick-links">
          <h1>Quick Links</h1>
          <p>About me</p>
          <p>Projects</p>
          <p>CodeWar Journey</p>
          <p>Assignments</p>
          <p>Thecnical Skills</p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p>ponyogi.m@zohocorp.com</p>
          <p>Linkedin</p>
        </div>
      </div>
      <hr />
      <div className="copywright-links-wrapper">
        <p className='copywright'>© 2026 Ponyogi. All rights reserved.</p>
        <div className="links-button-wrapper">
          <button>GH</button>
          <button>LI</button>
        </div>
      </div>
    </div>
  )
}
