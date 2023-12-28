import React from 'react'
import roadmap from "../assets/image/roadmap.png";
import Card from "./Card";
import eighth from "../assets/image/eighth-arrow.svg";
import ellipis1 from "../assets/image/roadmap-ellipis1.png";
import ellipis2 from "../assets/image/roadmap-ellipis2.png";

const Cards = [
  {
    id: 1,
    bg: " bg-[#EFB93B]",
    number: '01',
    para: 'Organizational concept (creations)'
  },
  {
    id: 2,
    bg: " bg-[#E0480A]",
    number: '02',
    para: 'Directional Process (Actions)'
  },
  {
    id: 3,
    bg: " bg-[#4D86DC]",
    number: '03',
    para: 'Operational Development (technical team)'
  },
  {
    id: 4,
    bg: " bg-[#364EC6]",
    number: '04',
    para: 'Strategic Opportunities (alliances)'
  },
  {
    id: 5,
    bg: " bg-[#6A3DAD]",
    number: '05',
    para: 'Stakeholders (benefits)'
  },
  {
    id: 6,
    bg: " bg-[#ED5C83]",
    number: '06',
    para: 'Human Identity (social contribution)'
  },
]
const Fivth = () => {
  return (
    <div className='relative'>
      <img className=' absolute left-0 top-0 max-sm:w-[20%]' src={ellipis1} alt="ellipis" />
      <img className=' absolute bottom-[-25%] right-0' src={ellipis2} alt="ellipis2" />
      <div className="max-w-[1360px] px-3 mx-auto flex items-center flex-col pt-[30px] md:pt-[100px] relative">
        <img className=' absolute right-0 top-[15%]' src={eighth} alt="arrows" />
        <h2 className=' relative z-[3] text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[18px]'>RoadMap</h2>
        <p className='text-black relative z-[3]  text-[14px] md:text-[18px] font-Montserrat font-normal opacity-70 max-w-[672px] text-center pb-[70px]'>Knowing our values, understanding the business idea and then, gradually, presenting the plans to the public is our way of doing things.</p>
        <img className=' relative z-[3]' src={roadmap} alt="roadmap" />
        <div className="row pt-[55px] pb-[70px] md:pb-[120px] relative z-[3] justify-center items-center">
          {Cards.map((e) => <Card key={e.id} bg={e.bg} count={e.number} para={e.para} />)}
        </div>
      </div>
    </div>
  )
}

export default Fivth
