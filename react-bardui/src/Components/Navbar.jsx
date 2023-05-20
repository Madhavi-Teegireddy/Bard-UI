import React, { useState } from 'react'
import "./Navbar.css"
import { TfiMenu } from "react-icons/tfi";
import { BiReset } from "react-icons/bi";
import { RxTimer } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { BsExclamationSquare } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import Content from './Content';
import useLocalStorage from 'use-local-storage'



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

    const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <>
    <div className='topnav' data-theme={theme}>
      <div className="main-icon"
      onClick={handleSidebarToggle}>
        <div className="icon">
          <button className='toggle'>
            <span className='menu'>
              <TfiMenu></TfiMenu>
            </span>
          </button>
        </div>
        <div className="textB">Bard</div>
      </div>

      <div className="main-icon">
        <div className="icon">
          <button className='toggle'>
            <span className='menu' >
              <CgMenuGridO style={{fontSize:"30px"}}></CgMenuGridO>
            </span>
          </button>
        </div>
      </div>
      </div>

    <div className='sidenavCont' style={{border:"1px solid blue"}} data-theme={theme}>
      {isSidebarOpen && (
      <nav className={`nav ${isSidebarOpen ? 'open' : 'closed'}`} data-theme={theme}>
              <div className="round-icon">
                <div className="icon">
                  <button className='sidebar-toggle'>
                    <span className='menu'><BiReset></BiReset></span>
                  </button>
                </div>
              <div className="text">Reset Chat</div>
              </div>

              <div className="round-icon">
                <div className="icon">
                  <button className='sidebar-toggle'>
                    <span className='menu'><RxTimer></RxTimer></span>
                  </button>
                </div>
              <div className="text">Bard Activity</div>
              </div>

              <div className="round-icon">
                <div className="icon">
                  <button className='sidebar-toggle'>
                    <span className='menu'><FaRegQuestionCircle></FaRegQuestionCircle></span>
                  </button>
                </div>
              <div className="text">FAQ</div>
              </div>

              <div className="round-icon">
                <div className="icon">
                  <button className='sidebar-toggle'>
                    <span className='menu'><MdOutlineEventNote></MdOutlineEventNote></span>
                  </button>
                </div>
              <div className="text">Updates</div>
              </div> 

              <div className="round-icon">
                <div className="icon">
                  <button className='sidebar-toggle'>
                    <span className='menu'><BsExclamationSquare></BsExclamationSquare></span>
                  </button>
                </div>
              <div className="text">Help</div>
              </div>

              {/* for theme */}
              <div className='theme-toggle' onClick={switchTheme}>
                <div className="icon-container">
                  {theme === "light" ? (
                  <MdOutlineDarkMode></MdOutlineDarkMode>
                  ) : (
                  <MdOutlineLightMode></MdOutlineLightMode>
                  )}
                </div>
                <div className="text-container">
                  {theme === "light" ? <h2>Use dark theme</h2> : <h2>Use light theme</h2>}
                </div>
              </div>
      </nav>
      )}
    </div>
    
    <Content/>
    </>
  )
}

export default Navbar