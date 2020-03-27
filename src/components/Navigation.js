import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { faHome, faCat, faFile, faChevronRight, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component  {
    state = {
        pages: [
            {name: "About Me!", path:"/about", icon: faCat},
            {name: "Resume", path:"/resume", icon: faHome},
            {name: "Portfolio", path:"/portfolio", icon: faHome},
            {name: "Contact", path:"/contact", icon: faHome},
        ]
    }

    render()
    {    return (
        <Nav className="navbar">
            <Nav className="navbar-nav">
                <Nav.Item className="arrow nav-item">
                        <FontAwesomeIcon className="svg" id="arrow" icon={faMap} />
                </Nav.Item>
                
                {this.state.pages.map(page => {
                    return (
                        <Nav.Item className="nav-item">
                            <Nav.Link href={page.path} className="btn btn-2">
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
