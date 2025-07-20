import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import icon2 from '../../assets/images/icon2.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Layout({ children }) {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Navbar />
      <div className="md:mt-35 mt-17">
        {children}
      </div>
      <div className=""><FloatingWhatsApp allowClickAway={true} phoneNumber='9891277262521' accountName='پشتبانی ورونا لایتینگ' avatar={icon2} statusMessage='در اسرع وقت جوابگو سوالات شما هستیم' chatMessage='سلام چجوری می توانم کمکتون کنم؟'/></div>
      <div className="relative bottom-0 mt-100">
        <Footer />
      </div>
    </div>
  )
}

export default Layout