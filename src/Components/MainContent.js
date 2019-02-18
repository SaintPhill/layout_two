import React from 'react'
import Services from "./Services";
import AboutUs from "./AboutUs";
import Portfolio from "./Portfolio";

const MainContent = (props) => {
    return (
        <>
            <Services/>
            <Portfolio/>
            <AboutUs/>
        </>
    )
};

export default MainContent;