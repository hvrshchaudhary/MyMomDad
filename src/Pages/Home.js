import React from 'react'
import Banner from '../Components/Banner'
import BestSellingProducts from '../Components/BestSellingProducts'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ShopOcassionWise from '../Components/ShopOcassionWise'
import Slider from '../Components/Slider'
import SocialProof from '../Components/SocialProof'
import TrendingProducts from '../Components/TrendingProducts'

const Home = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ShopOcassionWise/>
      <Banner/>
      <TrendingProducts/>
      <SocialProof/>
      <BestSellingProducts/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home