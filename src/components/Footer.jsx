import React from 'react'
import logo2 from "../assets/image/foot-logo.png";
import twitr from "../assets/image/foot-app2.svg";
import discord from "../assets/image/foot-app13.svg";
import linkdin from "../assets/image/foot-app1.svg";
import telegram from "../assets/image/foot-app4.svg";
import ellipis1 from "../assets/image/foot-ellipis1.png";
import ellipis2 from "../assets/image/foot-ellipis-2.png";
const Footer = () => {
    const y = new Date ()
    const myyear = y.getFullYear();
    return (
        <div className='relative'>
            <img className='absolute top-[-10%] sm:top-[-35%] left-0 max-sm:w-[40%]' src={ellipis1} alt="ellipis1" />
            <img className='absolute bottom-0 right-0 max-sm:w-[40%]' src={ellipis2} alt="ellipis1" />
            <div className='pt-[50px] sm:pt-[105px]'>
                <div className="container max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-row flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 relative z-[3]">
                            <img src={logo2} alt="logo" />
                            <p className='font-montserrat text-base opacity-70 text-[#32352C] leading-[27.84px] max-w-[252.35px] mt-[22px] '>Welcome to The Future of the Market. The world's first Global TechFi Platform</p>
                            <div className='flex items-center gap-3 pt-6'>
                                <a href="https://discord.com/"><img className='hover:scale-[1.2] duration-300' src={discord} alt="discord" /></a>
                                <a href="https://twitter.com/i/flow/login"><img className='hover:scale-[1.2] duration-300' src={twitr} alt="twitr" /></a>
                                <a href="https://web.telegram.org/k/"><img className='hover:scale-[1.2] duration-300' src={telegram} alt="telegram" /></a>
                                <a href="https://www.linkedin.com/"><img className='hover:scale-[1.2] duration-300' src={linkdin} alt="linkdin" /></a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 flex flex-col md:pt-0 pt-[40px] ">
                            <div className="flex flex-row flex-wrap -mx-3 pb-[70px]">
                                <div className="sm:w-1/3 px-3 flex md:justify-end">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Documents</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WhitePaper</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Customers</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Business</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 px-3 flex md:justify-end pb-[40px]">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Quick Links</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Home</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>About Us</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Benefits</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>ICO</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>RoadMap</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Tokenomics</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Partnership</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 px-3 flex md:justify-end">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Company</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WUAOCOIN</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WUAOSHOP</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-t-solid border-t-[#9F9F9F]"></div>
                <div className='container max-w-[1140px] mx-auto px-3 py-[25px]'>
                    <p className='text-center font-montserrat text-base leading-[24px] text-[#32352C] opacity-60 '>Â© Copyright {myyear} - Wuaocoin</p>
                </div>
            </div>
        </div>
    )
}

export default Footer 
