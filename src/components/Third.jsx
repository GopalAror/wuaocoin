import React from 'react'
import img1 from "../assets/image/benifit-img1.png";
import img2 from "../assets/image/benifit-img2.png";
import img3 from "../assets/image/benifit-img3.png";
import fivth from "../assets/image/fivth-arrow.svg";
const Third = () => {
    return (
        <div className='relative'>
            <img className=' absolute bottom-[8%] left-[5%]' src={fivth} alt="arrows" />
            <div className="max-w-[1140px] px-3 mx-auto pt-[40px]">
                <h2 className='text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[60px]'>Benefits</h2>
                <div className="row pb-[50px] md:pb-[100px] items-center justify-center">
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5] p-10">
                            <img className='w-full' src={img1} alt="img" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Services, Products and Community
                            All in one place!
                        </p>
                    </div>
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5]">
                            <img className='w-full' src={img2} alt="img2" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Selling in crypto will no longer be complicated, it will be safe and reliable.</p>
                    </div>
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5]">
                            <img className='w-full' src={img3} alt="img3" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Buying and getting a real discount is possible? Join and check it out.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Third