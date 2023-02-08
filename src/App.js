import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:coinId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
