import SideBar from "./SideBar";
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Cat from "./img/wallpaper-catien_blue_effects.png"
import './index.css'
import About from "./pages/About";
import Projects from "./pages/Projects";
import Credits from "./pages/Credits";
import Discord from "./pages/Discord";


function App() {
  return (
    <>
      <div className='flex select-none'>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/credits" element={<Credits />} />
            <Route exact path="/discord" element={<Discord />} />
          </Routes>
        </BrowserRouter>

      </div>
      <img src={Cat} className="absolute bottom-0 right-0 h-auto w-5/6 opacity-60" alt=""></img>
    </>
  );
}

export default App;
