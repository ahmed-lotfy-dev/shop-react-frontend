import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}
