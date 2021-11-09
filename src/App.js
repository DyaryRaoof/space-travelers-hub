import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  useEffect(() => {
    localStorage.removeItem('missions');
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
