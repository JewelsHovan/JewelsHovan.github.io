import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesContainer from "./pages/RoutesContainer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Apply background color to the entire document body
  useEffect(() => {
    // Set background color and text styles for the entire body
    document.body.classList.add('bg-dark-blue');
    document.body.classList.add('text-text-light');
    
    // Clean up function to remove classes when component unmounts
    return () => {
      document.body.classList.remove('bg-dark-blue');
      document.body.classList.remove('text-text-light');
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark-blue text-text-light">
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
