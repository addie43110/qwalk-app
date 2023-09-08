import React, { useEffect, useState } from "react";

import MainPage from './MainPage';

function App() {

  const [windowDimension, setWindowDimension] = useState(null);
  
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const isMobile = windowDimension <= 750;

  return (
    <MainPage isMobile={isMobile}/>
  );
}

export default App;
