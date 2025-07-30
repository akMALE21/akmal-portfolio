import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white text-black">
        <Navbar/>
        <main className="">
          <Hero />
          <About />
          <Experiences />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
