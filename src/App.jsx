import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "./layout/Sidebar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Tools from "./pages/Tools"

function App() {
  const location = useLocation()

  return (
    <div className="relative flex min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600 opacity-10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>


      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col">

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 pb-20"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer />

      </div>

    </div>
  )
}

export default App
