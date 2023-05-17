import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Singlesignon from './components/Singlesignon';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Resetpassword from './components/Resetpassword'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Singlesignon/*" element={<Singlesignon />} />
        <Route path="/Login/*" element={<Login />} />
        <Route path="/Resetpassword/*" element={<Resetpassword />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
