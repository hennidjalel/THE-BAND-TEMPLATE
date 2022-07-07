import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <h1>THE BAND</h1>
                    <p><i>We love music</i></p>
                </div>
                <div className="header-paragraph">
                    <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="header-images">
                    <div className="cart">
                        <h3>Name</h3>
                        <div className="cart-image">
                            <img src="/image/bandmember.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="cart">
                        <h3>Name</h3>
                        <div className="cart-image">
                            <img src="/image/bandmember.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="cart">
                        <h3>Name</h3>
                        <div className="cart-image">
                            <img src="/image/bandmember.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;