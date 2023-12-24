import Header from "./components/header";
import Home from "./components/home";
import Features from "./components/features";
import SavingMoneySection from "./components/saving-money-section";
import HowItWorks from "./components/how-it-works";
import Testimonial from "./components/testimonial";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import Download from "./components/download";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-color-primary text-color-white tracking-wider overflow-hidden">
      <Header />
      <Home />
      <Features />
      <SavingMoneySection />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <Blog />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
