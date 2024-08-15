import { AnimatePresence } from "framer-motion";
import "./App.css";
import Hero from "./components/HeroPage/Hero";
import Skill from "./components/HeroPage/skill/Skill";
import LayoutPage from "./components/Layout/LayoutPage";
import { Route, Routes, useLocation } from "react-router-dom";
import MyWorks from "./components/MyWorks/MyWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/ContactMe/ContactMe";
function App() {
  const location = useLocation();
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<Hero />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/Myworks" element={<MyWorks />} />
            <Route path="/Testimonial" element={<Testimonials />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
