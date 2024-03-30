import LogoBeras from '../../assets/logo-beras.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  let params = useLocation()
  // console.log('kodentol', params.pathname);

  return (
    <div className="sticky top-0 z-50">
      <div >
        <div className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 opacity-90 h-20 flex justify-between ">
          <div className="w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4">
            <img className="rounded-lg w-32" src={LogoBeras} alt="addify logo" />
          </div>
          <div className="w-full h-full flex justify-end items-center text-white">
            <nav className='nav-wrapper'>
              <ul className='nav-menues'>
                <li>
                  <a href={
                    (params.pathname === '/Hasil') ? '/' : '#home'
                  }>Beranda
                  </a>
                </li>
                <li>
                <a href={
                    (params.pathname === '/Hasil') ? '/' : '#about'
                  }>Tentang Kami</a>
                </li>
                <li>
                  <Link to='/Hasil'>Hasil</Link>
                </li>
                <li>
                  <Link to='#'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
