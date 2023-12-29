import React from 'react'
import head from "../assets/image/sec1-img.png";
import first from "../assets/image/first-arrow.svg";
import second from "../assets/image/second-arrow.svg";
const Header = () => {
    return (
        <div>
            <header className='relative'>
                    <img className='absolute right-[55%] top-[15%] z-[1]' src={first} alt="first" />
                    <img className=' absolute bottom-[-9%] left-[7%] z-[1]' src={second} alt="second" />
                <div className="max-w-[1140px] mx-auto px-3 lg:h-[85vh] min-[1281px]:h-[60vh] ">
                    <div className="row justify-end items-end h-full">
                        <div className=" lg:w-6/12 w-full px-3 pt-[50px] lg:pt-0">
                            <p className=' font-Montserrat font-semibold text-[16px] md:text-[20px] text-white z-[3] relative'>Welcome to</p>
                            <h1 className='font-black font-Montserrat text-[30px] sm:text-[45px] md:text-[65px] leading-[40px] sm:leading-[60px] lg:leading-[73px] text-white max-w-[513px] z-[3] relative'>The Future of E-Commerce</h1>
                            <p className='text-white font-Montserrat font-medium max-w-[384px] text-[14px] md:text-[18px] z-[3] relative'>A multi-purpose token to improve digital sales and purchases</p>
                            <div className="flex gap-[15px] mt-[40px]">
                                <div className="bg-white rounded-[40px] border border-white hover:bg-transparent duration-500">
                                    <button className='bg-text-gradient text-transparent bg-clip-text  text-center text-[12px] md:text-[16px] duration-500  hover:text-white  font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] '>How To Buy</button>
                                </div>
                                <div className="hover:bg-white rounded-[40px] duration-500">
                                <button className='hover:bg-text-gradient text-white duration-500 hover:text-transparent hover:bg-clip-text  text-center text-[12px] md:text-[16px] font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] bg-transparent border border-white rounded-[40px]'>Read Whitepaper</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-6/12 lg:pb-0 pb-[100px] w-full px-3 flex lg:items-end lg:justify-end h-full lg:pl-[100px] relative z-[3]">
                            <img className='w-full pt-[30px] lg:pt-0' src={head} alt="sec1-img" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
