import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'
import Footer from './components/Footer'
import Credit from './components/Credit'

const CardLayout = () =>{
  return (
    <div className='container'>
          <Card bg="#8e44ad" title="about Us" content="CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from expert mentors with team training"/>
          <Card bg="#e74c3c" title="Our Service"/>
          <Card bg="#e67e22" title="Our AIM"/>
          <Card bg="#2ecc71" title="Why E-Web?"/>
      </div>
  )
} 


const page = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <CardLayout/>
      <Footer/>
      <Credit/>
    </>
  )
}

export default page