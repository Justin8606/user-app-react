import logo from './logo.svg';
import './App.css';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
