import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

export const Navigator = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="tw-ml-10 tw-text-2xl" href="/">
          RPX NFT{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/nft">NFT</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Button variant="outline-primary" href="/login" className="tw-mr-2">
            Login
          </Button>
          <Button variant="outline-primary" href="/signup">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
