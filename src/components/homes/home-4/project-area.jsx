import Link from 'next/link';
import React, { useState } from 'react';
import { portfolio_data } from '../../../data';

const project_items = portfolio_data.filter(item => item.home_4);
const categories = [...new Set(project_items.map(item => item.category))]

const ProjectArea = () => {
  const [category, setCategory] = useState('Website');
  const categoryItems = project_items.filter(item => item.category === category);
  const [items, setItems] = useState(categoryItems);

  const handleCategoryItems = (category) => {
    setCategory(category);
    const filtering_category_items = project_items.filter(item => item.category === category);
    setItems(filtering_category_items)
  }

  const project_contents = {
    subtitle: 'Projects',
    title: `Collax complete ${' '}`,
    highlight_text: 'project'
  }
  const { title, subtitle, highlight_text } = project_contents;
  return (
    <>
      <div className="tp-project-area tp-cc-project grey-bg pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-project-section-box text-center pb-25">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm pb-30">{title}
                
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="160" height="11" viewBox="0 0 160 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L160 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-70">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button tp-radius-button masonary-menu">
                {categories.map((c, i) => (
                  <button key={i} className={c === category ? "active" : ''} onClick={() => handleCategoryItems(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {items.map((item) => {
              const { id, img, title, big, subtitle } = item;
              return <div key={id} className={`${big ? 'col-xl-8 col-lg-8 col-md-12' : 'col-xl-4 col-lg-4 col-md-6'}`}>
                <div className="tp-project-item-four mb-30">
                  <div className="tp-project-item-four__img fix">
                    <a href="#"><img className="w-100" src={img} alt="" /></a>
                  </div>
                  <div className="tp-project-item-four__bg">
                    <div className="tp-project-item-four__bg-info">
                      <h3 className="tp-project-title">
                        <Link href={`/portfolio-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <h5 className="tp-project-subtitle">{subtitle}</h5>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectArea;
// import Link from "next/link";
// import React,{ useEffect, useRef } from "react";
// import { portfolio_data } from "../../../data";
// import ReactPlayer from "react-player";

// const ProjectArea = () => {
//   const [category, setCategory] = React.useState("Website Design");
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     video.play();
//   }, []);
//   const items = portfolio_data.filter((p) => p.home);
//   const [portfolioItems, setPortfolioItems] = React.useState(
//     items.filter((i) => i.category === category)
//   );
//   const categories = [...new Set(items.map((p) => p.category))];

//   const handleCategory = (c) => {

//     setCategory(c);
//     const new_items = items.filter((i) => i.category === c);
//     setPortfolioItems(new_items);
//   };

//   const bigItems = portfolioItems.filter((i) => i.big);
//   const sm_items = portfolioItems.filter((i) => i.sm);

//   return (
//     <div className="tp-project-area p-relative pt-130 pb-100">
//       <div className="tp-project-shape">
//         <img src="assets/img/project/project-shape.png" alt="" />
//       </div>
//       <div className="container">
//         <div className="row align-items-center mb-15">
//           <div className="col-xl-5 col-lg-12 col-md-12">
//             <div className="tp-project-section-box">
//               <h5 className="tp-subtitle">Our Project</h5>
//               <h2 className="tp-title">Creative work. </h2>
//             </div>
//           </div>
//           <div className="col-xl-7 col-lg-12 col-md-12">
//             <div className="tp-service-tab-button">
//               <nav>
//                 <div
//                   className="nav tp-service-tab justify-content-xl-end justify-content-lg-center"
//                   id="nav-tab"
//                   role="tablist"
//                 >
//                   {categories.map((c, i) => (
//                     <button
//                       onClick={() => handleCategory(c)}
//                       key={i}
//                       className={`nav-links ${
//                         c === category ? "active" : ""
//                       } mb-10`}
//                       type="button"
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//         {/* const hero1Style = {
//         //  position: 'relative',
//           // marginTop:'50%',
//     width: '100%',
//     height: '120% !important',
//     // height : '700px !important ',
   
  
//     top: '25px',
//     left: 0,
  
 
//     height: '500px !important',
//   // padding-bottom: 56.25%; /* 16:9 aspect ratio */
//     //  position: relative,
//   //   \height: '500px',
//     // paddingTop: '56.25%', /* 16:9 aspect ratio */
//   }
//   <div>
//     hello world
//  <video  ref={videoRef} autoPlay muted loop/>
//               <source src="./assets/videos/WhatsApp Video 2023-02-27 at 17.54.08.mp4" type="video/mp4"
      
//                      />
//                      </div>
//         <div className="project-tab-main">
//           <div className="row gx-1">
//             {bigItems.map((item) => (
//               <div key={item.id} className="col-xl-6 col-lg-12">
//                 <div className="tp-project-box mb-20">
//                   <div className="tp-project-img fix mb-45">
                  
                  
//                   <video  ref={videoRef} autoPlay muted loop/>
//               <source src="./assets/videos/WhatsApp Video 2023-02-27 at 17.54.08.mp4" type="video/mp4"
      
//                      />
                   
//                   </div>
//                   <div className="tp-project-content ml-20">
//                     <h2 className="pro-lg-title">
//                       <Link href={`/portfolio-details/${item.id}`}>
//                         <a>Our websites</a>
//                       </Link>
//                     </h2>
//                     <p>
//                       U can see out website designing videos here 
//                     </p>
//                     <Link href={`/portfolio-details/${item.id}`}>
//                       <a className="tp-btn-sm">
//                         View The videos<i className="far fa-arrow-right"></i>
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="col-xl-6 col-lg-12">
//               <div className="row">
//                 {sm_items.map((item) => (
//                   <div key={item.id} className=" col-xl-12 col-lg-12">
//                     <div className="tp-project-box-sm d-flex align-items-center mb-20">
//                       <div className="tp-project-sm-img fix ml-25 mr-35">
//                         <img src={item.img} alt="" />
//                       </div>
//                       <div className="tp-project-sm-content">
//                         <h3 className="pro-sm-title">
//                           <Link href={`/portfolio-details/${item.id}`}>
//                             <a>{item.title}</a>
//                           </Link>
//                         </h3>
//                         <p>{item.sm_text}</p>
//                         <Link href={`/portfolio-details/${item.id}`}>
//                           <a className="tp-btn-white-sm">
//                             Watch the videos 
//                             <i className="far fa-arrow-right"></i>
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectArea;

