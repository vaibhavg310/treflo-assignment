import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './components/home/home.component'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataAsync } from './store/menu/menu.action';


const App = () => {

const dispatch = useDispatch();
 
useEffect(() => {
  dispatch(fetchDataAsync());
}, [dispatch])


  return(
    <Routes>
      <Route path='/' element={<Navigation/>}> 
        <Route index element={<Home/>} />
      </Route>
     </Routes>   

  )
 
}

export default App;
