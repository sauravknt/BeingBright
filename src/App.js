
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUS from './Pages/AboutUS';
import ShopCategory from './Pages/ShopCategory';
import FieldVisit from './Pages/FieldVisit';
import OurMission from './Pages/OurMission';
import OurTeam from './Pages/OurTeam';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path='/' element={<AboutUS/>}/>
        <Route path='/FieldVisit' element={<FieldVisit/>}/>
        <Route path='/OurMission' element={<OurMission/>}/>
        <Route path='/OurTeam' element={<OurTeam/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
