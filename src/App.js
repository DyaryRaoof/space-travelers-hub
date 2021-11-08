import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/missions" component={MyProfile} />
      </Routes>
    </Router>
  );
}

export default App;
