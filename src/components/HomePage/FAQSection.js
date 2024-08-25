import React, { useEffect, useState } from 'react';

const FAQSection = () => {
    const [countersec, setCounter] = useState([]);
    const [items, setItems] = useState([]);
    const [faq, setFAQsection] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faq`)
            .then((res) => res.json())
            .then((info) => setFAQsection(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/faq-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/counters`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, []);

    return (
        <div>
           

            <section className="faq-section ptb-100 bg-thin">
                <div className="container">
                    {faq.map((f) => (
                        <div className="section-title title-light" key={f.faqHeading}>
                            <h2>{f.faqHeading}</h2>
                            <p>{f.faqText}</p>
                        </div>
                    ))}

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="panel-group" id="accordion">
                                {items.map((e, index) => (
                                    <div className="panel" key={index}>
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a
                                                    data-bs-toggle="collapse"
                                                    href={`#collapse${index}`}
                                                >
                                                    {e.accodingTitle}
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id={`collapse${index}`}
                                            className="collapse"
                                            data-bs-parent="#accordion"
                                        >
                                            <div className="panel-body">
                                                <p>{e.accodingText}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {countersec.map((e, index) => (
                            <div className="col-lg-6 col-sm-12" key={index}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-server" />
                                                <h2>{e.happyClientsNumber}+</h2>
                                                <h3>{e.happyClientsText}</h3>
                                            </div>
                                            <div className="hover-overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-global2" />
                                                <h2>{e.projectCompleteNumber}+</h2>
                                                <h3>{e.projectCompleteText}</h3>
                                            </div>
                                            <div className="hover-overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-star" />
                                                <h2>{e.yearofExperienceNumber}+</h2>
                                                <h3>{e.yearofExperienceText}</h3>
                                            </div>
                                            <div className="hover-overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy envy-code2" />
                                                <h2>{e.winingAwardNumber}+</h2>
                                                <h3>{e.winingAwardText}</h3>
                                            </div>
                                            <div className="hover-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQSection;
