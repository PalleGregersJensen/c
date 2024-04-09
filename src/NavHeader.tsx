import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container py-1.5">
                <NavLink className="navbar-brand" to="/">
                    City Tours CPH.
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/city-tours">
                                City Tours
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tour-dates">
                                Tour Dates
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
