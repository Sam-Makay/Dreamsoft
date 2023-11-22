import React from 'react'
import { createContext, useState } from 'react'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import Faq from './components/Faq'

export const sectionSwitch = createContext()


function App() {
  const [activeSection,setActiveSection] = useState('About')
  const sectionToggler = (value) => setActiveSection(value)   

  return (
    <sectionSwitch.Provider value={[activeSection, setActiveSection, sectionToggler]}>
        <Navbar />
        <About />
        <Services />
        <Blogs />
        <Faq />
        <Footer />
    </sectionSwitch.Provider>
  )
}

export default App
