import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

function Project() {
    var settings = {
        dots: true,
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
        <h2 className={`text-sm md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] mx-11 mb-12 lg:mb-20`}>Our works and <span className='heading-span'>Projects</span></h2>            
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
        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "I code beautiful web experiences and have a good grip over various front-end technologies",
        path:"/FrontendWork"
    }, 
    {
        id:1,
        skill: "Open-source contribution",
        img:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "I contributed to various open source projects",
        path:"https://github.com/shivani-tripurari"
    },
    {
        id:2,
        skill: "Freelancing",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Worked on some freelance projects related to front-end and fullstack development",
        path:"https://www.linkedin.com/in/shivani-tripurari-a7962621b/"
    },
    {
        id:3,
        skill: "UI/UX designing",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "I have a good understanding of designing principles ",
        path:"/UiWork"
    },
];
