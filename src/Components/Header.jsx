import React, { useState,useEffect } from "react";
import {Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Theme from "./Toggle";

function Header(){
    const [isOpen,setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
  
    const handleToggle = ()=>{
      setIsOpen(!isOpen)
    }
    const handleSetActive = (to) => {
      setActiveLink(to);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-scroll-to]');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.id);
          break;
        }
      }
    };
  
    return (
      <>
      <div className="header">
        <div className="header_content">
        <Theme />
                    <div className="header_content_social_links">
                        <NavLink to="https://www.facebook.com" className="header_content_social_link"><svg className="header_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24"
                         fill="currentColor" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></NavLink>
                        <NavLink to="https://www.twitter.com" className="header_content_social_link"><svg className="header_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" 
                         fill="currentColor" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></NavLink>
                        <NavLink to="https://www.instagram.com" className="header_content_social_link"><svg className="header_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" 
                         fill="none" stroke="currentColor"
                         stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></NavLink>
                    </div>
        <div className="header_content_center">
        <Link className="header_content_logo" onClick={() => setIsOpen(false)}
              activeClass="none"
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as per your design
              duration={500} // Duration of smooth scroll animation
              onSetActive={handleSetActive}
            >
              Web<span>Dev</span>
            </Link>
              <button className="header_content_menu" onClick={handleToggle}>
                {isOpen ? <svg className="close" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg> : <svg className="open" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"></path></svg>}
                </button>
          </div>
          <div className={`header_content_links ${isOpen ? "open" : ""}`}>
          <li>
            <Link onClick={() => setIsOpen(false)}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as per your design
              duration={500} // Duration of smooth scroll animation
              onSetActive={handleSetActive}
            >
              services
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)}
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as per your design
              duration={500} // Duration of smooth scroll animation
              onSetActive={handleSetActive}
            >
              testimonials
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)}
              activeClass="active"
              to="follow"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as per your design
              duration={500} // Duration of smooth scroll animation
              onSetActive={handleSetActive}
            >
              follow
            </Link>
          </li>
          </div>
            <div className="header_content_contact">
            <li>
            <Link 
              activeClass="none"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as per your design
              duration={500} // Duration of smooth scroll animation
              onSetActive={handleSetActive}
            >
              contact
            </Link>
          </li>
            </div>
        </div>
      </div>
      </>
    );
}

export default Header;