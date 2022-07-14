import Image from "next/image";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Resume from "../src/components/Resume/Resume";
import SkillSection from "../src/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <SkillSection />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
