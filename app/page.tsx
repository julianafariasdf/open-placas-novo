import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FacadeShowcase from "@/components/sections/FacadeShowcase";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import AboutShowcase from "@/components/sections/AboutShowcase";
import ContactShowcase from "@/components/sections/ContactShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FacadeShowcase />
        <PortfolioShowcase />
        <AboutShowcase />
        <ContactShowcase />
      </main>
      <Footer />
    </>
  );
}
