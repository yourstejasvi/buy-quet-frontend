import React from "react";
import Navigation from "./components/navigation";
import Body from "./components/landing_body";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      < Navigation />
      <div className="page-container">
      < Body />
      < About />
      {/* < Footer /> */}
      </div>
      
      
    </div>
  );
}

export default App;
