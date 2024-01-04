//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Productivity from "./componenet1/productivity";
import {Priced} from "./priced/trellopriced";
import {Standerd} from "./priced/standered"
import {Premium} from "./priced/premium";
import {Sidebar} from "./sidenav/sidenav";
import {Trelloenter} from "./sidenav/trelloenter";
import {Compareplane} from "./priced/compareplans";
//import {Ticket} from "./ticket";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    {/* <Route path='/'element={<Priced/>}/>
    <Route path='/standered' element={<Standerd/>}/>
    <Route path='/Premium' element={<Premium/>}/>
    <Route path='/Compareplane' element={<Compareplane/>}></Route>  */}
    
     <Route path='/'element={<Productivity/>}/>
     <Route path='/Sidebar' element={<Sidebar/>}/>
    </Routes>
   </BrowserRouter> 
  {/* <Productivity/> */}
    </>
  );
}

export default App;
