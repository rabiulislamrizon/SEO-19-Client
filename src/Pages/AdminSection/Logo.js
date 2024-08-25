import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Logo = () => {


    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/logo`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `http://localhost:5000/add-logo`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mt-5 vh-50 mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update Your Logo</h2>

                            {
                                logo.length === 1 &&
                                <>
                                    {
                                        logo.map(c =>
                                            logo.map(c =>
                                                <Link className='xb-btn xb-btn--advisor' to={`/edit-logo/${c._id}`}> Please Edit Your Logo</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                logo.length === 0 &&

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="logo"  placeholder="Submit Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="xb-btn xb-btn--advisor" data-animation="fadeInRight" data-delay=".8s">Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            }

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default Logo;