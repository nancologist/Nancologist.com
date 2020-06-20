import React from "react";
import { Link } from 'gatsby';
import './navItem.css';

export default (props) => {
    return (
        <li className="navItem">
            <Link to={props.goto}>{props.children}</Link>
        </li>
    );
};
