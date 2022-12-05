import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import EstStart from './components/EstStart';
import Portfolio from './pages/Portfolio';
import ProductMergePage from './components/ProductMergePage'
import Nonfound from './pages/Notfound';

import { DataProvider } from './data/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/main' element={<Main />}>
            <Route path='/main/estimation/*' element={<EstStart /> }/>
            <Route index  element={<Portfolio />}/>
            <Route path='/main/portfolio' element={<Portfolio />} />
            <Route path='/main/product' element={<ProductMergePage />} />
          </Route>
          <Route path='*'element={<Nonfound />}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
