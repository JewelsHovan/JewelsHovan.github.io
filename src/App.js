import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesContainer from "./pages/RoutesContainer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <RoutesContainer />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

