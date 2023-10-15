// import './Layout.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';
import './CustomLayout.css';

const CustomLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className='main-content'>{children}</main>
      <Footer />
    </Fragment>
  );
};

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLayout;
