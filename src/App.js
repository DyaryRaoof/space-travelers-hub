import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" />
        <Route path="/missions" />
      </Routes>
    </>
  );
}

export default App;
