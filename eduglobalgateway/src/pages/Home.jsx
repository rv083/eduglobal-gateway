// src/pages/Home.jsx
import React, { useState } from 'react'

/*
  EduGlobalGateway — Home Page (single-file component set)
  - Logo & site name enlarged
  - Navbar enlarged and updated with new headings
  - "Study Abroad" has a dropdown (IELTS/PTE, SOP/LOR, Profiling)
  - Mobile menu + dropdown toggle included
*/

function Topbar(){
  return (
    <div className="w-full bg-gradient-to-r from-blue-600/95 to-transparent text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="font-medium">📞 +91 98765 43210</span>
          <span className="text-xs opacity-90">|</span>
          <a href="mailto:hello@eduglobalgateway.com" className="underline text-sm">hello@eduglobalgateway.com</a>
        </div>
        <div className="text-xs text-white/90">Open: Mon - Sat · 10:00 AM - 6:00 PM</div>
      </div>
    </div>
  )
}

function Header(){
  const [mobileOpen, setMobileOpen] = useState(false)
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false) // mobile dropdown toggle

  return (
    <header className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Larger logo */}
        <div className="w-16 h-16 rounded-lg bg-yellow-300 flex items-center justify-center text-blue-800 font-extrabold text-xl shadow-sm">
          EGG
        </div>

        {/* Larger site name */}
        <div>
          <h1 className="text-2xl font-extrabold">EduGlobalGateway</h1>
          <p className="text-sm text-slate-500">Your pathway to study abroad</p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6 text-base">
        <div className="relative group">
          <button
            className="flex items-center gap-2 hover:text-blue-600 focus:outline-none"
            aria-expanded="false"
            aria-haspopup="menu"
          >
            Study Abroad
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {/* Dropdown (shows on hover via group-hover) */}
          <div className="absolute right-0 mt-3 w-48 bg-white border rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
            <a className="block px-4 py-2 text-sm hover:bg-blue-50" href="#">IELTS / PTE</a>
            <a className="block px-4 py-2 text-sm hover:bg-blue-50" href="#">SOP / LOR</a>
            <a className="block px-4 py-2 text-sm hover:bg-blue-50" href="#">Profiling</a>
          </div>
        </div>

        <a href="#services" className="hover:text-blue-600">Career Counselling</a>
        <a href="#corporate" className="hover:text-blue-600">Corporate Training</a>
        <a href="#universities" className="hover:text-blue-600">Universities</a>
        <a href="#advisory" className="hover:text-blue-600">Advisory Board</a>
        <a href="#about" className="hover:text-blue-600">About Us</a>

        <a href="#contact" className="px-3 py-2 rounded-md bg-blue-600 text-white">Contact</a>
      </nav>

      {/* Mobile controls */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          className="border border-blue-600 text-blue-600 px-3 py-2 rounded-md"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white border rounded-md shadow-lg p-4 md:hidden z-50">
          <ul className="flex flex-col gap-2 text-base">
            <li>
              <button
                className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-blue-50"
                onClick={() => setStudyDropdownOpen(s => !s)}
                aria-expanded={studyDropdownOpen}
                aria-controls="mobile-study-menu"
              >
                Study Abroad
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={studyDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>

              {studyDropdownOpen && (
                <div id="mobile-study-menu" className="mt-2 ml-4 flex flex-col gap-1">
                  <a className="px-2 py-2 rounded hover:bg-blue-50" href="#">IELTS / PTE</a>
                  <a className="px-2 py-2 rounded hover:bg-blue-50" href="#">SOP / LOR</a>
                  <a className="px-2 py-2 rounded hover:bg-blue-50" href="#">Profiling</a>
                </div>
              )}
            </li>

            <li><a className="block px-2 py-2 rounded hover:bg-blue-50" href="#services">Career Counselling</a></li>
            <li><a className="block px-2 py-2 rounded hover:bg-blue-50" href="#corporate">Corporate Training</a></li>
            <li><a className="block px-2 py-2 rounded hover:bg-blue-50" href="#universities">Universities</a></li>
            <li><a className="block px-2 py-2 rounded hover:bg-blue-50" href="#advisory">Advisory Board</a></li>
            <li><a className="block px-2 py-2 rounded hover:bg-blue-50" href="#about">About Us</a></li>

            <li><a className="mt-2 inline-block px-4 py-2 rounded-md bg-blue-600 text-white text-center" href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-tight">Study Abroad made simple — personalised guidance, real results</h2>
        <p className="text-slate-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-block px-5 py-3 rounded-lg bg-blue-600 text-white font-medium">Get Free Counselling</a>
          <a href="#services" className="inline-block px-5 py-3 rounded-lg border border-blue-200 text-blue-700 font-medium">Explore Services</a>
        </div>

        <div className="services-grid mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm border">Counselling</div>
          <div className="bg-white p-3 rounded-lg shadow-sm border">Application Help</div>
          <div className="bg-white p-3 rounded-lg shadow-sm border">Visa Guidance</div>
          <div className="bg-white p-3 rounded-lg shadow-sm border">Test Prep</div>
          <div className="bg-white p-3 rounded-lg shadow-sm border">Scholarships</div>
          <div className="bg-white p-3 rounded-lg shadow-sm border">Pre-departure</div>
        </div>
      </div>

      <aside className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="font-semibold text-lg">Quick Enquiry</h3>
        <p className="text-sm text-slate-500 mt-2">Fill basic details and our counsellor will call you.</p>
        <QuickEnquiryForm />
      </aside>
    </section>
  )
}

