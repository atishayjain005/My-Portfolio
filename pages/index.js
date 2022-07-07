import Image from "next/image";
import About from "../src/components/About/About";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Navbar from "../src/components/Navbar/Navbar";
import SkillSection from "../src/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <SkillSection />
    
      <About />
    </div>
  );
}
