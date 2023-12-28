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
  function reportWindowSize() {
    document.title = (`wuaocoin(${window.innerWidth},${window.innerHeight})`)
  }
  window.onresize = reportWindowSize;
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
  );
}
export default App;