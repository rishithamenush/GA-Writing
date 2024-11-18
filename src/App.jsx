import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Institute from "./components/InstitutePhotos/Institute";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="myContainer">
        <Title subTitle="Our Programs" title="What we help's to you" />
        <Programs />
        <About />
        <Title subTitle="Our Services" title="Explore Our Offerings" />
        <Institute />
        <Title subTitle="Feedback" title="What Our Clients Say About Us" />

        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch With Us" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
