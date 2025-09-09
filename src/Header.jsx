import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion';
const Home = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
   
    return (
        <>
        <div className= 'bg-[#0f3430]  text-white px-4 md:px-10 lg:px-40 p-4 fixed top-0 left-0 w-full flex items-center gap-24  justify-between text-2xl font-poppins z-50' >
          <motion.h1
          initial = {{opacity: 0, x:10}}
          whileInView ={{opacity: 1, x:0}} 
          transition = {{duration: 0.9, ease: "easeIn"}}
          className='font-bold  md:tracking-wide '>
            <span className='text-white'>AMEER </span>
            <span className='text-[#4ec18a]'>SUFYAN</span>
            </motion.h1>
            <div onClick={toggleMenu} className='relative'>
                {menuOpen ? <FaTimes/>: <FaBars/> }
            </div>
           
        </div>
          {menuOpen && (
         <>
         <div className='fixed inset-0 bg-black/60'>
         </div>
            <ul className='list-none z-50 font-bold flex flex-col items-center justify-center fixed bg-[#4ec18a] text-white gap-y-5 left-[10%] top-[14%] py-20 rounded-3xl w-[80vw] h-[80vh] text-2xl'>
                <li className='hover:text-[#0f3430] ' onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
                <li className='hover:text-[#0f3430] cursor-pointer'  onClick={() => {navigate('/', { state: { scrollToAbout: true } }); setMenuOpen(false)}}>About</li>
                 <li className='hover:text-[#0f3430] cursor-pointer'  onClick={() => {navigate('/', { state: { scrollToProjects: true } }); setMenuOpen(false)}}>Projects</li>
                 <li className='hover:text-[#0f3430] cursor-pointer'  onClick={() => {navigate('/', { state: { scrollToEducation: true } }); setMenuOpen(false)}}>Education</li>
                  <li className='hover:text-[#0f3430] cursor-pointer'  onClick={() => {navigate('/', { state: { scrollToExperience: true } }); setMenuOpen(false)}}>Experience</li>
                <li className='hover:text-[#0f3430] cursor-pointer'  onClick={() => {navigate('/', { state: { scrollToContact: true } }); setMenuOpen(false)}}>Contact</li>
            </ul>
            </>
            )}
        </>
    )
}
export default Home;