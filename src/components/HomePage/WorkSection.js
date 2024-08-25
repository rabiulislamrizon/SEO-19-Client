import React, { useEffect, useState } from 'react';

const WorkSection = () => {

  const [stepwork, setWork] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/worksec`)
      .then((res) => res.json())
      .then((info) => setWork(info));
  }, []);


  return (


    <>
      <section className="space overflow-hidden position-relative space" style={{
        backgroundImage:
          "url(https://i.postimg.cc/26j1rhdM/process-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }}>
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Work Process</span>
            <h2 className="sec-title">How it Work Processing</h2>
          </div>
          <div className="step-wrap">
            <div className="process-line">
              <img src="assets/img/shape/process-line.png" alt />
            </div>
            <div className="process-card_wrapp">

              {
                stepwork.map(a => a.stepNumber === '01' && <div className="process-card">
                  <div className="process-card_icon">
                    <span className="number">{a.stepNumber}</span>
                  </div>
                  <div className="process-card_content">
                    <h2 className="box-title">{a.stepTitle}</h2>
                    <p className="process-card_text">{a.stepDetails}</p>
                  </div>
                  <div className="process-card_img">
                    <img src={a.stapIcon} alt="Process" />
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
                    <p className="process-card_text">{b.stepDetails}</p>
                  </div>
                  <div className="process-card_img">
                    <img src={b.stapIcon} alt="Process" />
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
                    <p className="process-card_text">{c.stepDetails}</p>
                  </div>
                  <div className="process-card_img">
                    <img src={c.stapIcon} alt="Process" />
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
                    <p className="process-card_text">{d.stepDetails}</p>
                  </div>
                  <div className="process-card_img">
                    <img src={d.stapIcon} alt="Process" />
                  </div>
                </div>)
              }




            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default WorkSection;