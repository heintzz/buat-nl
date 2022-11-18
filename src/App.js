import { Route, Routes } from 'react-router-dom'
import Community from './components/Community'
import FindIT from './components/FindIT'
import Home from './components/Home'
import OurTeam from './components/OurTeam'
import WhatWeDo from './components/WhatWeDo'
import Navbar from './components/Navbar'

import NWDC from './components/NWDC'
import NADC from './components/NADC'
import NCPC from './components/NCPC'
import NLNC from './components/NLNC'
import NUXC from './components/NUXC'
import NDDC from './components/NDDC'
import Footer from './components/Footer'
import Benefits from './components/Benefits'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Home /> */}
              <Home />
              <Community />
              <WhatWeDo />
              <Benefits />
              <Footer />
            </>
          }
        />
        <Route path="/findit" element={<FindIT />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/nwdc" element={<NWDC />} />
        <Route path="/ncpc" element={<NCPC />} />
        <Route path="/nadc" element={<NADC />} />
        <Route path="/nuxc" element={<NUXC />} />
        <Route path="/nadc" element={<NADC />} />
        <Route path="/nddc" element={<NDDC />} />
        <Route path="/nlnc" element={<NLNC />} />
      </Routes>
    </div>
  )
}

export default App
