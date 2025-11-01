import Home from "./pages/Home"
import TouristAttractionsDetails from "./pages/TouristAttractionsDetils"
import NavBar from "./components/NavBar"
import PersianNav from "./components/PersianNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar2 from "./components/NavBar2"
import InstructorDetails from "./pages/InstructorDetails"
import TouristAttractions from "./pages/TouristAttractions"

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/touristAttractions" element={<TouristAttractions />} />
          <Route path="/touristAttractions/:name" element={<TouristAttractionsDetails />} />
          <Route path="/instructors/:name" element={<InstructorDetails />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
