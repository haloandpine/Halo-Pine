import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ServicesHero from "./components/ServicesHero";
import ServicesCards from "./components/ServicesCards";
import MeetPlanner from "./components/MeetPlanner";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesHero />
      <ServicesCards />
      <MeetPlanner />
      <FAQ />
      <ContactCTA />
      <Footer />
    
    </>
    
  );
}