import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
// import "../../../../public/assets/css/heroareastyle.css"
// import "./herostyle.css"

const hero_contents = {
  title: "Unleash the power of AI to create Videos!",
  text: (
    <>
      Transform boring conference recordings into sizzling-hot, professionally
      edited videos with the magic of AI. Say goodbye to yawn-inducing content
      and hello to dynamic, attention-grabbing videos! <br />
    </>
  ),
  btn_text: "Try Our Studio Now",
  btn_text_2: "Start Creating Your Course",
  // social_links: [
  //   {
  //     id: 1,
  //     icon: "fab fa-facebook-f social-icon-1",
  //     title: "Facebook",
  //     link: "http://facebook.com",
  //   },
  //   {
  //     id: 3,
  //     icon: "fab fa-youtube social-icon-3",
  //     title: "Youtube",
  //     link: "https://www.youtube.com/",
  //   },
  //   {
  //     id: 2,
  //     icon: "fab fa-twitter social-icon-2",
  //     title: "Twitter",
  //     link: "http://twitter.com",
  //   },
  //   {
  //     id: 4,
  //     icon: "fab fa-behance social-icon-4",
  //     title: "Behance",
  //     link: "https://www.behance.net/",
  //   },
  // ],
  hero_img: "",
  

};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const HeroArea = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);
  const playerStyle = {
    position: 'relative',
    marginTop:'-100%',
    width: '100%',
    
    
  //   \height: '500px',
    // paddingTop: '56.25%', /* 16:9 aspect ratio */
  };
  const heroStyle = {
    position: 'relative',
    marginTop:'50%',
    width: '100%',
    height: '120% !important',
    // height : '700px !important ',
   
  
    top: '25px',
    left: 0,
  
 
    height: '500px !important',
  // padding-bottom: 56.25%; /* 16:9 aspect ratio */
    //  position: relative,
  //   \height: '500px',
    // paddingTop: '56.25%', /* 16:9 aspect ratio */
  };

  // const reactPlayerConfig = {
  //   controls: true,
  //   width: '100%',
  //   height: '500px',
  // };

  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        {/* <div className="shape-circle-blue"></div> */}
        <div className="shape-one">
          <img src="/assets/img/hero/shape-1.png" alt="" />
        </div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    {title}
                  </h2>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {text}
                  </p>
                  <div
                    className="tp-hero-button mb-140 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="/portfolio">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link href="/about-me">
                      <a className="tp-btn-grey">
                        {btn_text_2}
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="tp-hero-social pb-30 wow tpfadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay="1.2s"
                  >
                    {/* <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a
                          key={i}
                          className={`social-icon-${l.id}`}
                          href={l.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={l.icon}></i>
                          <span>{l.title}</span>
                        </a>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                {/* <img src={hero_img} alt="" /> */}
                <div style={playerStyle}>
                {/* <img  className="hello" src="./assets/img/about/about-6.1.png"/> */}
                <video style={heroStyle} height = "1000px !important" ref={videoRef} autoPlay muted loop>
      <source src="./assets/videos/WhatsApp Video 2023-02-27 at 17.54.08.mp4" type="video/mp4"
      
      />
      {/* fallback content */}

    </video>
        
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
