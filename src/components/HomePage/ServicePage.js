import React, { useEffect, useState } from 'react';

const ServicePage = () => {

    const [items, setItems] = useState([]);
    const [service, setService] = useState([]);
    const [about, setAbout] = useState([]);
    const [countersec, setCounter] = useState([]);
    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/counters`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);


    return (
        <>

            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="page-title">Service Page</h2>
                        </div>
                        <div className="col-md-6">
                            <ul className="breadcrumb-nav">
                                <li><a href="/">Home</a></li>
                                <li>Service Page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {
                countersec.map(e => <section className="counter-section section-gap-top-less">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter-item counter-box mt-30">
                                    <div className="icon">
                                        <i className="flaticon-rating" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.happyClientsNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.happyClientsText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="counter-item counter-box bg-color-2 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-web-design" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.projectCompleteNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.projectCompleteText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter-item counter-box bg-color-3 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-checked" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.yearofExperienceNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.yearofExperienceText}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="counter-item counter-box bg-color-4 mt-30">
                                    <div className="icon">
                                        <i className="flaticon-winner" />
                                    </div>
                                    <div className="counter-wrap">
                                        <span className="counter">{e.winingAwardNumber}</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <p className="title">{e.winingAwardText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )

            }

            <section className="service-section section-gap bg-color-secondary section-doted-bg">
                <div className="container">

                    {
                        service.map(e => <div className="section-heading text-center heading-white mb-60">
                            <h2 className="title">{e.serviceHeading}</h2>
                            <span className="tagline">{e.servicesubHeading}</span>
                        </div>
                        )
                    }

                    <div className="iconic-bordered-boxes white-version">
                        {
                            items.map(c => <div className="single-box">
                                <div className="icon">
                                    <img src={c.serviceIcon} alt="Code" />
                                </div>
                                <h4 className="title">
                                    <a href="/">{c.serviceTitle}</a>
                                </h4>
                                <p>
                                    {c.serviceDetails}
                                </p>
                            </div>
                            )
                        }






                    </div>
                </div>
            </section>

            {
                about.map(c => <section className="skill-section section-gap-bottom mt-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="skill-image text-center text-lg-left content-mb-md-50 wow fadeInLeft">
                                    <img src={c.aboutImg} alt="Image" className="animate-float-bob-y" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="skill-content pl-xl-3">
                                    <div className="section-heading mb-20">
                                        <h2 className="title">{c.aboutHeading}</h2>
                                        <span className="tagline">{c.aboutText}</span>
                                    </div>
                                    <p>
                                        {c.aboutDetails}
                                    </p>
                                    <div className="skill-progress-bars">
                                        <div className="progress-bar-item mt-35">
                                            <div className="progress-bar-top">
                                                <h5 className="title">{c.aboutPointone}</h5>
                                                <span className="counter">85%</span>
                                            </div>
                                            <div className="progress-line" data-percentage={85}>
                                                <div className="line" />
                                            </div>
                                        </div>
                                        <div className="progress-bar-item mt-35">
                                            <div className="progress-bar-top">
                                                <h5 className="title">{c.aboutPointwo}</h5>
                                                <span className="counter">65%</span>
                                            </div>
                                            <div className="progress-line" data-percentage={65}>
                                                <div className="line" />
                                            </div>
                                        </div>
                                        <div className="progress-bar-item mt-35">
                                            <div className="progress-bar-top">
                                                <h5 className="title">{c.aboutPointhree}</h5>
                                                <span className="counter">79%</span>
                                            </div>
                                            <div className="progress-line" data-percentage={79}>
                                                <div className="line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
            }

            {
                action.map(a =>
                    <section className="call-to-action style-two bg-color-secondary">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-7">
                                    <div className="cta-content">
                                        <h2 className="title">{a.heading}</h2>
                                        <p className="subtitle">{a.subHeading}</p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <p className="cta-note">Get Every Single Updates</p>
                                    <a href={a.buttonLink} className="xb-btn xb-btn--advisor bordered-white">{a.buttonText} <i className="far fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="cta-shape">
                            <img src="assets/img/shape/cta-shape.png" alt="Shape" />
                        </div>
                    </section>)
            }


        </>
    );
};

export default ServicePage;