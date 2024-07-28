import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Appbar } from './components/Appbar';
import { About } from './components/About';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
