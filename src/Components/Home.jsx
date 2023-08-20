import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Follow from "./Follow"
import Footer from "./Footer";

function Home(){
    return(
        <>
        <div className="main">
        <Header />
        <Jumbotron />
        <Services />
        <Contact />
        <Testimonials />
        <Follow />
        <Footer />
        </div>
        </>
    )
}

export default Home;