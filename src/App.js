import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from './components/Desktop/Desktop';

function App() {
  return (
    <div className="App">
      <Desktop />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
