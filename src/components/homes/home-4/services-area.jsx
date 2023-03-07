import Link from "next/link";
import React from "react";
import { services_data } from "../../../data";
import { HighlightTwo } from "../../../svg";

const services_items = services_data.filter((ser) => ser.home_4);

const ServicesArea = () => {
  return (
    <div className="tp-service-area pb-90 grey-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10">Our Services</h5>
              <h2 className="tp-title-sm">
                We Simplify the process of
                <span className="tp-section-highlight">
                  creating long Videos
                  <HighlightTwo />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services_items.map((service, i) => {
            const { delay, duration, id, img, title1, title2, border_effect } =
              service;
            return (
              <div
                key={id}
                className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration={duration}
                data-wow-delay={delay}
              >
                <div className={`tp-sv-border-effect ${border_effect}`}>
                  <div
                    className={`tp-service-item-four sv-color-${i + 1} mb-30`}
                  >
                    <div className="tp-service-item-four__img  mb-40">
                      <img src={img} alt="" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        <Link href={`/service-details/${id}`}>
                          <a>{title1} </a>
                        </Link>
                        <strong>{title2}</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
            data-wow-duration="1.1s"
            data-wow-delay="1.3s"
          >
            {/* <div className="sv-color-eight  mb-30"> */}
            {/* <div className="sv-color-eight__title text-center">
                <h3 className="tp-sv-sm-title"><a href="#">More Services</a></h3>
                <Link href={`/service-1`}>
                  <a><i className="fal fa-long-arrow-up"></i></a>
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ServicesArea;
// import Link from "next/link";
// import React from "react";
// import { services_data } from "../../../data";
// import SingleServiceTwo from "../../common/single-service-2";

// const services_contents = {
//   shape_img: "/assets/img/service/service-shape.png",
//   subtitle: "How it Works?",
//   title: "We Simplifies the process of creating long Videos",
//   btn_text: "View All Process",
// };

// const { shape_img, title, subtitle, btn_text } = services_contents;
// const services_items = services_data.filter((ser) => ser.home);

// const ServicesArea = () => {
//   return (
//     <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
//       <div className="tp-sv-shape-img z-index-1">
//         <img src={shape_img} alt="" />
//       </div>
//       <div className="circle-animation service">
//         <span className="tp-circle-1"></span>
//         <span className="tp-circle-2"></span>
//       </div>
//       <div className="circle-animation service-two">
//         <span className="tp-circle-skye"></span>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 col-md-12 col-12">
//             <div
//               className="tp-service-section-box mb-30 wow tpfadeUp"
//               data-wow-duration=".3s"
//               data-wow-delay=".6s"
//             >
//               <h5 className="tp-subtitle pb-10">{subtitle}</h5>
//               <h2 className="tp-title">{title}</h2>
//               <Link href="/service-1">
//                 <a className="tp-btn">{btn_text}</a>
//               </Link>
//             </div>
//           </div>
//           {services_items.map((s, i) => (
//             <SingleServiceTwo key={i} service={s} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesArea;
