import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Nav_Filter from '../Components/Nav_Filter'
import Subcategories from '../Components/Subcategories'

const CategoryPage = () => {
  return (
    <>
    <Header/>
    <img style={{width:"100%"}} src='1.png'/>
    <Nav_Filter/>
    <Subcategories/>
    <Footer/>
    </>
  )
}

export default CategoryPage