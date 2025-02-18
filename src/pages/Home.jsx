import BlurBackground from "../components/BlurBackground";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
   return (
      <>
         <BlurBackground />
         <Navbar />
         <Landing />
         <Projects />
         <Skills />
         <Education />
         <Contact />
         <Footer />
      </>
   );
};

export default Home;
