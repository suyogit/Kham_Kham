import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Header from './src/component/Header';
import Footer from './src/component/Footer';
import Body from './src/component/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './src/component/About';
import Error from './src/component/Error';


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />

    },
    {
        path: '/about',
        element: <About />,
    },
]
);








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(HeaderComponent())