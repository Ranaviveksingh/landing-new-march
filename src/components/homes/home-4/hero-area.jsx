import Link from "next/link";
import React, { useEffect, useRef } from "react";
import useModal from "../../../hooks/use-modal";
import { HighlightTwo } from "../../../svg";
import ReactPlayer from "react-player";
import VideoModal from "../../common/modals/modal-video";

const hero_contents = {
  shapes: [{ img: "hero-shape-4" }, { num: "-two", img: "hero-shape-4.1" }],
  title: (
    <>
      Unleash the power of{" "}
      <span className="tp-highlight">
        {" "}
        <HighlightTwo /> <i> AI</i>
      </span>{" "}
      to create Videos!
    </>
  ),
  // text: 'Transform boring conference recordings into sizzling-hot, professionally edited videos with the magic of AI. Say goodbye  to yawn-inducing content',
  text: (
    <>
      Transform boring conference recordings into sizzling-hot, professionally
      edited videos with the magic of AI. Say goodbye to yawn-inducing content
      and hello to dynamic, attention-grabbing videos! <br />
    </>
  ),
  btn_text: "Try Our Studio Now",
  video_title: "Start Creating Your Course",
  video_id: "LJbkLdtEW00",
  social_links: [
    {
      id: 1,
      icon: "fab fa-facebook-f social-icon-1",
      title: "Facebook",
      link: "http://facebook.com",
    },
    {
      id: 3,
      icon: "fab fa-youtube social-icon-3",
      title: "Youtube",
      link: "https://www.youtube.com/",
    },
    {
      id: 2,
      icon: "fab fa-twitter social-icon-2",
      title: "Twitter",
      link: "http://twitter.com",
    },
  ],
  hero_img: "/assets/img/hero/hero-5.png",
};

const {
  btn_text,
  hero_img,
  shapes,
  social_links,
  text,
  title,
  video_id,
  video_title,
} = hero_contents;

const HeroArea = () => {
  const videoRef = useRef(null);
  const { isVideoOpen, setIsVideoOpen } = useModal();
  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  const playerStyle = {
    position: "relative",
    marginTop: "-100%",
    width: "136%",
  };
  const heroStyle = {
    position: "relative",
    marginTop: "41%",
    width: "100%",
    // height: '120% !important',
    // top: '25px',
    left: 0,
    // height: '500px !important',
  };

  return (
    <React.Fragment>
      <div className="tp-hero-area-two grey-bg  pt-130 p-relative fix">
        {/* <div className="tp-hero-yellow-shape d-none d-lg-block"></div> */}
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`ce-hero-shape${s.num ? s.num : ""} d-none d-lg-block`}
          >
            {/* <img src={`/assets/img/hero/${s.img}.png`} alt="" /> */}
          </div>
        ))}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-120 pb-140">
                <h3
                  className="tp-hero-bd-title text-black wow tpfadeUp"
                  data-wow-duration=".3s"
                  data-wow-delay=".6s"
                >
                  {title}
                </h3>
                <p
                  className="wow tpfadeUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".7s"
                >
                  {text}
                </p>
                <div
                  className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <Link href="/about">
                    <a className="tp-btn mr-55">{btn_text}</a>
                  </Link>
                  <div className="tp-hero-paly-button-four">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                    >
                      <i className="far fa-play"></i> <span>{video_title}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tp-hero-social pb-90 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <div className="tp-hero-social bp-hero-social">
                  {/* {social_links.map((l, i) => ( */}
                  {/* <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                      <i className={l.icon}></i><span>{l.title}</span>
                    </a> */}
                  {/* ))} */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              <div className="tp-hero-right-img-four pt-90">
                <div style={playerStyle}>
                  {/* <img  className="hello" src="./assets/img/about/about-6.1.png"/> */}
                  <video
                    style={heroStyle}
                    height="1015px !important"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src="./assets/videos/WhatsApp Video 2023-02-27 at 17.54.08.mp4"
                      type="video/mp4"
                    />
                    {/* fallback content */}
                  </video>
                </div>
                {/* <img src={hero_img} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;
