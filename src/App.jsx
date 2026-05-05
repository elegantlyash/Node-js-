import React from 'react' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import DataFetching from './Hooks/useEffect/DataFetching'
// import Setcleartimer from './Hooks/useEffect/Setcleartimer'
// import TitleUpdater from './Hooks/useEffect/TitleUpdater'
// import WindowResize from './Hooks/useEffect/WindowResize'
// import DarkModeToggle from './Hooks/useEffect/DarkModeToggle'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Home from './components/Home'
import MovieProvider from './context/MovieProvider'


const App = () => {
  const fullname = "NAMESH"
  return (
   
    <>
    <MovieProvider/>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      
    
    {/* <DataFetching/>
    <br />
    <Setcleartimer/>
    <br />
    <TitleUpdater/>
    <br />
    <WindowResize/>
    <br />
    <DarkModeToggle/> */}
    {/* <FormHandling/> */}
    {/* <DarkLight/>
    <ShowHide/> */}
    {/* <UseStateOne/> */}
    {/* <MultipleJSX/> */}
    {/* <IfElse/> */}
    {/* <Ternary/> */}
    {/* <Parent/> */}
    {/* {fullname}
    
    <HeroSection/>
    <Books/>
    <div>App</div>
    <Math/> */}
    
    </>
  )
}

export default App
