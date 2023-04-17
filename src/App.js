
import { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';

function App() {
  const [allHabit,setAllHabit] = useState([]);
  const [id,setId] = useState('');

  const addHabit = (habit) => {
    setAllHabit((prevHabit => [...prevHabit,habit]));

  }
  const getId = (id) => {
    setAllHabit(allHabit);
    setId(id);
    console.log("Set is id ",id);
    console.log(allHabit);
  }



  return (
    <>
    <Nav />
    <Routes>
      
      <Route exact path='/' element={ <Home />}  />
      <Route exact path='/details' element={<Details />}  />
    </Routes>
    </>
    
  );
}

export default App;
