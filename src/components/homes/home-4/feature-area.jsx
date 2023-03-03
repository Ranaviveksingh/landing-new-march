// import React from 'react';
// import { FeatureOne, FeatureThree, FeatureTwo } from '../../../svg';

// const feature_contents = {
//   feature_img:'/assets/img/feature/fea-1.png',
//   subtitle:'Why Choose us',
//   title:'Specialist in aviding clients of financial',
//   highlight_text:'challenges',
//   feature_lists:[
//     {
//       id:1,
//       icon:<FeatureOne/>,
//       title:'Fast working process',
//       subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
//     },
//     {
//       id:2,
//       icon:<FeatureTwo/>,
//       title:'Dedicated team',
//       subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
//     },
//     {
//       id:3,
//       icon:<FeatureThree/>,
//       title:'24/7 hours support',
//       subtitle:<>At collax we specialize in designing, building, <br/> shipping and scaling beautiful.</>,
//     },
//   ]
// }

// const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

// const FeatureArea = () => {
//   return (
//     <div className="tp-feature-arae pt-130 pb-100 p-relative">
//       <div className="ce-chose-shape d-none d-lg-block">
//         <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
//             <div className="tp-fea-img">
//               <img src={feature_img} alt=""/>
//             </div>
//           </div>
//           <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
//             <div className="tp-fea-right-side">
//               <div className="tp-fea-section-box">
//                 <h5 className="tp-subtitle pb-10">{subtitle}</h5>
//                 <h2 className="tp-title-sm pb-40">{title}
//                   <span className="tp-section-highlight">
//                     {highlight_text}
//                     <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
//                       xmlns="http://www.w3.org/2000/svg">
//                       <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
//                     </svg>
//                   </span>
//                 </h2>
//               </div>
//               <div className="fea-wrapper-main">
//                 {feature_lists.map((list,i) => {
//                   const {icon,id,subtitle,title} = list;
//                   return <div key={id} className="tp-feature-list d-flex">
//                   <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
//                     {icon}
//                   </div>
//                   <div className="tp-feature-list__content">
//                     <h4>{title}</h4>
//                     <p>{subtitle}</p>
//                   </div>
//                 </div>
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureArea;
import React from "react";
import useModal from "../../../hooks/use-modal";
import VideoModal from "../../common/modals/modal-video";
import Plyr from "plyr";

const creative_contents = {
  shape_1: "/assets/img/hero/shape-2.png",
  creative_shapes: [
    { img: "/assets/img/creative/creative-hand.png" },
    { img_2: "-2", img: "/assets/img/creative/creative-circle-img.png" },
  ],
  title: (
    <>
      Bigbuddy AI can transform{" "}
      <b>Your virtual sessions into an well edited videos</b> in seconds with
      the help of AI.
    </>
  ),
  video_id: "PO_fBTkoznc",
  video_title: "Play, Checkout Some Autoedited Videos",
  creative_box: [
    {
      id: 1,
      duration: ".3s",
      delay: ".6s",
      icon: "flaticon-satisfaction",
      box_title: "Effort",
      box_text: "Let our AI take the effort of editing",
    },
    {
      id: 2,
      duration: ".5s",
      delay: ".8s",
      color: "tp-creative-blue",
      icon: "flaticon-clipboard",
      box_title: "Time",
      box_text: "Get Edited Videos in seconds",
    },
    {
      id: 3,
      duration: ".7s",
      delay: "1s",
      color: "tp-creative-pink",
      icon: "flaticon-setting",
      box_title: "Publish",
      box_text: "Your videos can be Published/Download ",
    },
  ],
};

const { shape_1, creative_shapes, title, video_id, video_title, creative_box } =
  creative_contents;

const CreativeArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="p-relative">
        <div className="shape-two z-index-1">
          <img src={shape_1} alt="" />
        </div>
        <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
          <div className="circle-animation testimonial">
            <span className="tp-circle-1"></span>
            <span className="tp-circle-2"></span>
          </div>
          {creative_shapes.map((s, i) => (
            <div
              key={i}
              className={`creative-shape-img${s.img_2 ? s.img_2 : ""}`}
            >
              <img src={s.img} alt="" />
            </div>
          ))}
          <div className="container creative-z-index ">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-creative-box text-center">
                  <div className="tp-creative-content mb-110">
                    <h4 className="tp-creative-title">{title}</h4>
                  </div>
                  <div className="tp-play-button mb-150">
                    <button
                      className="popup-video"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <i className="fal fa-play"></i>
                    </button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative-box pl-40 pr-40">
              <div className="row gx-5">
                {creative_box.map((b) => (
                  <div
                    key={b.id}
                    className="col-lg-4 col-md-12 col-xs-12 mb-30"
                  >
                    <div
                      className={`tp-creative-item ${b?.color} wow tpfadeUp`}
                      data-wow-duration={b.duration}
                      data-wow-delay={b.delay}
                    >
                      <div className="tp-creative-yellow d-flex align-items-center">
                        <div className="tp-creative-icon mr-35">
                          <i className={b.icon}></i>
                        </div>
                        <div className="counter-text">
                          <span>{b.box_title}</span>
                          <p className="m-0">{b.box_text}</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                ))}
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
    </>
  );
};

export default CreativeArea;

