import {Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
