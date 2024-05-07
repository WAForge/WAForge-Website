import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection';
import SectionBreak from '../assets/SectionBreak';
import video1 from "../assets/Videos/1.mp4";
import video2 from "../assets/Videos/2.mp4";
import video3 from "../assets/Videos/3.mp4";
import loopVideo from '../assets/Videos/Loop.mp4';
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
                    
                    <VideoSection videos = {[loopVideo]} isHero = {false} element={<h1 className="z-10 text-white font-Poppins font-[200] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh]">WELCOME TO <span className='biggerTextGlow'>WAFORGE</span></h1>} />
                    <SectionBreak />
                    
                    
                    <Footer />
              </div>
     );
}
 
export default Home;