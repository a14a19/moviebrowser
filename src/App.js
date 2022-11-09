import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import AboutView from './Components/about';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<AboutView />}/>
      </Routes>
    </div>
  );
}

export default App;
