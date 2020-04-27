import React from 'react';
import '../styles/Navigation.css';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { faIgloo, faCat, faPaw, faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from 'react-i18next';


function Navigation(props) {
    const { t } = useTranslation();

    const pages = [
        { name: t('nav.home'), path: "/", icon: faIgloo },
        { name: t('nav.about'), path: "/about", icon: faCat },
        { name: t('nav.portfolio'), path: "/portfolio", icon: faPaw },
        { name: t('nav.contact'), path: "/contact", icon: faDove },
    ];

    return (
        <Nav className="navbar">
            <Nav className="navbar-nav">
                {pages.map(page => {
                    return (
                        <Nav.Item className="nav-item">
                            <Nav.Link href={page.path} className={`${page.path !== props.path ? "btn btn-2" : "btn btn-2 disabled"}`}>
                                <FontAwesomeIcon className="svg" icon={page.icon} />
                                <span className="link-text">{page.name}</span>
                            </Nav.Link>
                        </Nav.Item>
                    )
                })}
            </Nav>
        </Nav>
    )
}

export default Navigation;
