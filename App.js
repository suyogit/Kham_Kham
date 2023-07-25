import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Header from './src/component/Header';
import Footer from './src/component/Footer';
import Body from './src/component/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './src/component/About';
import Error from './src/component/Error';
import Contact from './src/component/Contact';


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

        ],
    },

]);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
