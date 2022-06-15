import React from "react";
import routes from "./routes"
import{Link, Route} from "react-router-dom";

const Header = () => (
    <ul className="nav">
        {routes.map((route, i) => (
            <li key={i}>
                <link to={route.path}>{route.name}</link>
            </li>
        ))}
    </ul>
);
export default Header;