import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import Product from './components/Product';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUser/>}/>
          <Route path='/search' element={<SearchUser/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
