import "./App.css";
import {Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import EstStart from "./components/EstStart";
// import Estimation from './pages/Estimation';
import Portfolio from "./pages/Portfolio";
import ProductMergePage from "./components/ProductMergePage";
import Nonfound from "./pages/Notfound";
import EstQuestion from "./components/EstQuestion";
import EstResult from "./components/EstResult";
import ApiMap from "./pages/ApiMap";
import Login from "./pages/Login";
import Join from "./pages/Join";

// DataContext import

import { DataProvider } from "./data/DataContext";
// firebase
import "./data/firebase";

// Media Query import - 가장 아래 import 유지

import "./css/MediaQuery.css";
import MyPage from "./pages/MyPage";
import MyPageReciept from "./components/MyPageReciept";
import MyPageAccount from "./components/MyPageAccount";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <DataProvider>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route  index path='/' element={<Home />}/>
          <Route path='/join' element={<Join />}/>
          <Route path='/main' element={<Main />}>
            <Route path='/main/login' element={<Login />}/>
            <Route path='/main/mypage' element={<MyPage />} />
            <Route index  element={<Portfolio />}/>
            <Route path='/main/portfolio' element={<Portfolio />} />
            <Route path='/main/product/:id' element={<ProductMergePage />} /> 
            <Route path='/main/estimation' element={<EstStart /> }/>
            <Route path="/main/question" element={<EstQuestion />} />
            <Route path="/main/result" element={<EstResult />} />
            <Route path="/main/product" element={<ProductMergePage />} />
            <Route path="/main/map" element={<ApiMap />} />
          </Route>
          <Route path="*" element={<Nonfound />} />
        </Routes>
        </AnimatePresence>
      </DataProvider>
    </div>
  );
}

export default App;
