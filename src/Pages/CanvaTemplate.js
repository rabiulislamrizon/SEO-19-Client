import React, { useEffect, useState } from 'react';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CanvaTemplate = () => {
    
    const [canvas, setCanvas] = useState([]);



    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Shah-Limon/canvaProjectImage/main/canva7200.json`)
            .then((res) => res.json())
            .then((info) => setCanvas(info));
    }, []);

    function shuffleArray(array) {
        // Function to shuffle an array using Fisher-Yates algorithm
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      // Assuming canvas is an array of data
      const shuffledCanvas = shuffleArray(canvas);


    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">
                        <HeaderBottom></HeaderBottom>

                    </div>
                    <div class="row">
                        <h2>Canva Templates</h2> 

                        {
                            shuffledCanvas.slice(0, 20).map(canva =>   
                            <div className="col-lg-4 col-md-6">
                            <div className="product mb-40 bg-light p-2">
                                <div className="product__img">
                                    <a href="/"><img src={canva.image} alt='Canva' /></a>
                                    <div className="product-action text-center">
                                        <a className='xb-btn xb-btn--advisor m-3' href={canva.facebook} target='_blink'>For Facebook</a>
                                        <a className='m-3 xb-btn xb-btn--advisor' href={canva.instagram} target='_blink'>For Instagram</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div> )
                        }

                      





                    </div>
                </div>
            </section>
        </div>
    );
};

export default CanvaTemplate;
