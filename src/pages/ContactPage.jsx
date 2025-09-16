import React from 'react'
import Contact from '../components/Contact_Page/Contact'
import Faq from '../components/Contact_Page/Faq'
import Chatbot from '../components/Contact_Page/Chatbot'
import Header from '../components/AboutPage/Header'
import Footer from '../components/AboutPage/Footer'


const ContactPage = () => {
  return (
    <>
      <Header/>
      <main className="pt-16"></main>
      <Contact />
      <Faq />
      <Chatbot />
      <Footer/>
    </>
  )
}

export default ContactPage