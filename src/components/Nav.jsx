import React from 'react'
import logo from "../assets/image/logo.png";
import earth from "../assets/image/languages.svg";
import twitr from "../assets/image/twitr.svg";
import discord from "../assets/image/discord.svg";
import linkdin from "../assets/image/linkdin.svg";
import telegram from "../assets/image/telegram.svg";
import { useState } from "react";

const Nav = () => {
    const [nav, setnav] = useState(false)
    function over() {
        setnav(!nav)
        if (nav === false) {
            document.body.classList.add("flow");
          }
          else {
            document.body.classList.remove("flow");
          }
    }
    return (
        <div>
            <nav>
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex pt-[23px] justify-between items-center relative">
                        <img className='relative z-[7]' src={logo} alt="logo" />
                        <label className='flex flex-col gap-[9px] absolute right-2 md:hidden z-[7]' onClick={over}>
                            <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                            <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                            <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                        </label>
                        <ul className={`flex gap-[22px] items-center max-md:flex-col max-md:h-full max-md:justify-center max-md:items-center max-md:bg-[#FFB33B] max-md:fixed  max-md:top-0 max-md:w-full m-0 p-0 z-[5] duration-500  ${ nav ? "right-0" : "max-md:right-[-100%]"}`}>
                            <li className='pr-2'><a className='text-white after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-white after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full text-[16px] font-Montserrat leading-[normal] font-semibold ' href="#">ICO</a></li>
                            <li><a className='text-white after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-white after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full text-[16px] font-Montserrat leading-[normal] font-semibold' href="#">WHITEPAPER</a></li>
                            <li className='flex items-center gap-3'>
                                <a href="https://discord.com/" target='_blank'><img className='hover:scale-[1.2] duration-300' src={discord} alt="discord" /></a>
                                <a href="https://twitter.com/i/flow/login" target='_blank'><img className='hover:scale-[1.2] duration-300' src={twitr} alt="twitr" /></a>
                                <a href="https://web.telegram.org/k/" target='_blank'><img className='hover:scale-[1.2] duration-300' src={telegram} alt="telegram" /></a>
                                <a href="https://www.linkedin.com/" target='_blank'><img className='hover:scale-[1.2] duration-300' src={linkdin} alt="linkdin" /></a>
                            </li>
                            <li>
                                <a href="#" className="border-[1px] border-white rounded-[167px] flex items-center gap-2 py-1 ps-[5px] pe-[7.5px] text-white  ">
                                    <img src={earth} alt="earth" />{" "}
                                    <select name="langauge" id="language" className="border-0 outline-none bg-[#FFB33B]">
                                        <option value="English">Eng</option>
                                        <option value="Hindi" >हिन्दी</option>
                                        <option value="Chines" >ਪੰਜਾਬੀ</option>
                                    </select>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav