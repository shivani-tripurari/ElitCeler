import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

function Project() {
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,  // Disable arrows
        autoplay: true, // Enable automatic scrolling
        autoplaySpeed: 3000, // Set speed to 3 seconds (3000 milliseconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000
            }
          }
        ]
      };

    return(
        <>
        <div className="container relative z-2 mt-[6.69rem]" id="projects">
        <h2 className={`text-[24px] md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] mx-11 mb-12 lg:mb-20`}>Our works and <span className='heading-span'>Projects</span></h2>            
            <div className="w-full m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d)=>(
                    <div key={d.id} className="mb-8 h-[16rem] w-[50rem] md:h-[46rem] bg-transparent text-white rounded-xl" style={{ margin: "0 10px" }}>
                        <div className="h-full w-full rounded-xl"><img className="rounded-xl" src={d.img}/></div>
                        <div className="relative  flex flex-col justify-center align-center gap-4 p-4">
                         {/*<div><h2 className="relative bottom-7 text-[10px] md:m-7 md:text-xl lg:text-xl font-semibold">{d.skill}</h2></div> */} 
                          {/*<div><p className="relative bottom-12 text-xs">{d.description}</p></div>*/}
                        </div> 
                    </div>
                ))}
                </Slider>
            </div>
            </div>
            </div>
        </>
    )
}

export default Project;



const data = [
    {
        id:0,
        skill: "Front-end development",
        img: s1,
        description: "I code beautiful web experiences and have a good grip over various front-end technologies",
        path:"/FrontendWork"
    }, 
    {
        id:1,
        skill: "Open-source contribution",
        img:s2,
        description: "I contributed to various open source projects",
        path:"https://github.com/shivani-tripurari"
    },
    {
        id:2,
        skill: "Freelancing",
        img: s3,
        description: "Worked on some freelance projects related to front-end and fullstack development",
        path:"https://www.linkedin.com/in/shivani-tripurari-a7962621b/"
    },
    {
        id:3,
        skill: "UI/UX designing",
        img: s4,
        description: "I have a good understanding of designing principles ",
        path:"/UiWork"
    },
    {
      id:4,
      skill: "UI/UX designing",
      img: s5,
      description: "I have a good understanding of designing principles ",
      path:"/UiWork"
  }
];
