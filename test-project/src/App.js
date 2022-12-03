import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Test from './pages/Test';
import Estimation from './pages/Estimation'
import Portfolio from './pages/Portfolio';
import ProductMergePage from './components/ProductMergePage'

import { DataProvider } from './data/DataContext'
import EstStart from './components/EstStart';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/main/test' element={<Test />} />
          <Route path='/estimation/*' element={<EstStart /> }/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/product' element={<ProductMergePage />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
