import React from 'react';
import GlobalStyles from "./GlobalStyles.styles"
import NavBar from "./components/NavBar"
import Home from "./Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;