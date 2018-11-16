import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends React.Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar className="backgroundNav" fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    CinemaCity
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            FAQ
                         </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/questions'}>
                        <NavItem>
                            Ask a question
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}
