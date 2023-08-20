import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
function Jumbotron(){
    return(
        <> 
        <Element name="home" data-scroll-to>
        <div className="jumbotron"  id="home"> 
            <div className="jumbotron_content">
                <div className="jumbotron_content_left">
                    <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHdpdGglMjAlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="jumbotron_img" className="jumbotron_content_img"  height={"350px"} />
                </div>
                <div className="jumbotron_content_right">
                    <div className="jumotron_content_heading">ABOUT ME</div>
                    <div className="jumotron_content_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque explicabo unde non. Repellendus, iusto quod!</div>
                    <Link to="/popup-contact" className="jumotron_content_btn"
                    >LET'S CHAT</Link>
                </div>
            </div>
        </div>
        </Element>
        </>
    )
}

export default Jumbotron;