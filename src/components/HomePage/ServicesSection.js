import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

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
    <div className="body_wrap"><section className="service pt-120 "  id="services-sec">
  <div className="container">
    {
      service.map(t=>  <div className="sec-title sec-title--advisor text-center mb-60">
        <span className="subtitle ul_li"> {t.servicesubHeading}</span>
        <h2 className="title">{t.serviceHeading}</h2>
      </div>)
    }
   

    <div className="row mt-none-30">
      {
        items.map(i=> <div className="col-lg-4 col-md-6 mt-30">
          <div className="xb-service2">
            <div className="xb-item--inner">
              <div className="xb-item--bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 249" fill="none">
                  <mask fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M39 90.4996C68.5 94.9996 94 68.0403 92 37.1566C91.4479 28.6317 88.4196 20.8422 83.9561 14.0012C80.4167 8.57661 83.852 -0.000366211 90.3291 -0.000366211H390C401.046 -0.000366211 410 8.95394 410 19.9996V229C410 240.045 401.046 249 390 249H20C8.95431 249 0 240.045 0 229V91.7058C0 85.159 9.21894 81.3222 15.0681 84.263C21.6619 87.5783 29.5831 89.7659 39 90.4996Z" />
                  </mask>
                  <path fillRule="evenodd" clipRule="evenodd" d="M39 90.4996C68.5 94.9996 94 68.0403 92 37.1566C91.4479 28.6317 88.4196 20.8422 83.9561 14.0012C80.4167 8.57661 83.852 -0.000366211 90.3291 -0.000366211H390C401.046 -0.000366211 410 8.95394 410 19.9996V229C410 240.045 401.046 249 390 249H20C8.95431 249 0 240.045 0 229V91.7058C0 85.159 9.21894 81.3222 15.0681 84.263C21.6619 87.5783 29.5831 89.7659 39 90.4996Z" fill="#F4F4F8" />
                  <path d="M92 37.1566L92.9979 37.092L92.9979 37.092L92 37.1566ZM39 90.4996L39.1508 89.5111L39.1144 89.5055L39.0777 89.5027L39 90.4996ZM15.0681 84.263L14.6189 85.1564L15.0681 84.263ZM91.0021 37.2212C92.9685 67.5862 67.907 93.8976 39.1508 89.5111L38.8492 91.4882C69.093 96.1017 95.0315 68.4944 92.9979 37.092L91.0021 37.2212ZM83.1186 14.5476C87.5055 21.2713 90.463 28.8974 91.0021 37.2212L92.9979 37.092C92.4328 28.3661 89.3337 20.4132 84.7936 13.4548L83.1186 14.5476ZM90.3291 0.999634H390V-1.00037H90.3291V0.999634ZM390 0.999634C400.493 0.999634 409 9.50622 409 19.9996H411C411 8.40165 401.598 -1.00037 390 -1.00037V0.999634ZM409 19.9996V229H411V19.9996H409ZM409 229C409 239.493 400.493 248 390 248V250C401.598 250 411 240.598 411 229H409ZM390 248H20V250H390V248ZM20 248C9.5066 248 1 239.493 1 229H-1C-1 240.598 8.40203 250 20 250V248ZM1 229V91.7058H-1V229H1ZM39.0777 89.5027C29.7716 88.7775 21.9796 86.6187 15.5173 83.3696L14.6189 85.1564C21.3442 88.5378 29.3946 90.7542 38.9223 91.4966L39.0777 89.5027ZM1 91.7058C1 88.9548 2.93959 86.6442 5.76183 85.3335C8.58286 84.0233 12.023 83.8513 14.6189 85.1564L15.5173 83.3696C12.264 81.7339 8.17012 82.0098 4.91939 83.5196C1.66988 85.0287 -1 87.91 -1 91.7058H1ZM84.7936 13.4548C83.2369 11.0689 83.1886 7.93126 84.3036 5.36463C85.415 2.80615 87.5888 0.999634 90.3291 0.999634V-1.00037C86.5923 -1.00037 83.8099 1.4816 82.4692 4.56776C81.1321 7.64576 81.1359 11.5089 83.1186 14.5476L84.7936 13.4548Z" fill="#F4F4F8" mask="url(#path-1-inside-1_2087_1041)" />
                </svg>
              </div>
              <div className="xb-item--icon">
                <img src={i.serviceIcon} alt />
              </div>
              <h3 className="xb-item--title"><a href="/">{i.serviceTitle}</a></h3>
              <p className="xb-item--content">{i.serviceDetails}</p>
              <a className="xb-overlay" href="/" />
            </div>
          </div>
        </div>)
      }
      
      
     
    
      
     
    </div>
  </div>
</section></div>




    </>


  );
};

export default ServicesSection;
