import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
// import { Outlet } from 'react-router-dom';
import About from './components/About';
import Instamart from './components/Instamart';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails';
import { io } from 'socket.io-client';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import CheckoutPage from './components/CheckoutPage';
// const heading = React.createElement("h1",{id:"h1tag"},"Namastey React! from Parcel");
// const heading2 = React.createElement('h2',{},"heading 2");
// const container = React.createElement('div',{
//     id : "container"
// },[heading , heading2]);

// const AppLayout = () => {
//   const [user, setUser] = useState({user:{name: 'Ayush Saxena', email: 'abc@gmail.com'}});
//   useEffect(() => {
//     fetch('https://api.github.com/users/ayushsaxena38')
//       .then((res) => res.json())
//       .then((data) => {
//         const userDetailsFromApi = {
//           name: data.name,
//           email: `${data.login}@gmail.com`,
//         };

//         setUser({ user: userDetailsFromApi });
//       });
//   } , []);

//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <Header />
//         <Outlet />
//         <Footer />
//       </UserContext.Provider>
//     </>
//   );
// };
const AppLayout = () => {
  const [user, setUser] = useState(); // Start with null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('https://api.github.com/users/ayushsaxena38')
      .then((res) => res.json())
      .then((data) => {
        const userDetailsFromApi = {
          name: data.name,
          email: `${data.login}@gmail.com`,
        };
        setUser({ user: userDetailsFromApi , setUser:setUser});
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(() => setLoading(false)); // Even on error, stop loading
  }, []);

  if (loading) return <div>Loading...</div>; // Prevent mismatched renders

  return (
    <Provider store = {store}>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>      
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:id',
        element: <RestaurantDetails />,
      },
      {
        path: '/instamart',
        element: <Instamart />,
      },
      {
        path:'/checkout',
        element:<CheckoutPage />
      }
    ],
  },
]);
//web socket code//---------------------------//
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:2000');
// socket.emit('join', 'user123');
// socket.on('connect', () => {
//   console.log('Connected to WebSocket server');
// });
// socket.on('notification', (data) => {
//   console.log('notification hitted');
//   console.log('Notification received:', data);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
