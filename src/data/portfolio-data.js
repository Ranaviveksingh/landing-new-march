// import VideoModal from "src/components/common/modals/modal-video.jsx¸";
import Plyr from "plyr";
// import useModal from "../../../hooks/use-modal";


const portfolio_data = [
  // home page
  // Website Design
  {
    id: 1,
     img: "/assets/img/project/project-1.jpg",
     video_id: "ki65h9VHYRM",
     video_title: "Play, Checkout Some Autoedited Videos",
    title: "Hosting Website Design",
    sm_text: "At Collax we specialize in designing, building, shipping...",
    category: "Website Design",
    big: true,
    home: true,
  },
    
  {
    id: 2,
    img: "/assets/img/project/project-2.jpg",
    title: "Tutorial videos",
    sm_text: "At Bigbuddy we provide tutorial to professionals for the best usage of our studio  ",
    category: "Website Design",
    sm: true,
    home: true,
  },
  {
    id: 3,
    img: "/assets/img/project/project-4.jpg",
    title: "Educational videos",
    sm_text: "At Bigbuddy we provide solutions for long distance learning ",
    category: "Website Design",
    sm: true,
    home: true,
  },
  // Branding Design
  {
    id: 4,
    img: "/assets/img/project/brand-1.jpg",
    title: "Web Application Design",
    sm_text: "At Collax we specialize in designing, building, shipping...",
    category: "Branding Design",
    big: true,
    home: true,
  },
  {
    id: 5,
    img: "/assets/img/project/brand-2.jpg",
    title: "Marketing videos ",
    sm_text: "At Bigbuddy we provide solutions for marketing of product effciently",
    category: "Branding Design",
    sm: true,
    home: true,
  },
  {
    id: 6,
    img: "/assets/img/project/brand-3.jpg",
    title: "Webinars",
    sm_text: "At Bigbuddy we provide solutions to coduct webinars of a largescale ",
    category: "Branding Design",
    sm: true,
    home: true,
  },
  // App Design
  {
    id: 7,
    img: "https://api.vadoo.tv/landing_page?vid=Gj9wpWLOU3UUUXuk0VFo0Us6P8ZZ4swW",
    title: "Banking App Management",
    sm_text: "At Collax we specialize in designing, building, shipping...",
    category: "App Design",
    big: true,
    home: true,
  },
  {
    id: 8,
    img: "/assets/img/project/app-2.jpg",
    title: "Gaming ",
    sm_text: "At Bigbuddy we provide solutions for streaming of gaming ",
    category: "App Design",
    sm: true,
    home: true,
  },
  {
    id: 9,
    img: "/assets/img/project/app-3.jpg",
    title: "Yoga App Design",
    sm_text: "At Collax we specialize in designing, building, shipping...",
    category: "App Design",
    sm: true,
    home: true,
  },

  // home three page
  {
    id: 10,
    img: "/assets/img/project/project-9.jpg",
    title: "Webinars ",
    category: "Watch the largescale webinars we have conducted",
    home_3: true,
  },
  {
    id: 11,
    img: "/assets/img/project/project-10.jpg",
    title: "App design",
    category: "Marketing",
    home_3: true,
  },
  {
    id: 12,
    img: "/assets/img/project/project-6.6.jpg",
    title: "UI UX design",
    category: "Web Design",
    home_3: true,
  },
  {
    id: 13,
    img: "/assets/img/project/project-6.5.jpg",
    title: "Logo design",
    category: "Development",
    home_3: true,
  },
  // home four
  // category website
  {
    id: 14,
    img: "/assets/img/project/project-4.1.jpg",
    title: "Webinars",
    subtitle: " Join us for an electrifying journey into the world of webinars. ",
    category: "Website",
    big: true,
    home_4: true,
    portfolio_masonry: true,
    
  },
  {
    id: 15,
    img: "/assets/img/project/project-4.2.jpg",
    title: "Tutorial videos",
    subtitle: "Watch our How-To-Do videos ",
    category: "Website",
    home_4: true,
    portfolio_masonry: true,
  },
  {
    id: 16,
    img: "/assets/img/project/project-4.3.jpg",
    title: "Educational Videos ",
    subtitle: "Content delivery using our studio",
    category: "Website",
    home_4: true,
    portfolio_masonry: true,
  },
  {
    id: 17,
    img: "/assets/img/blog-details/blog-big-5.jpg",
    title: "3d Digital Art",
    subtitle: "Design",
    category: "Website",
    big: true,
    portfolio_masonry: true,
  },
  {
    id: 18,
    img: "/assets/img/project/project-4.5.jpg",
    title: "Marketing videos",
    subtitle: "Use our studio as your marketing tool ",
    category: "Website",
    home_4: true,
    portfolio_masonry: true,
  },
  // add or portfolio masonry items
  {
    id: 19,
    img: "/assets/img/blog-details/blog-sm-6.jpg",
    title: "Architectyourure Design",
    subtitle: "Design",
    category: "Website",
    portfolio_masonry: true,
  },
  {
    id: 20,
    img: "/assets/img/project/project-4.4.jpg",
    title: "Gaming ",
    subtitle: "Watch top gamers streaming with our studio",
    category: "Website",
    home_4: true,
    portfolio_masonry: true,
  },
  // category landing page
  // {
  //   id: 21,
  //   img: "/assets/img/project/project-4.1.jpg",
  //   title: "Book art design",
  //   subtitle: "Branding",
  //   category: "dad",
  //   big: true,
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 22,
  //   img: "/assets/img/project/project-4.4.jpg",
  //   title: "Web Design",
  //   subtitle: "Design",
  //   category: "dad",
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 23,
  //   img: "/assets/img/project/project-4.3.jpg",
  //   title: "3d Digital Art",
  //   subtitle: "Design",
  //   category: "dad",
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 24,
  //   img: "/assets/img/blog-details/blog-big-5.jpg",
  //   title: "3d Digital Art",
  //   subtitle: "Design",
  //   category: "dad",
  //   big: true,
  //   portfolio_masonry: true,
  // },
  // category ios App
  // {
  //   id: 25,
  //   img: "/assets/img/project/project-4.2.jpg",
  //   title: "Graphic Design",
  //   subtitle: "Design",
  //   category: "ios App",
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  
  // {
  //   id: 27,
  //   img: "/assets/img/project/project-4.4.jpg",
  //   title: "Web Design",
  //   subtitle: "Design",
  //   category: "ios App",
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 28,
  //   img: "/assets/img/project/project-4.3.jpg",
  //   title: "3d Digital Art",
  //   subtitle: "Design",
  //   category: "ios App",
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  // category Branding Design
  // {
  //   id: 29,
  //   img: "/assets/img/project/project-4.1.jpg",
  //   title: "Book art design",
  //   subtitle: "Branding",
  //   category: "Branding Design",
  //   big: true,
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 30,
  //   img: "/assets/img/project/project-4.2.jpg",
  //   title: "Graphic Design",
  //   subtitle: "Design",
  //   category: "Branding Design",
  //   home_4: true,
  //   portfolio_masonry: true,
  // },
  // {
  //   id: 31,
  //   img: "/assets/img/blog-details/blog-sm-6.jpg",
  //   title: "Architecture Design",
  //   subtitle: "Design",
  //   category: "Branding Design",
  //   portfolio_masonry: true,
  // },
  // portfolio page 2
  // category website
  {
    id: 32,
    img: "/assets/img/portfolio/port-11.jpg",
    title: "Hosting Website",
    subtitle: "Ui/Ux Design",
    category: "Website",
    portfolio_2: true,

  },
  {
    id: 33,
    img: "/assets/img/portfolio/port-10.jpg",
    title: "Graphic Design",
    subtitle: "Web Design",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 34,
    img: "/assets/img/portfolio/port-14.jpg",
    title: "Book art de",
    subtitle: "Logo Design",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 35,
    img: "/assets/img/portfolio/port-13.jpg",
    title: "Mobile App Design",
    subtitle: "Branding Design",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 36,
    img: "/assets/img/portfolio/port-12.jpg",
    title: "Android App Development",
    subtitle: "Development",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 37,
    img: "/assets/img/portfolio/port-15.jpg",
    title: "IOS App Development",
    subtitle: "Development",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 38,
    img: "/assets/img/portfolio/port-16.jpg",
    title: "Backend Development",
    subtitle: "Development",
    category: "Website",
    portfolio_2: true,
  },
  {
    id: 39,
    img: "/assets/img/portfolio/port-17.jpg",
    title: "UI Design",
    subtitle: "Design",
    category: "Website",
    portfolio_2: true,
  },
  // portfolio page 2
  // category landing page
  {
    id: 40,
    img: "/assets/img/portfolio/port-14.jpg",
    title: "Book art design",
    subtitle: "Logo Design",
    category: "Landing Page",
    portfolio_2: true,
  },
  {
    id: 41,
    img: "/assets/img/portfolio/port-12.jpg",
    title: "Android App Development",
    subtitle: "Development",
    category: "Landing Page",
    portfolio_2: true,
  },
  {
    id: 42,
    img: "/assets/img/portfolio/port-15.jpg",
    title: "IOS App Development",
    subtitle: "Development",
    category: "Landing Page",
    portfolio_2: true,
  },
  {
    id: 43,
    img: "/assets/img/portfolio/port-16.jpg",
    title: "Backend Development",
    subtitle: "Development",
    category: "Landing Page",
    portfolio_2: true,
  },
  {
    id: 44,
    img: "/assets/img/portfolio/port-17.jpg",
    title: "UI Design",
    subtitle: "Design",
    category: "Landing Page",
    portfolio_2: true,
  },
  // portfolio page 2
  // category ios app
  {
    id: 45,
    img: "/assets/img/portfolio/port-11.jpg",
    title: "Hosting Website",
    subtitle: "Ui/Ux Design",
    category: "ios App",
    portfolio_2: true,
  },
  {
    id: 46,
    img: "/assets/img/portfolio/port-13.jpg",
    title: "Mobile App Design",
    subtitle: "Branding Design",
    category: "ios App",
    portfolio_2: true,
  },
  {
    id: 47,
    img: "/assets/img/portfolio/port-16.jpg",
    title: "Backend Development",
    subtitle: "Development",
    category: "ios App",
    portfolio_2: true,
  },
  // portfolio page 2
  // category branding design
  {
    id: 48,
    img: "/assets/img/portfolio/port-10.jpg",
    title: "Graphic Design",
    subtitle: "Web Design",
    category: "Branding Design",
    portfolio_2: true,
  },
  {
    id: 49,
    img: "/assets/img/portfolio/port-14.jpg",
    title: "Book art de",
    subtitle: "Logo Design",
    category: "Branding Design",
    video_id: "PO_fBTkoznc",
     video_title: "Play, Checkout Some Autoedited Videos",
    portfolio_2: true,
  },
  {
    id: 50,
    img: "/assets/img/portfolio/port-12.jpg",
    title: "Android App Development",
    subtitle: "Development",
    category: "Branding Design",
    portfolio_2: true,
  },
  // service page recent product
  {
    id: 51,
    img: "/assets/img/service/service-9.1.jpg",
    title: "Godaddy user flow solution",
    subtitle: (
      <>
        At Collax we specialize in designing, building, <br /> shipping and
        scaling beautifu
      </>
    ),
    duration: ".3s",
    delay: ".5s",
    service_p: true,
  },
  {
    id: 52,
    img: "/assets/img/service/service-9.2.jpg",
    title: "What is ui/ux design trend",
    subtitle: (
      <>
        At Collax we specialize in designing, building, <br /> shipping and
        scaling beautifu
      </>
    ),
    duration: ".5s",
    delay: ".7s",
    service_p: true,
  },
  {
    id: 53,
    img: "/assets/img/service/service-9.3.jpg",
    title: "Create you design system like",
    subtitle: (
      <>
        At Collax we specialize in designing, building, <br /> shipping and
        scaling beautifu
      </>
    ),
    duration: ".7s",
    delay: ".9s",
    service_p: true,
  },
];

export default portfolio_data;
