import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  const options = {
    items: 1,
    loop: true,
    nav: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    
    autoplayHoverPause: true,
  };
  const image = [
    {
      url: "images/food1.jpg"
    },
    {
      url: "images/food2.jpg",
    },
    {
      url: "images/food3.jpg",
    },
    {
      url: "images/food4.jpg",
    },
    {
      url: "images/food5.jpg",
    },
    {
      url: "images/food6.jpg",
    },
  ];
  return (
    <>
     <div className="flex justify-center mt-32">
     <div className=" w-[500px] h[500px] mx-9 rounded-md border-2 border-slate-100 ">
      <OwlCarousel className="owl-theme" {...options}>
        {image.map((items) => {
          return (
            <div className="">
              <img src={items.url} alt="images" className=""/>
            </div>
          );
        })}
      </OwlCarousel>
      </div>
     </div>
    </>
  );
}

export default App;
