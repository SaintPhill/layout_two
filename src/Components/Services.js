import React from 'react'

const Services = (props) => {
    return (
        <section id='services'>
            <div className="container">
                <div className="title">
                    <h2>
                        Services
                    </h2>
                    <p>
                        Proin iaculis purus consequat sem cure.
                    </p>
                </div>
                <div className="services clearfix">
                    <div className="services__item">
                        <img src="./img/icon1.png" alt="Услуга"/>
                        <h3>E-Commerce</h3>
                        <p>
                            Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.
                        </p>
                    </div>
                    <div className="services__item">
                        <img src="./img/icon2.png" alt="Услуга"/>
                        <h3>Responsive Web</h3>
                        <p>
                            Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.
                        </p>
                    </div>
                    <div className="services__item">
                        <img src="./img/icon3.png" alt="Услуга"/>
                        <h3>Web Security</h3>
                        <p>
                            Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;