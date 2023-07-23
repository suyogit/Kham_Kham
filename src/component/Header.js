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

export default Header;