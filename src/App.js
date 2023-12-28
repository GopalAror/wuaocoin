import { useEffect, useState } from 'react';
import './App.css';
import Fivth from './components/Fivth';
import Footer from './components/Footer';
import Forth from './components/Forth';
import Header from './components/Header';
import Nav from './components/Nav';
import Second from './components/Second';
import Secondlast from './components/Secondlast';
import Seventh from './components/Seventh';
import Sixth from './components/Sixth';
import Third from './components/Third';
import Loader from './components/Loader';

function App() {
  const [PreLoader, setPreLoader] = useState(false)
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 3000)
  }, [])

  document.title=(`wuaocoin(${window.innerWidth},${window.innerHeight})`)
  return (
    <div className='width'>
      {PreLoader ?
        (<div>  <Loader /></div>) :
        (<div>
          <div className='lg:bg-[url(./assets/image/hero-section.png)] bg-100% bg-no-repeat h-full'>
            <div className='bg-bg-gradient lg:bg-bg-unset'>
              <Nav />
              <Header />
            </div>
            <Second />
          </div>
          <Third />
          <Forth />
          <Fivth />
          <Sixth />
          <Seventh />
          <Secondlast />
          <Footer />
        </div>)
      }
    </div>
    // // -------------PreLoader----------
    //   const [screenLoading, setScreenLoading] = useState(false);

    //   useEffect(() => {
    //     setScreenLoading(true);
    //     setTimeout(() => {
    //       setScreenLoading(false);
    //     }, 3000);
    //   }, []);
    //   return (
    //     <div className='overflow-x-hidden'>
    //       {screenLoading ? (
    //         <Loader />
    //       ) : (
    //         <div className=''>
    //           <Header />
    //           <Featured />
    //           <Integer />
    //           <Services />
    //           <TermPartner />
    //           <AglieWordpress />
    //           <FullStars />
    //           <SuccessGuide />
    //           <Footer />
    //           <div className='fixed bottom-4 right-4 z-[6] cursor-pointer'>
    //             <div className={backToTop ? 'w-[60px] h-[60px] rounded-[60px] bg-[#6022EA]' : 'hidden'} onClick={() => top()}>
    //               <img src={Backtotop} alt="Backtotop" className=' w-full' />
    //             </div>
    //           </div>
    //         </div>
    //       )
    //       }
    //     </div >
    // export const Loader = () => {
    //   return (
    //       <div className='fixed left-0 right-0 flex items-center justify-center min-h-screen bg-black'>
    //           <div className='max-w-[100px] w-full'>
    //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#fff" stroke="#fff" strokeWidth="15" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate></circle><circle fill="#6022EA" stroke="#6022EA" strokeWidth="15" opacity=".8" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0.05"></animate></circle><circle fill="#fff" stroke="#fff" strokeWidth="15" opacity=".6" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate></circle><circle fill="#fff" stroke="#fff" strokeWidth="15" opacity=".4" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate></circle><circle fill="#fff" stroke="#fff" strokeWidth="15" opacity=".2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate></circle></svg>
    //           </div>
    //       </div>
    //   )
    // }
  );
}
export default App;