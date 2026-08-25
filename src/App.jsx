import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import SimpleFlow from "./components/SimpleFlow/SimpleFLow";
import ReconciliationFlow from "./components/ReconciliationFlow/ReconciliationFlow";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Overview />
      <SimpleFlow />
      <ReconciliationFlow />
    </div>
  );
}

export default App;
