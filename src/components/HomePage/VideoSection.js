import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [video, setVideo] = useState([]);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/videos`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/videos-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);

  return (



    <>

      {
        video.map(v => <section className="intro_video_section section_space_lg bg_light_2 overflow-hidden decoration_wrap">

          <div className="container position-relative">

            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">
                {v.headingVideo}
              </h2>
            </div>
            <div className="intro_video">
              <div className="video_wrap tilt">
                <img src={v.videoImage} alt="Collab – Online Learning Platform" />
                <a className="video_play_btn popup_video" href={v.videoLink}>
                  <span className="icon"><i className="fas fa-play" /></span>
                </a>
              </div>
            </div>



            <div className="row">

              {
                items.map(i => <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon">

                        <img src={i.videoItemIcon} alt="Icon" />

                      </div>
                      <h3 className="item_title mb-0">
                        <span className="d-block">{i.videoItemTitle}</span>

                      </h3>
                    </div>
                    <p className="mb-0">
                      {i.videoItemDetails}
                    </p>
                  </div>
                </div>)
              }




            </div>
            <div className="deco_item shape_img_1" data-parallax="{&quot;y&quot; : 130, &quot;smoothness&quot;: 6}">
              <img src="assets/images/shape/shape_img_7.png" alt="Collab – Online Learning Platform" />
            </div>
            <div className="deco_item shape_img_2" data-parallax="{&quot;y&quot; : -130, &quot;smoothness&quot;: 6}">
              <img src="assets/images/shape/shape_img_7.png" alt="Collab – Online Learning Platform" />
            </div>
          </div>
          <div className="deco_item shape_img_3" data-parallax="{&quot;y&quot; : -130, &quot;smoothness&quot;: 6}">
            <img src="assets/images/shape/shape_img_7.png" alt="Collab – Online Learning Platform" />
          </div>
        </section>

        )
      }




    </>
  );
};

export default VideoSection;
