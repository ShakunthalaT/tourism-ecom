import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import ConfirmDetails from './components/ConfirmDetails'
import Booking from './components/Booking'

import './App.css';

const App = ()=>(
  <>
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/booking" Component={Booking}/>
    <Route path="/confirmdetails" Component={ConfirmDetails}/>
  </Routes>
  </>
)

export default App;
