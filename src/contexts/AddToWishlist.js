import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem('wishlist');
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  } else {
    return [];
  }
};

const addToStoredWishlist = (id, productTitle) => {
  const storedWishlist = getStoredWishlist();
  
  if (storedWishlist.includes(id)) {
    toast.error(`${productTitle} is already in your wishlist.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  } else {
    storedWishlist.push(id);
    localStorage.setItem('wishlist', JSON.stringify(storedWishlist));

    toast.success(`${productTitle} added to your wishlist.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }
};

const removeFromStoredWishlist = (id, productTitle) => {
  const storedWishlist = getStoredWishlist();
  const updatedWishlist = storedWishlist.filter(itemId => itemId !== id);
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

 
};

const clearWishlist = () => {
  localStorage.removeItem('wishlist');
  toast.info('Wishlist cleared.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

export { getStoredWishlist, addToStoredWishlist, removeFromStoredWishlist, clearWishlist };
