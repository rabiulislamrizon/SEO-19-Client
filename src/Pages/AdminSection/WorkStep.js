import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const WorkStep = () => {

    const [stepwork, setWork] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/worksec`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, []);


    const handleWorkSection = (event) => {
        event.preventDefault();
        const stepNumber = event.target.stepNumber.value;
        const stepTitle = event.target.stepTitle.value;
        const stepDetails = event.target.stepDetails.value;
        const stapIcon = event.target.stapIcon.value;




        const workSection = {
            stepNumber,
            stepTitle,
            stepDetails,
            stapIcon,


        };

        const url = `http://localhost:5000/add-worksec`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Step is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h3>Add Work Section</h3>



                                <form class="contact-form " onSubmit={handleWorkSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepNumber" placeholder="Step Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepTitle" placeholder="Step Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepDetails" placeholder="Step Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stapIcon" placeholder=" Icon URL" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Add Work Step</button>
                                        </div>
                                    </div>

                                </form>




                            </div>


                        </div>
                        <h3 className='mt-5'> Your Work List</h3>

                        <div className="process-card_wrapp mb-5 mt-5">
                       

                            {
                                stepwork.map(a => a.stepNumber === '01' && <div className="process-card">
                                    <div className="process-card_icon">
                                        <span className="number">{a.stepNumber}</span>
                                    </div>
                                    <div className="process-card_content">
                                        <h2 className="box-title">{a.stepTitle}</h2>
                                        <Link to={`/edit-work/${a._id}`}><h3 className="box-title" class="xb-btn xb-btn--advisor">Edit Now</h3></Link>
                                        <p className="process-card_text">{a.stepDetails}</p>
                                    </div>

                                </div>
                                )
                            }


                            {
                                stepwork.map(b => b.stepNumber === '02' && <div className="process-card">
                                    <div className="process-card_icon">
                                        <span className="number">{b.stepNumber}</span>
                                    </div>
                                    <div className="process-card_content">
                                        <h2 className="box-title">{b.stepTitle}</h2>
                                        <Link to={`/edit-work/${b._id}`}><h3 className="box-title" class="xb-btn xb-btn--advisor">Edit Now</h3></Link>
                                        <p className="process-card_text">{b.stepDetails}</p>
                                    </div>

                                </div>)
                            }



                            {
                                stepwork.map(c => c.stepNumber === '03' && <div className="process-card">
                                    <div className="process-card_icon">
                                        <span className="number">{c.stepNumber}</span>
                                    </div>
                                    <div className="process-card_content">
                                        <h2 className="box-title">{c.stepTitle}</h2>
                                        <Link to={`/edit-work/${c._id}`}><h3 className="box-title" class="xb-btn xb-btn--advisor">Edit Now</h3></Link>
                                        <p className="process-card_text">{c.stepDetails}</p>
                                    </div>

                                </div>)
                            }

                            {
                                stepwork.map(d => d.stepNumber === '04' && <div className="process-card">
                                    <div className="process-card_icon">
                                        <span className="number">{d.stepNumber}</span>
                                    </div>
                                    <div className="process-card_content">
                                        <h2 className="box-title">{d.stepTitle}</h2>
                                        <Link to={`/edit-work/${d._id}`}><h3 className="box-title" class="xb-btn xb-btn--advisor">Edit Now</h3></Link>
                                        <p className="process-card_text">{d.stepDetails}</p>
                                    </div>

                                </div>)
                            }




                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default WorkStep;