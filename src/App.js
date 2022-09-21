// import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Page/Main/Main';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Contact } from './Components/Page/Contact/Contact';


function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Contact' element={<Contact/>}/>        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
