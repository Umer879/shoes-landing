import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero Section/Hero'
import Arrivals from './Arrivals/Arrivals'
import ProductMap from './Product/ProductMap'
import SingleCard from './Cards/SingleCard'
import CardMap from './Cards/CardMap'
import Footer from './Footer/Footer'
const Component = () => {
  return (
   <div>
   <Hero />
   <Arrivals heading={'new arrivals'}/>
   <ProductMap />
   <Arrivals heading={'featured'}/>
   <CardMap />
   <Footer />
   </div>
  )
}

export default Component
