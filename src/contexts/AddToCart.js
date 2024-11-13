import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredCartList = () => {
    const storedCartList = localStorage.getItem('cartList');
    if (storedCartList) {
        return JSON.parse(storedCartList);
    } else {
        return []; 
    }
};

const addToStoredCartList = (id, productTitle) => {
    const storedCartList = getStoredCartList();

    if (storedCartList.includes(id)) {
        toast.error(`${productTitle} already exists in your cart.`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    } else {
        storedCartList.push(id);
        localStorage.setItem('cartList', JSON.stringify(storedCartList));

        toast.success(`${productTitle} added to your cart.`, {
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

export { addToStoredCartList, getStoredCartList };
