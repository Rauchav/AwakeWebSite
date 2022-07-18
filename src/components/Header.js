import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import AwakeLogo from '../app/assets/Images/AwakeLogo.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar expand='md' fixed='top' className='App-Header'>
            <NavbarBrand href="/">
                <img src={AwakeLogo} alt='awakelogo' className='navbar-brand'/>
            </NavbarBrand>
            
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='me-2'><i className='fa fa-bars fa-lg' /></NavbarToggler>
            <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto navbar' navbar>
                <NavItem>
                    <NavLink className='Nav-link' to='/'>Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='Nav-link' to='/portafolio'>Portafolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='Nav-link' to='/aboutme'>About Me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='Nav-link' to='/contactme'>Contact Me
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
        </div>
    )
};

export default Header;