import React from 'react'

const Card = (props) => {
    return (
        <div className="sm:w-6/12 max-[450px]:w-full w-8/12 md:w-4/12 mt-[20px] lg:w-3/12 xl:w-2/12 px-3">
            <div className={` ${props.bg} rounded-[14px] py-2 px-3 hover:-translate-y-4 duration-500  min-h-[180px]`}>
                <h3 className='text-white text-[27px] font-Montserrat font-bold opacity-50 '>{props.count}</h3>
                <p className=' font-Montserrat font-bold text-[20px] text-white pt-[20px]'>{props.para}</p>
            </div>
        </div>
    )
}

export default Card
