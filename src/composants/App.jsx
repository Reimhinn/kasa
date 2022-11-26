import '../styles/App.css';
import Homepage from './Homepage';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className='app'>

      <Router>

      <Header />



        <Routes>

          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<ErrorPage />}/>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
