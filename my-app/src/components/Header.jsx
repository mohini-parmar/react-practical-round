import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-light bg-light">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <a class="nav-item nav-link" href="#">Support</a>
                <a class="nav-item nav-link" href="#">Appliances</a>
            </nav>
        </div>
    );
}

export default Header;