import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeCom from './component/HomeCom';
import Headers from './component/Headers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeCom/>} />
        {/* <Route path='/' element={<Headers/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
