# GadgetHaven - E-Commerce Platform

Welcome to **GadgetHaven**, an e-commerce platform designed for buying and managing gadgets, such as smart devices and accessories. The platform is designed to offer a seamless and intuitive experience for users to explore, manage their shopping cart, and wishlist items.

## Live Website Link
[**Visit GadgetHaven**](https://gadgetheaven-ph8thassignment.netlify.app)  

## Requirement Document Link
[**View the Requirement Document**](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)  


## Project Repository Link
[**View the Project Public Repository**](https://github.com/Dip-Barua/PH-Eighth-Assignment)  
[**View the Project Repository**](https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-Dip-Barua)  

---

## React Fundamentals Used in the Project

The following React fundamental concepts were used in the development of this project:

- **React Router**: For managing dynamic navigation and routing across different pages, such as Home, Gadgets, Statistics, Dashboard, and Contact Us.
- **React State Management**: Utilized `useState` and `useEffect` for managing local component state and side effects.
- **React Context API**: Used to manage the cart and wishlist data globally, allowing items to persist across the entire application.
- **React Hooks**: Specifically, `useState`, `useEffect`, and custom hooks (`useLocalStorage`) to handle data fetching and manipulation.
- **Conditional Rendering**: Used to dynamically render components based on user actions, such as adding items to the cart or wishlist.
- **Error Boundaries**: Managed navigation errors with React Router’s error boundaries.
- **Responsive Design**: Used `Tailwind CSS` for creating a mobile-first and responsive UI design.

---

## Data Management

This project handles and manages data through the following methods:

1. **Context API**: 
   - The **Context API** is used to manage and share the state of the user's shopping cart and wishlist across different components without the need for prop drilling. This allows data to be easily accessible from anywhere in the app.
   - The cart and wishlist are stored in the **localStorage** to persist user data even after the page reloads.

2. **Local Storage**:
   - Data related to the cart and wishlist are saved to the browser's **localStorage**, ensuring that the user's preferences are saved and remain across sessions. 
   - Functions like `addToStoredCartList` and `addToStoredWishlist` handle adding items to localStorage, while `getStoredCartList` and `getStoredWishlist` retrieve the stored data for display in the UI.

---

## Features of the Website

### 1. **Responsive Navigation and Layout**
   - The website includes a fully responsive navigation bar that adapts to various screen sizes, providing a smooth browsing experience across desktop and mobile devices.
   
### 2. **Product Categories with Filtering**
   - Users can filter gadgets by categories, such as "Smartphones", "Accessories", and "Laptops". The gadget items are dynamically filtered based on the selected category, making it easier to explore products.

### 3. **Product Details Page**
   - Each product has a dedicated page displaying its details, including the product image, title, price, description, and specifications. Users can also add products to their cart or wishlist from the details page.

### 4. **Cart and Wishlist Management**
   - The platform offers a shopping cart and wishlist where users can add products. Both are managed globally using the Context API, and data is persisted in localStorage.
   - Items in the cart can be removed, and the cart's badge in the navigation updates dynamically.

### 5. **Statistics Dashboard**
   - A statistics page provides visual insights into the product pricing and ratings, using `recharts` for displaying data through graphs like line, bar, and area charts. This allows users to compare product metrics and make informed decisions.

---

## Technologies Used

- **React** (Frontend framework)
- **React Router** (For routing and navigation)
- **Tailwind CSS** (For responsive and modern UI styling)
- **React Context API** (For global state management)
- **LocalStorage** (For data persistence)
- **recharts** (For data visualization)
#