function QuickEnquiryForm(){
  return (
    <form className="mt-4 grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (placeholder)')}}>
      <input className="border rounded-md px-3 py-2" placeholder="Full name" aria-label="Full name" />
      <input className="border rounded-md px-3 py-2" placeholder="Phone / WhatsApp" aria-label="Phone" />
      <select className="border rounded-md px-3 py-2" aria-label="Country">
        <option>Interested country</option>
        <option>Canada</option>
        <option>Australia</option>
        <option>USA</option>
      </select>
      <button className="btn bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
    </form>
  )
}

// Counters (only "Universities")
function Counters(){
  const items = [
    {num:'200+', label:'Universities'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {items.map(i=> (
          <div key={i.label} className="p-6 bg-blue-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-700">{i.num}</div>
            <div className="text-sm text-slate-600">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Countries(){
  const countries = ['Canada','USA','Australia','UK','Germany','France']
  return (
    <section id="countries" className="max-w-6xl mx-auto px-4 mt-8">
      <h4 className="text-lg font-semibold">Popular Destinations</h4>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-3">
        {countries.map(c=> (
          <div key={c} className="py-3 rounded-md bg-blue-50 text-center font-medium">{c}</div>
        ))}
      </div>
    </section>
  )
}

function ServicesGrid(){
  const services = [
    'Career Counselling','University Shortlisting','Application Assistance','Document Prep','Visa Guidance','Test Preparation','Scholarship Help','Pre-departure Briefing'
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 mt-8">
      <h4 className="text-lg font-semibold">Services</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {services.map(s=> (
          <div key={s} className="p-4 bg-white rounded-lg border shadow-sm">
            <div className="h-28 bg-slate-100 rounded-md mb-3 flex items-center justify-center">Image</div>
            <h5 className="font-semibold">{s}</h5>
            <p className="text-sm text-slate-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="inline-block mt-3 text-sm text-blue-600" href="#">Read more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQ(){
  const faqs = [
    {q:'How long does admission take?', a:'Lorem ipsum dolor sit amet, consectetur.'},
    {q:'What about scholarships?', a:'Lorem ipsum dolor sit amet, consectetur.'},
    {q:'Do you help with accommodation?', a:'Lorem ipsum dolor sit amet, consectetur.'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8 faq">
      <h4 className="text-lg font-semibold">FAQ</h4>
      <div className="mt-3 bg-white rounded-lg border">
        {faqs.map((f,idx)=> (
          <div key={idx} className="p-4 border-b last:border-b-0">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{f.q}</div>
                <div className="text-sm text-slate-500 mt-1">{f.a}</div>
              </div>
              <div className="text-xl text-slate-300">+</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials(){
  const t = [
    'Great guidance — helped me through visa and admission.',
    'Very supportive counsellors and easy process.',
    'I got scholarship assistance — highly recommended.'
  ]
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 mt-8">
      <h4 className="text-lg font-semibold">What students say</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {t.map((txt, i)=> (
          <div key={i} className="p-4 bg-white rounded-md border">“{txt}”</div>
        ))}
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer id="contact" className="max-w-6xl mx-auto px-4 mt-12 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <h4 className="text-xl font-bold">Get in touch</h4>
          <p className="text-slate-600 mt-2">Address: Lucknow · Phone: +91 98765 43210 · Email: hello@eduglobalgateway.com</p>
        </div>

        <form className="bg-white p-6 rounded-lg border shadow-sm" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (placeholder)')}}>
          <input className="w-full p-3 border rounded-md mb-3" placeholder="Name" />
          <input className="w-full p-3 border rounded-md mb-3" placeholder="Email / Phone" />
          <textarea className="w-full p-3 border rounded-md mb-3" rows="4" placeholder="Message"></textarea>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Send message</button>
        </form>
      </div>

      <div className="text-center text-slate-500 mt-8">© {new Date().getFullYear()} EduGlobalGateway — All rights reserved</div>
    </footer>
  )
}

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Counters />
        <Countries />
        <ServicesGrid />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
