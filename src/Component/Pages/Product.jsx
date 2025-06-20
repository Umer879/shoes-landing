import React from 'react'
import ProductGrid from '../About/Brands/Brands'
import ProductMap from '../Product/ProductMap'
import Footer from '../Footer/Footer'
const Product = () => {
  return (
    <div>
      <h2 className='mt-3 px-3'>Shop Categories <span className='fw-lighter'>|</span>
      </h2>
<hr />
      <ProductMap />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default Product
