
import './App.css';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import ApartmentsArray from './components/apartmentsArray/apartmentsArray';
import Login from './components/login/login';
import SingUp from './components/signUp/signUp'
import MemberDetails from './components/memberDetails/memberDetails'

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/SignUp' exact element={<SingUp />} />
          <Route path='/ApartmentsArray' exact element={<ApartmentsArray />} />
          <Route path='/MemberDetails' exact element={<MemberDetails/>} />

       </Routes>
      </BrowserRouter>
    );
  } 


export default App;


