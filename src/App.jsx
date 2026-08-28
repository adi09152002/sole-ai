import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import SimpleFlow from "./components/SimpleFlow/SimpleFLow";
import ReconciliationFlow from "./components/ReconciliationFlow/ReconciliationFlow";
import RealClose from "./components/RealClose/RealClose";
import FutureSolutions from "./components/FutureSolutions/FutureSolutions";
import OurApproach from "./components/OurApproach/OurApproach";
import FinalCta from "./components/FinalCta/FinalCta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Overview />
      <SimpleFlow />
      <ReconciliationFlow />
      <RealClose />
      <FutureSolutions />
      <OurApproach  />
      <FinalCta />
      <Footer   />

    </div>
  );
}

export default App;
