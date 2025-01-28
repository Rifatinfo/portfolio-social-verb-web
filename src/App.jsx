
import './App.css'
import PageTitle2 from './Components/PageTitle2/PageTitle2'
import Portfolio from './Components/Portfolio/Portfolio'
import Slider from './Components/Slider/Slider'
// import Video from './Components/Video/Video'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function App() {


  return (
    <>
      <div>
         <Navbar></Navbar>
         <Slider></Slider>
         <PageTitle2></PageTitle2>
         <Portfolio></Portfolio>
         <Footer></Footer>
         {/* <Video></Video> */}
      </div>
    </>
  )
}

export default App
