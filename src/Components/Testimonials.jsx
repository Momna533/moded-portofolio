import React, { useState } from "react";
import testimonials from "../Testimonials";
import { Element } from "react-scroll";

function Testimonials(){
    const [index,setIndex] = useState(0);
    const {name,desc} = testimonials[index];

    const checkNumber = (number) =>{
        if(number > testimonials.length - 1){
            return 0
        }
        if(number < 0){
            return testimonials.length - 1
        }
        return number;
    }
    function handlePrev(){
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    function handleNext(){
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    return(
        <>
        <Element name="testimonials" data-scroll-to>
        <div className="testimonials" id="testimonials">
            <div className="testimonials_content">
                <div className="testimonials_content_heading">WHAT MY CLIENTS ARE SAYING</div>
                <div className="testimonials_content_heading">{name}</div>
                <div className="testimonials_content_desc">
                    <div className="testimonials_content_desc_left" onClick={handlePrev}><img src={require("../assets/Vector 2.png")} alt="left" width={"50px"} /></div>
                    <div className="testimonials_content_desc_text">{desc}</div>
                    <div className="testimonials_content_desc_right" onClick={handleNext}><img src={require("../assets/Vector 1.png")} alt="right" width={"50px"} /></div>
                </div>
            </div>
        </div>
        </Element>
       
        </>
    )
}

export default Testimonials;