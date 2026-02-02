// import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import List from './pages/List';
import Membership from './pages/Membership';
import Footer from './pages/Footer';

function App() {






  return (
    <div className="App">

      <header className='header'>
        <NavLink to='/'>
          <img src="/images/logo.png" alt="메인 로고" />
        </NavLink>
        <nav className='gnb'>
          <NavLink className='gnb-list' to='/'>소개</NavLink>
          <NavLink className='gnb-list' to='/01'>출연진</NavLink>
          <NavLink className='gnb-list' to='/02'>회차</NavLink>
          <NavLink className='gnb-list' to='/03'>멤버십</NavLink>
        </nav>
      </header>

      <main className='wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/01' element={<About />} />
          <Route path='/02' element={<List />} />
          <Route path='/03' element={<Membership />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
