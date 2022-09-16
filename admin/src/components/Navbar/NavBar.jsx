import { useState } from "react";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    Times,
    Bars,
    NavMenu,
    NavItem,
    NavLinks
}
from './NavBar.elements';

export const NavBar = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    Hamburguearia Mustach
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    { click ? <Times /> : <Bars /> }
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Inicio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/insumos'>Insumos</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};
