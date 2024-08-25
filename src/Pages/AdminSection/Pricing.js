import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Pricing = () => {
    const [pricing, setPricing] = useState([]);




    useEffect(() => {
        fetch(`http://localhost:5000/pricings`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);


    const handlePricing = (event) => {
        event.preventDefault();
        const packageName = event.target.packageName.value;
        const packagePrice = event.target.packagePrice.value;
        const packageButtonText = event.target.packageButtonText.value;
        const packagePointOne = event.target.packagePointOne.value;
        const packagePointTwo = event.target.packagePointTwo.value;
        const packagePointThree = event.target.packagePointThree.value;
        const packagePointFour = event.target.packagePointFour.value;
        const packagePointFive = event.target.packagePointFive.value;
        const packagePointSix = event.target.packagePointSix.value;
        const packagePointSeven = event.target.packagePointSeven.value;
        const packagePointEight = event.target.packagePointEight.value;
        const packagePointNine = event.target.packagePointNine.value;
        const packagePointTen = event.target.packagePointTen.value;




        const pricingSection = {
            packageName,
            packagePrice,
            packageButtonText,
            packagePointOne,
            packagePointTwo,
            packagePointThree,
            packagePointFour,
            packagePointFive,
            packagePointSix,
            packagePointSeven,
            packagePointEight,
            packagePointNine,
            packagePointTen




        };

        const url = `http://localhost:5000/add-pricing`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(pricingSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Pricing is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area  pb-90 fix mt-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row d-flex justify-content-center">

                            <div class="col-lg-8 col-md-12">
                                <h2>Edit Your Pricing Package</h2>

                                {/* <form class="contact-form " onSubmit={handlePricing}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageName" placeholder="Package Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePrice" placeholder="Package Price" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageButtonText" placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointOne" placeholder="Ponint One" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTwo" placeholder="Point Two" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointThree" placeholder="Point Three" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFour" placeholder="Point Four" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFive" placeholder="Point Five" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSix" placeholder="Point Six" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSeven" placeholder="Point Seven" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointEight" placeholder="Point Eight" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointNine" placeholder="Point Nine" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTen" placeholder="Point Ten" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-delay=".8s"> Add Package</button>
                                        </div>
                                    </div>

                                </form> */}

                            </div>


                        </div>


                    </div>

                    
                </section>
            </div>

            

            <div class="demo">
                <div class="container mt-5 mb-5 ">
                    <div class="row">
                    {/* <h2 className='mb-5'>Edit Your Pricing Plan</h2> */}
                        {
                            pricing.map(pri => 
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            
                                            <h3 class="title">{pri.packageName}</h3>

                                        </div>
                                        
                                        <div class="price-value">
                                            ${pri.packagePrice}<span></span>
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/package-edit/${pri._id}`} className='xb-btn xb-btn--advisor'>Edit Pricing</Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        

                        




                    </div>
                </div>
            </div>

        </>
    );
};



export default Pricing;