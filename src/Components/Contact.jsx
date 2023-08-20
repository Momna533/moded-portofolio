import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Contact(){
    return(
        <> 
        <Element name="contact" data-scroll-to>
        <div className="contact" id="contact">
            <div className="contact_content">
                <div className="contact_content_left">
                    <div className="contact_content_left_heading">LET'S WORK TOGETHER</div>
                    <div className="contact_content_left_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eius cupiditate saepe voluptas expedita? Explicabo distinctio iste doloribus dolores consequatur enim ex officiis quasi veniam.</div>
                    <Link to="/popup-contact" className="contact_content_left_btn">LET'S CHAT</Link>
                </div>
                <div className="contact_content_right">
                    <img src="https://images.unsplash.com/photo-1682253429499-077e9a0cd7b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="contact_img" className="contact_content_right_img" />
                </div>
            </div>
        </div> 
        </Element>
        </>
    )
}

export default Contact;