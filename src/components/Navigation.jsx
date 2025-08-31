import React from "react";
import {Link} from "react-router-dom";  // ← Fixed: Capital L
import styled from "styled-components";

const Nav = styled.nav`
    background: #f8f9fa;  // ← Fixed: Added #
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`; 

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0;
`;

const NavItem = styled.li`
    display: inline;
`;

const NavLink = styled(Link)`  // ← Fixed: Capital L
    text-decoration: none;
    color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e9ecef;
        color: #0056b3;
    }

    &.active {
        background-color: #007bff;
        color: white;  // ← Also fixed: should be white, not blue
    }
`;

function Navigation() {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/tasks">Tasks</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
}

export default Navigation;