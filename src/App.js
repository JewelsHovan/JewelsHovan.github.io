import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesContainer from "./pages/RoutesContainer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
      <Router>
      <div className="min-h-screen flex flex-col">
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
