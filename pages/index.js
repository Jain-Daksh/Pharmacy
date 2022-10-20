import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/Homepage'
import WhyUs from '../components/WhyUs'
import Info from '../components/Info'
import Offer from '../components/Offer'
import Category from '../components/Courses'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import CareerPath from '../components/CareerPath'
import Infrastructure from '../components/Infrastructure'
import Faculties from '../components/Faculties'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Gurukul Pharmacy</title>
      </Head>
      <Homepage />
      <WhyUs />
      <Info />
      {/* <Offer /> */}
      <Infrastructure />
      <Category />
      <Faculties />
      <CareerPath />
      <Gallery />
      <Testimonial />
      <ContactUs />
      <Footer />
    
    </div>
  )
}
