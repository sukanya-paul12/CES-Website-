import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Components/Pages/Home/Home'
import Gallery from './Components/Pages/Gallery/Gallery'
import AnnouncementsPage from './Components/Pages/Announcements/AnnouncementsPage'
import MerchandisePage from './Components/Pages/Merchandise/MerchandisePage'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Home scrollTo="team" />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


