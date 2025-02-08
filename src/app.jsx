import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
        <div className="flex pt-20 justify-center items-center">
            <NavBar />
        </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300">a collection of my projects</p>
        </section>
      </div>

      <div className="flex justify-center items-center">
        <Footer />  
      </div>
    </div>
  )
}

