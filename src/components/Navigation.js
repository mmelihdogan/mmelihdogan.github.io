import React from 'react';
import '../styles/Navigation.css';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { faIgloo, faCat, faPaw, faDove, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from 'react-i18next';


function Navigation(props) {
    const { t, i18n } = useTranslation();

    const selectLanguage = (language) => {
        i18n.changeLanguage(language);
        document.documentElement.style.setProperty('--direction', 'ltr');
        document.documentElement.style.setProperty('--align', 'left');
    };

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
              

                <DropdownButton
                    title={<FontAwesomeIcon icon={faGlobe} />} >
                    <Dropdown.Item onClick={() => selectLanguage('tr')}>
                        Türkçe </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectLanguage('en')}>
                        English
          </Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Nav>
    )
}

export default Navigation;
