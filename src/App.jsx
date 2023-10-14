import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda/Index';
import NotFound from './Pages/NoutFound/Index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
