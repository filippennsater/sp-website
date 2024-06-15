import React from 'react'
import '../../App.css'
import HomeSection from './HomeSection';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


function Home (){
    return (
    <>
      <Navbar/>
      <HomeSection/>
      <Footer/>
    </>
    );
}

export default Home;