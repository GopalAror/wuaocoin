import React from 'react'
import unicef from "../assets/image/unicef.png";

const Secondlast = () => {
    return (
        <div className='bg-[url(./assets/image/last-secong-bg.png)] bg-complete bg-no-repeat h-full'>
            <div className=" flex items-center justify-center flex-col  pb-[60px] max-w-[1140px] mx-auto px-3">
                <h2 className='text-white text-center text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold pt-[75px] pb-12'>Partnership</h2>
                <img className='max-w-[453px] w-[70%] md:w-full' src={unicef} alt="unicef" />
            </div>
        </div>
    )
}

export default Secondlast
