import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesContainer from "./pages/RoutesContainer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Container fluid className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-column"> {/* Add this div */}
          <RoutesContainer />
        </div>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;

