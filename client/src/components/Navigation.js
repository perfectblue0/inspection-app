import companyName from "../assets/logos/companyName.png";

// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid className="justify-content-between">
        <Image src={companyName} height="70" width="70" />
        <h1>Application Name</h1>
        <NavDropdown
          title="User 1"
          id="collapsible-nav-dropdown"
          className="dropstart"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Navigation;
