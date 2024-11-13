import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/NavBar';
import { Helmet } from 'react-helmet';
const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Home - GadgetHaven</title>
        <meta name="description" content="Manage your cart and wishlist items on GadgetHaven." />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
