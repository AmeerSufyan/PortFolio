import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import pic1 from './buildersfullst.png';
import pic2 from './residencescreenshot.png';
import pic3 from './commercialscreenshot.png';
import pic4 from './projectsscreenshot.png';
import pic5 from './aboutscreenshot.png';
import pic6 from './blogscreenshot.png';
import pic7 from './contactscreenshot.png';
import pic8 from './realstateadmin.png';
import cartpic1 from './Freshcartpics/carthome.png';
import cartpic2 from './Freshcartpics/cartabout.png';
import cartpic3 from './Freshcartpics/cartbreakfast.png';
import cartpic4 from './Freshcartpics/cartsauces.png';
import cartpic5 from './Freshcartpics/cartFaq.png';
import cartpic6 from './Freshcartpics/cartcontact.png';
import cartpic7 from './Freshcartpics/cartpage.png';
import cartpic8 from './Freshcartpics/cartcheckout.png';
import cartpic9 from './Freshcartpics/cartbill.png';
import category from './Freshcartpics/cartcategory.png';
import product from './Freshcartpics/cartProduct.png';
import orderDetail from './Freshcartpics/cartorderDetail.png';
import checkout from './Freshcartpics/cartcheckout1.png';
import contactform from './Freshcartpics/cartcontactform.png';

import {motion} from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
        const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]
    const FreshcartImages = [cartpic1, cartpic2, cartpic3, cartpic4, cartpic5, cartpic6,  cartpic7, cartpic8, cartpic9]
    const backend_images = [category, product, orderDetail, checkout, contactform]
    const {projectDetail} = useParams();
    const [imageWidth, setImageWidth] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
            },
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
            }
        ]
}
    return (
        <>
        {projectDetail === 'realstate' && (
        <div className='bg-[#0f3430]  h-full pt-32 text-white px-4 md:px-10 lg:px-40'>
               <h2><strong>Project Title: </strong>Zarobi Builders</h2>
            <p><strong>Project Description: Zarobi Builders</strong> is a modern and responsive construction and real 
            estate web platform designed to showcase residential, commercial, and infrastructure projects. 
            This project is ideal for construction firms looking to digitize their operations.The application 
            is built using React.js for a dynamic frontend and Django with MySQL for a secure and scalable 
            backend. Styling is handled using Tailwind CSS for a clean, responsive UI.
            </p>
            <div className='relative overflow-visible'>
                <Slider {...settings}>
                {images.map((img, index) => (
                    <motion.div
                    initial = {{opacity: 0, scale:0.8}}
                    whileInView = {{opacity: 1, scale: 1}}
                    transition = {{duration: 1}}
                    viewport = {{once: true}}
                    key={index}
                    className='px-4 mt-10'
                    >  
                   <img src={img} alt=""  onClick={() => setImageWidth(img)}/>
                      </motion.div>
                ))}
           </Slider>
         
            </div>
             
            <div className=' py-20 '>
                <img src={pic8} alt="" className='hover:scale-105 '/>
                <div className='mt-5'>
                <p>The Admin Dashboard is a simple yet effective interface designed to manage blog posts 
                    directly within the browser using LocalStorage.</p>
                    <h2 className='font-bold '>Key Features</h2>
                    <p><strong>View Posts: </strong>Instantly display all existing blog posts stored in the browser.</p>
                    <p><strong>Add New Blog: </strong>Create and store new blog entries locally with title, content, and optional tags.</p>
                    <p><strong>Edit Posts: </strong>Select any blog and update its content in real time — changes are saved in LocalStorage.</p>
                    <p><strong>Delete Blogs: </strong>Remove outdated or unwanted posts permanently from the local storage.</p>
                    </div>
            </div>
        </div>
)}

{projectDetail === 'shopping-cart' && (
    
        <div className='bg-[#0f3430]  h-full py-32 text-white px-4 md:px-10 lg:px-40 '>
               <h2><strong>Project Title: </strong>FreshCart</h2>
            <p><strong>Project Description:</strong> The E-Commerce Store <strong>FreshCart</strong> is a full-featured online shopping platform that
                 allows users to browse products, manage a shopping cart, customer contact with owner, and place orders. The application is
                  built using React.js for a dynamic frontend and Django with MySQL for a secure and scalable 
                  backend. Styling is handled using Tailwind CSS for a clean, responsive UI.
            </p>
            <h2 className='font-bold text-2xl mt-10'>Frontend Design</h2>
            <div>
                <Slider {...settings}>
                {FreshcartImages.map((img, index) => (
                    <motion.div
                    initial = {{opacity: 0, scale:0.8}}
                    whileInView = {{opacity: 1, scale: 1}}
                    transition = {{duration: 1}}
                    viewport = {{once: true}}
                    key={index}
                    className='px-4 mt-6 pb-5'
                    >  
                   <img src={img} alt=""  onClick={() => setImageWidth(img)}/>
                      </motion.div>
                ))}
           </Slider>
            </div>
             <h2 className='font-bold text-2xl mt-20'>Backend Design</h2>
            <div>
                <Slider {...settings}>
                {backend_images.map((img, index) => (
                    <motion.div
                    initial = {{opacity: 0, scale:0.8}}
                    whileInView = {{opacity: 1, scale: 1}}
                    transition = {{duration: 1}}
                    viewport = {{once: true}}
                    key={index}
                    className='px-4 mt-6 pb-5'
                    >  
                   <img src={img} alt=""  onClick={() => setImageWidth(img)}/>
                      </motion.div>
                ))}
           </Slider>
            </div>
             </div>
            )}
           
              {imageWidth && (
            <div className='fixed flex items-start inset-0 z-50 bg-black bg-opacity-70 overflow-y-auto'>
                <div className='relative'>
            <img src={imageWidth} alt=""/>
            <FaTimes className='absolute top-5 right-5 bg-black text-white' onClick={() => setImageWidth(null)}/>
            </div>
            </div>
           )}
           
        </>
    )
}
export default ProjectDetails;