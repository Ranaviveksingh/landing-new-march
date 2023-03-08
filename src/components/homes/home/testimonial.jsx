import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-1.jpeg',
    name: 'Sanjeev Kumar',
    title: 'SDE OLA',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Bigbuddy has been a game-changer for me! As someone who records online sessions regularly, I was always intimidated by the editing process. But with Bigbuddy, I can now easily convert my raw recordings into professionally edited videos without any hassle. The greenscreen feature and animation editing options are fantastic and have made my videos look incredibly polished.'
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-2.jpg',
    name: 'Dilip Kumar',
    title: 'SDE at Alivecor',
    ratings: [1, 2, 3, 4],
    desc: 'I cannot recommend Bigbuddy enough! The AI tool has saved me so much time and effort by automatically editing my online session recordings into high-quality videos. The virtual greenscreen feature is a game-changer, and the animation editing options are intuitive and easy to use. I am incredibly happy with the results, and my audience has noticed a significant improvement in the quality of my videos.'
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-3.png',
    name: 'Dhawan Solanki',
    title: 'Member of CIIE developers wing',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Bigbuddy is a lifesaver! As someone who records and uploads online sessions regularly, I was always looking for a way to simplify the editing process. With Bigbuddy, I can now easily convert my raw recordings into professionally edited videos with just a few clicks. The AI tools greenscreen feature is incredibly helpful, and the animation editing options have taken my videos to the next level.'
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-1.png',
    name: 'Simran',
    title: 'Coach at Schoolhouse World',
    ratings: [1, 2, 3, 4, 5],
    desc: 'I am blown away by Bigbuddys capabilities! As someone who is not a professional editor, I was hesitant to start creating videos. But Bigbuddy has made the process incredibly easy and intuitive. The AI tools virtual greenscreen feature is seamless, and the animation editing options are incredibly versatile. I would recommend Bigbuddy to anyone looking to create professional-looking videos without any prior editing experience.'
  },
]

const testimonial_2_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-4.jpg',
    name: 'Ayushi Singh ',
    title: 'Founder of Hattyhood ',
    ratings: [1, 2, 3, 4, 5],
    desc: "I've been using Bigbuddy for a few months now, and I can confidently say that it's one of the best investments I've made for my business. The AI tool's ability to automatically edit my online session recordings into polished videos has saved me countless hours of work. The virtual greenscreen feature and animation editing options are top-notch, and the end results always exceed my expectations. I highly recommend Bigbuddy to anyone looking to take their video content to the next level."
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-5.jpg',
    name: 'Shravani',
    title: 'Final year student at MU',
    ratings: [1, 2, 3, 4],
    desc: "I was skeptical about using an AI tool to edit my online session recordings, but Bigbuddy exceeded my expectations. The tool is incredibly user-friendly, and the virtual greenscreen feature and animation editing options are fantastic. I was able to create a high-quality video in a matter of minutes, and the end result looked like it was edited by a professional. I highly recommend Bigbuddy to anyone looking to save time and create great-looking videos."
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-6.jpg',
    name: 'Anand Kumar',
    title: 'Principal Program Manager at Tricon Infotech ',
    ratings: [1, 2, 3, 4, 5],
    desc: "Bigbuddy has been a game-changer for my YouTube channel. As a solo creator, I don't have the time or expertise to edit my videos like a professional. But with Bigbuddy, I can easily convert my raw recordings into polished, visually appealing videos. The virtual greenscreen feature and animation editing options have taken my videos to the next level, and I've received great feedback from my viewers. I highly recommend Bigbuddy to anyone looking to create great-looking videos without the hassle"
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-3.jpg',
    name: 'Ravindra Vaid',
    title: 'SDE Simpl',
    ratings: [1, 2, 3, 4, 5],
    desc: "I've been using Bigbuddy to edit my online session recordings for my business, and it's been a huge time-saver. The tool is incredibly intuitive, and the virtual greenscreen feature and animation editing options are fantastic. I've been able to create professional-looking videos without any prior editing experience, and the end results have been fantastic. I highly recommend Bigbuddy to anyone looking to create high-quality videos quickly and easily."
  },
]

const Testimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  const [sliderLoopTwo, setSliderLoopTwo] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  React.useEffect(() => setSliderLoopTwo(true), []);
  return (
    <React.Fragment>
      <div className="tp-testimonial-area white-bg pt-130 pb-130 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonial</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}
            <Swiper
              loop={sliderLoop}
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20"><img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Swiper
              loop={sliderLoopTwo}
              slidesPerView={1}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active-2"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_2_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20">
                          <img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;