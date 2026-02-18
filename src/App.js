import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesContainer from "./pages/RoutesContainer";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add('bg-cyber-bg');
    document.body.classList.add('text-cyber-fg');
    return () => {
      document.body.classList.remove('bg-cyber-bg');
      document.body.classList.remove('text-cyber-fg');
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cyber-bg text-cyber-fg font-cyber-body">
        <div className="cyber-scanline-overlay" aria-hidden="true" />
        <div className="pt-16">
          <Header />
          <main className="flex-grow py-4">
            <RoutesContainer />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
