import React from 'react'
import img1 from "../assets/image/forth-img1.png";
import img2 from "../assets/image/forth-img2.png";
import sixth from "../assets/image/sixth-arrow.svg";

const Forth = () => {
    return (
        <div className='overflow-hidden'>
            <div className="bg-[url(./assets/image/forth-sec-bg.png)] bg-cover sm:bg-complete bg-no-repeat h-full  relative">
                <img className=' absolute top-[65%] right-[56%]' src={sixth} alt="arrows" />
                <div className="max-w-[1440px] px-3 mx-auto">
                    <div className='row pt-[100px] pb-[100px] md:pb-[70px] md:pt-[70px]  items-center'>
                        <div className="max-[500px]:w-full w-8/12 md:w-6/12 lg:w-4/12 px-3">
                            <img className='w-full' src={img1} alt="forth-img1" />
                        </div>
                        <div className='max-[500px]:w-full w-8/12 md:w-6/12 lg:w-4/12 px-3 flex flex-col items-center  '>
                            <h2 className='text-white text-center text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold'>Whitepaper</h2>
                            <p className='text-white font-Montserrat font-semibold text-[14px] md:text-[18px] text-center pt-3 pb-[50px]'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.
                            </p>
                            <div className="bg-white rounded-[40px] border border-white hover:bg-transparent max-w-[188px] flex items-center justify-center duration-500">
                                <button className='bg-text-gradient text-transparent bg-clip-text  text-center text-[13px] md:text-[16px] duration-500  hover:text-white  font-Montserrat font-semibold py-[11px] px-[21px] '>How To Buy</button>
                            </div>
                        </div>
                        <div className="max-[500px]:w-full w-8/12 md:w-6/12 lg:w-4/12 px-3">
                            <img className='w-full' src={img2} alt="forth-img2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forth
