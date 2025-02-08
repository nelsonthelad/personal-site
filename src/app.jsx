import React from 'react'
import NavBar from './components/NavBar'
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
        <div className="pt-20">
            <NavBar />
        </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300">a collection of my projects</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Nelson Daniels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

