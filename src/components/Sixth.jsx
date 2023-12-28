import React, { useEffect, useState } from 'react'

const Sixth = () => {
  const [time, setTime] = useState({});
  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);
    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2024-03-22`)
      );
      setTime(timeTaken);
    }, 0);
  }, []);
  return (
    <div className="bg-[url(./assets/image/forth-sec-bg.png)] bg-cover sm:bg-complete bg-no-repeat h-full">
      <div className='max-w-[1140px] mx-auto px-3 flex flex-col justify-center items-center relative z-[3]'>
        <div className=" pt-[80px] flex flex-col items-center ">
          <h4 className='text-white text-[17px] sm:text-[20px] md:text-[30px] font-Montserrat font-bold leading-[30px] sm:leading-[52px] pb-[50px] text-center max-w-[609px]'>Public Sale 5% in ERC20 & BEP20, 100% for the Community</h4>
        </div>
        <div className="flex items-center justify-center sm:gap-[14px] gap-2 mt-[58px] pb-[50px]">
          <div>
            <div className=" border-white rounded-[10px] w-[56px] sm:w-[106px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 py-2 sm:pb-[9px] sm:ps-[20px]">
              <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.days}
              </p>
            </div>
            <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
              Days
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] w-[56px] sm:w-[106px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
              <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.hours}
              </p>
            </div>
            <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
              hours
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] w-[56px] sm:w-[106px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
              <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.minutes}
              </p>
            </div>
            <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
              Minute
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] w-[56px] sm:w-[106px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
              <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.seconds}
              </p>
            </div>
            <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
              Second
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[40px] border border-white hover:bg-transparent duration-500 max-w-[152px] mb-[80px]">
          <button className='bg-text-gradient text-transparent bg-clip-text  text-center text-[14px] sm:text-[16px] duration-500  hover:text-white  font-Montserrat font-semibold py-[11px] px-[21px]'>BUY WUAO</button>
        </div>
      </div>
    </div>
  )
}

export default Sixth
