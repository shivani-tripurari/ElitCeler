import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

function Testimonial(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <>

        <div className="container relative z-2 mt-[6.69rem]" id="projects">
        <h2 className={`text-sm md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] mx-11 mb-12 lg:mb-20`}>Why <span className='heading-span'>Trust </span>us ?</h2>            
            <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d)=>(
                    <div key={d.id} className="mb-8 h-[8rem] w-[10rem] md:h-[16rem] bg-slate-800 text-white rounded-xl" style={{ margin: "0 10px" }}>
                        <div className="h-5/6 w-full rounded-xl"></div>
                        <div className="relative  flex flex-col justify-center align-center gap-4 p-4">
                          <div><h2 className="relative bottom-7 text-[10px] md:m-7 md:text-xl lg:text-xl font-semibold">{d.skill}</h2></div>
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

  
export default Testimonial;


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
