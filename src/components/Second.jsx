import React from 'react'
import timeline from "../assets/image/time-line.png";
import circle from "../assets/image/time-line-circle.png";
import secondellipis from "../assets/image/second-ellipis.png";
import third from "../assets/image/third-arrow.svg";
import forth from "../assets/image/forth-arrow.svg";
const Second = () => {
    return (
        <div className='relative'>
            <img className=' top-[-40%] right-[50%] absolute z-[1]' src={third} alt="third" />
            <img className=' top-[-30%] right-[10%] absolute z-[1]' src={forth} alt="third" />
            <img className='absolute right-0 top-[-18%] md:top-[-50%] lg:top-[-20%] max-lg:w-[15%]' src={secondellipis} alt="second-ellipis" />
            <div className='max-w-[1140px] mx-auto px-3 lg:mt-[300px]'>
                <div className="flex flex-wrap -mx-3 md:flex-row flex-col-reverse relative z-[3] md:pt-0 pt-[70px]">
                    <div className=" w-full md:w-6/12 px-3 flex h-full justify-center items-center">
                        <div className="relative">
                            <img className='w-full' src={timeline} alt="timeline" />
                            <img className='absolute top-[34.6%] right-[34.7%] w-[30%] animate-spin-slow' src={circle} alt="circle" />
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-3 flex justify-center flex-col">
                        <h2 className='text-[25px] sm:text-[30px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center md:text-start'>Our Project</h2>
                        <p className='md:max-w-[447px] font-Montserrat text-[14px] md:text-[18px] font-normal text-black opacity-70 max-md:text-center'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
