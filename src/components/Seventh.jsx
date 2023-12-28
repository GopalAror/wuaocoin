import React from 'react'
import img1 from "../assets/image/seven-sec-img.png";
import ninth from "../assets/image/ninth-arrow.svg";
import ellipis1 from "../assets/image/toke-ellipis1.png";
import ellipis2 from "../assets/image/toke-ellipis2.png";

const Seventh = () => {
    return (
        <div className="relative">
            <img className=' absolute top-0 left-0 max-sm:w-[20%]' src={ellipis1} alt="ellipis2" />
            <img className=' absolute right-0 bottom-[-20%] max-sm:w-[20%]' src={ellipis2} alt="ellipis2" />
            <img className=' absolute bottom-[17%] left-[1%]' src={ninth} alt="arrows" />
            <div className='mx-auto max-w-[1140px] px-3 py-[50px] sm:py-[100px] flex flex-col items-center justify-center relative z-[3]'>
                <h2 className='text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[22px]'>Tokenomics</h2>
                <img className='w-full' src={img1} alt="seven-sec-img" />
            </div>
        </div>
    )
}

export default Seventh 