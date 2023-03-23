import './App.css';
import Home from './Home.js'
import Button from './Button.js'
import {
  Routes,
  Route,
} from "react-router-dom";
import Icon from '@mui/material/Icon';
import { Doughnut } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/button' element={ <Button />} />
      </Routes>
    </div>
  );
}

export default App;