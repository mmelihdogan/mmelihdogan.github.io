import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { faIgloo, faCat, faPaw, faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component  {
    state = {
        pages: [
            {name: "Home", path:"/", icon: faIgloo},
            {name: "About Me!", path:"/about", icon: faCat},
            {name: "Portfolio", path:"/portfolio", icon: faPaw},
            {name: "Contact", path:"/contact", icon: faDove},
        ]
    }

    render()
    {    return (
        <Nav className="navbar">
            <Nav className="navbar-nav">    
                {this.state.pages.map(page => {
                    return (
                        <Nav.Item className="nav-item">
                            <Nav.Link href={page.path} className={`${page.path !== this.props.path ? "btn btn-2" : "btn btn-2 disabled"}`}>
                                <FontAwesomeIcon className="svg" icon={page.icon} />
                                <span className="link-text">{page.name}</span>
                            </Nav.Link>
                        </Nav.Item>
                    )
                })}
            </Nav>
        </Nav>
    )
}}

export default Navigation;
