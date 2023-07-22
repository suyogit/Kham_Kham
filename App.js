import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
const Title = () =>
    (
    <a href="/">
        <img className="logo" src="https://wpengine-myanmore.s3.amazonaws.com/uploads/sabai/File/files/l_0061ba35cbab10619bc12c6148509cd1.jpg" alt="logo" />
    </a>
    );

const Header = () => {
    return (
        <div className="header" >
            <Title />

            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const burgerKing =

{
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "Burger King",
    couiseine: ["Burgers", "Italian"],
    rating: "4.5",
}



const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image} alt="restaurant" />
            <h2>{burgerKing.name}</h2>
            <h2>{burgerKing.couiseine.join(" , ")}</h2>
            <h2>{burgerKing.rating} stars</h2>
        </div>
    )
}





const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            Footer
        </div>
    )
}


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
// root.render(HeaderComponent())