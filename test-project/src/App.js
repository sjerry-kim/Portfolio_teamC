import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Layout';
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
          <Route index path='/home' element={<Home />}/>
          <Route path='/' element={<Main />}>
            <Route path='/estimation/*' element={<EstStart /> }/>
            <Route index path='/portfolio' element={<Portfolio />}/>
            <Route path='/product' element={<ProductMergePage />} />
          </Route>
          <Route path='*'element={<Nonfound />}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
