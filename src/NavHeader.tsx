import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/city-tours">City Tours</NavLink>
                </li>
                <li>
                    <NavLink to="/tour-dates">Tour Dates</NavLink>
                </li>
            </ul>
        </nav>
    );
}
