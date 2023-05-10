import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Table from './Table'
import Leadership from './Leadership'
import Counter from './Counter'
import Logos from './Logos'
import Testimonial from './Testimonial'
import News from './News'
import Discount from './Discount'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Table />
      {/* <Leadership /> */}
      {/* <Counter /> */}
      {/* <Logos /> */}
      <Testimonial />
      <News />
      <Discount />
      <Footer />
    </div>
  )
}
