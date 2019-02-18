import React from 'react'

const Portfolio = (props) => {
    return (
        <section id='portfolio'>
            <div className="container">
                <div className="title">
                    <h2>
                        Our portfolio
                    </h2>
                    <p>
                        Proin iaculis purus consequat sem cure.
                    </p>
                </div>
                <div className="works clearfix">
                    <img src="./img/img1.jpg" alt="Работа"/>
                    <img src="./img/img2.jpg" alt="Работа"/>
                    <img src="./img/img3.jpg" alt="Работа"/>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;