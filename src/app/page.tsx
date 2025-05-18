import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Profiles from "../components/Profiles";
import Footer from "../components/Footer";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Profiles />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
