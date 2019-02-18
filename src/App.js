import React from "react"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

export default class App extends React.Component {

    render() {

        return (
            <>
                <Header/>
                <MainContent/>
                <Footer/>
            </>
        )
    };
}



