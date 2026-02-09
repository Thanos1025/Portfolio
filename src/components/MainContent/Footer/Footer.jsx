import React from 'react'
import "./Footer.css"
import { Icon } from '../../Icon/Icon';
import { github, linkedin, mail } from '../../IconPaths/IconPaths';

export const Footer = (props) => {
  const {setSelectedButtonId} = props;
  return (
    <div className='footer'>
      <div className='quicklinks-contact-wrapper'>
        <div className="about-myself">
          <h1>Ponyogi</h1>
          {/* <p>qwertyuiop sdfghjkl sdfghjk fghjkl ertyui fghj</p> */}
        </div>
        <div className="quick-links">
          <h1>Quick Links</h1>
          <p onClick={()=>setSelectedButtonId(0)}>About me</p>
          <p onClick={()=>setSelectedButtonId(1)}>Projects</p>
          <p onClick={()=>setSelectedButtonId(2)}>Thecnical Skills</p>
          <p onClick={()=>setSelectedButtonId(3)}>Assignments</p>
          <p onClick={()=>setSelectedButtonId(4)}>CodeWar Journey</p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p onClick={()=>window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ponyogi.m@zohocorp.com")}>ponyogi.m@zohocorp.com</p>
          <p onClick={()=>window.open("https://www.linkedin.com/in/ponyogi-m-6278b7375/")}>Linkedin</p>
        </div>
      </div>
      <hr />
      <div className="copywright-links-wrapper">
        <p className='copywright'>© 2026 Ponyogi. All rights reserved.</p>
        <div className="links-button-wrapper">
          <button onClick={()=>window.open("https://github.com/Thanos1025")}>
            <Icon paths={github} dimension={600}/>
          </button>
          <button onClick={()=>window.open("https://www.linkedin.com/in/ponyogi-m-6278b7375/")}>
            <Icon paths={linkedin} dimension={600}/>
          </button>
          <button onClick={()=>window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ponyogi.m@zohocorp.com")}>
            <Icon paths={mail} dimension={600}/>
          </button>
        </div>
      </div>
    </div>
  )
}
