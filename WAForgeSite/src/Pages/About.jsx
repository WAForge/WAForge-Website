import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection';
import SectionBreak from '../assets/SectionBreak';
import video1 from "../assets/Videos/1.mp4";
import video2 from "../assets/Videos/2.mp4";
import video3 from "../assets/Videos/3.mp4";
import ServiceSection from '../assets/Section';
import HackathonSection from '../assets/HackathonSection';
import ImageHorizontalCard from '../assets/ImageCard';
import CardSubtitle from '../assets/cardSubtitle';
import hackathon from '../assets/Pictures/hackathon.png';
import Button from '../assets/Button';
import Form from '../assets/Form';
import SocialMedias from '../assets/SocialMedia';
import Person from '../assets/Pictures/person.jpg';
import Footer from  '../assets/Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Home = () => {
    const [count, setCount] = useState(0)
  const ref = useRef(null)
  const doSomething = () => {
    console.log('scrolling');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
    return ( 
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
                    <Header />
                    
                    <VideoSection videos = {[video1, video2, video3]} isHero = {true} element={<button onClick={() => doSomething()} className='relative inline-flex items-center justify-center p-0.5 mt-10 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '><span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>About</span></button>}/>
                    <SectionBreak />

                    
                    <Footer />
              </div>
     );
}
 
export default Home;