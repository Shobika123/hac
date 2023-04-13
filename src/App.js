import logo from './logo.svg';
import './App.css';
import React ,{Suspense}from 'react';
import  {Switch,Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
const Newss1= React.lazy(()=>import('./components/News1'));
const Newss2= React.lazy(()=>import('./components/News2'));
const Newss3= React.lazy(()=>import('./components/News3'));

function App() {
  return (
    <div className="App">
    <h1 style={{color:"blue"}}>News</h1>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/new" element={ <Suspense fallback={<div>Loading...</div>}>
        <  Newss1 />
      </Suspense>}/>
      <Route exact path="/new2" element={ <Suspense fallback={<div>Loading...</div>}>
        <  Newss2 />
      </Suspense>}/>
      <Route exact path="/new3" element={ <Suspense fallback={<div>Loading...</div>}>
        <  Newss3 />
      </Suspense>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
