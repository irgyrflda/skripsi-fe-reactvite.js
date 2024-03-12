import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda/Index';
import NotFound from './Pages/NoutFound/Index';
import Contoh from './Pages/Contoh-fetch';
import Hasil from './Pages/Hasil/Index';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Hasil' element={<Hasil />} />
          <Route path='/Contoh-fetch-api' element={<Contoh />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
