import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';


const title =
    (
        <h1 id="title" key="h2">
            Kham Kham
        </h1>
    );

const HeaderComponent = () => {
    return (
        <div>
            {title}
            <h2>Learning functional component</h2>
            <h2>This is a h2 tag</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);