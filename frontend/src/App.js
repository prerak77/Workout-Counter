import {BrowserRouter,Route,Routes} from 'react-router-dom';

//Pages and compents
import Home from './Pages/Home'
import Navbar from'./components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className = "pages">
            <Routes>
                <Route
                  path = '/'
                  element = {<Home/>}
                />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
