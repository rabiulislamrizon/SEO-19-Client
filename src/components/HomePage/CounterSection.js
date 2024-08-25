import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (


    <>

    {
      countersec.map(c=> <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-success" />
                <h3><span className="counter">{c.yearofExperienceNumber}</span></h3>
                <p>{c.yearofExperienceText}</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-launch" />
                <h3><span className="counter">{c.projectCompleteNumber}</span>+</h3>
                <p>{c.projectCompleteText}</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-customer" />
                <h3><span className="counter">{c.happyClientsNumber}</span>+</h3>
                <p>{c.happyClientsText}</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-team-building" />
                <h3><span className="counter">{c.teamNumber}</span>+</h3>
                <p>{c.teamText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }

      








    </>
  );
};

export default CounterSection;