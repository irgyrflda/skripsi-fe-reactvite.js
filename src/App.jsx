import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About/Index';
import Beranda from './Pages/Beranda/Index';
import NotFound from './Pages/NoutFound/Index';
import Contoh from './Pages/Contoh-fetch';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contoh-fetch-api' element={<Contoh />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
