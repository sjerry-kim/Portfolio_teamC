import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import EstStart from './components/EstStart';
// import Estimation from './pages/Estimation';
import Portfolio from './pages/Portfolio';
import ProductMergePage from './components/ProductMergePage'
import Nonfound from './pages/Notfound';
import EstQuestion from './components/EstQuestion';
import EstResult from './components/EstResult';
import EstReciept from './components/EstReciept';
import ApiMap from './pages/ApiMap';
import Login from './pages/Login';
import Join from './pages/Join';

// DataContext import
import { DataProvider } from './data/DataContext'

// Media Query import - 가장 아래 import 유지
import './css/MediaQuery.css';
import CreateID from './pages/CreateID';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='join' element={<Join />}/>
          <Route path='/main' element={<Main />}>
            <Route index  element={<Portfolio />}/>
            <Route path='/main/portfolio' element={<Portfolio />} />

            <Route path='/main/product/:id' element={<ProductMergePage />} /> 

            <Route path='/main/estimation' element={<EstStart /> }/>
            <Route path="/main/question" element={<EstQuestion />} />
            <Route path="/main/result" element={<EstResult />} />
            <Route path="/main/reciept" element={<EstReciept />} />
            <Route path='/main/product' element={<ProductMergePage />} />
            <Route path='/main/map' element={<ApiMap />} />
          </Route>
          <Route path='*'element={<Nonfound />}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
