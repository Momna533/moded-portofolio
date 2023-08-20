import React from "react";
function PopupContact(){
    return(
        <> 
        <div className="popup">
            <div className="popup_content">
            <h1>Contact</h1>
            <h4>contact me for more info</h4>
            <form action="" className="popup_form">
                <label htmlFor="">
                    <input type="text" placeholder="name" />
                </label>
                <label htmlFor="">
                    <input type="email" placeholder="email" />
                </label>
                <label htmlFor="">
                    <textarea placeholder="message..." name="" id="" cols="30" rows="10"></textarea>
                </label>
                <button type="submit">Contact</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default PopupContact;