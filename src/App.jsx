import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import About from './components/sections/About';
import Booking from './components/sections/Booking';
import Leadership from './components/sections/Leadership';
import Projects from './components/sections/Projects';
import Expertise from './components/sections/Expertise';
import Insights from './components/sections/Insights';
import Merchandise from './components/sections/Merchandise';
import Testimonials from './components/sections/Testimonials';
import Referrals from './components/sections/Referrals';
import Contact from './components/sections/Contact';

function App() {
 return (
 <div className="min-h-screen bg-white">
 <Navbar />
 <main>
 <Hero />
 <TrustStrip />
 <About />
 <Booking />
 <Leadership />
 <Projects />
 <Expertise />
 <Insights />
 <Merchandise />
 <Testimonials />
 {/* <Referrals /> */}
 <Contact />
 </main>
 <Footer />
 </div>
 );
}

export default App;
