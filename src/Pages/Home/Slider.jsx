import React, { useEffect, useState } from "react";

const slides = [
  {
    img: 'linear-gradient(to top, rgba(0,0,0,1.9), transparent),url("/images/Slider/image-1.jpg")',
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
    {
    img: 'linear-gradient(to top, rgba(0,0,0,1.9), transparent),url("/images/Slider/image-2.jpg")',
    title: "hello ipsum, dolor sit amet consectetur adipisicing",
  },
    {
    img: 'linear-gradient(to top, rgba(0,0,0,1.9), transparent),url("/images/Slider/image-3.jpg")',
    title: "Information ipsum, dolor sit amet consectetur",
  },
    {
    img: 'linear-gradient(to top, rgba(0,0,0,1.9), transparent),url("/images/Slider/image-4.jpg")',
    title: "Users ipsum, dolor sit amet consectetur adipisicing",
  },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(()=>{
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length)
      }, 3000);
      return () => clearInterval(interval)
    }, [])


  return (
  <div>
        <div style={{backgroundImage: slides[currentIndex].img}} className="card-info-bg h-[300px]  flex  items-end rounded-2xl p-5">
           <div>
            <h2 className="text-green-600 font-bold">FEATURED APP</h2>
            <h2  className="text-white font-bold">{slides[currentIndex].title}</h2>
            <p   className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
           </div>
          </div>
  </div>

  )
}
