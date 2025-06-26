import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
   <footer className="bg-[#4ec18a] text-white py-8 ">
        <div className=" text-center tracking-wide">
          © {new Date().getFullYear()} Ameer Sufyan. All rights reserved.
        </div>
    </footer>
   ) }
export default Footer
