import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import PopularCourses from "./components/PopularCourses";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <About />
      <PopularCourses />
      <ContactUs />  
      <Footer/>
    </>
  );
}
