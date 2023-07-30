import React, { Suspense, lazy, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Header from './src/component/Header';
import Footer from './src/component/Footer';
import Body from './src/component/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
//import About from './src/component/About';
import Error from './src/component/Error';
import Contact from './src/component/Contact';
import RestrauntMenu from './src/component/RestrauntMenu';
import Login from './src/component/Login';
import Profile from './src/component/Profile';
import Shimmer from './src/component/Shimmer';
import Instamart from './src/component/Instamart';
import UserContext from './src/utils/userContext';
import { Provider } from 'react-redux';
import store from './src/utils/store';
import Cart from './src/component/Cart';
const About = lazy(() => import('./src/component/About'));

const AppLayout = () => {

    //assume this data we are getting is after api call in useEffect
    const [user, setUser] = useState({
        name: "Suyog",
        email: "asuyog@gmail.com"
    })

    return (
        <Provider store={store}>
            <UserContext.Provider value={
                {
                    user: user,
                    setUser: setUser
                }}>
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([


    {
        path: "/", // show path for routing
        element: <AppLayout />, // show component for particular path
        errorElement: <Error />, // show error component for path is different
        children: [
            // show children component for routing

            {
                path: "/about",
                element: (
                
                    <Suspense fallback={<Shimmer/>}>
                <About />
                </Suspense>),
                children: [
                    {
                        path: "profile",
                        element: <Profile />,

                    },
                ]
            },

            {
                path: "/",
                element: <Body />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestrauntMenu />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/instamart",
                element: <Instamart />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },

        ],
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
