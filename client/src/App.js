import './App.css';
import Layout from "./modules/Layout.js";
import Index from './pages/Index';
import Entries from './pages/Entries';
import Gallery from './pages/Gallery';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Index /> } />
        <Route path="/entries" element={ <Entries /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/login" element={  <LoginPage />  } />
        <Route path="/register" element={  <RegisterPage />  } />
      </Route>
    </Routes>
  );
}

export default App;
