import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeCom from './component/HomeCom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeCom/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
