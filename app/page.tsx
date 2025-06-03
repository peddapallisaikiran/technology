import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TechnologyHero from "@/components/TechnologyHero"
import TechnologySolutions from "@/components/TechnologySolutions"
import SectorSolutions from "@/components/SectorSolutions"
import ESGSustainability from "@/components/ESGSustainability"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  console.log("Home page rendered")
  
  return (
    <div className="min-h-screen font-['Inter']">
      {/* <Header /> */}
      <main>
        <TechnologyHero />
        <TechnologySolutions />
        <SectorSolutions />
        {/* <ESGSustainability /> */}
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
