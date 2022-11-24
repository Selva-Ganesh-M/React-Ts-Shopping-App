import { Navbar as NavbarB, Container, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <>
      <NavbarB className="position-sticky sticky-top mb-3 bg-white shadow-sm">
        <Container className="container-fluid">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={Link}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-primary"
            className="rounded-circle position-relative d-flex justify-content-center align-items-center"
            style={{ height: "3em", width: "3em", transform: "scale(1)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div
              className="position-absolute rounded-circle d-flex justify-content-center align-items-center bg-danger text-center fw-bolder text-light"
              style={{
                padding: "0.9em",
                height: "1.5em",
                width: "1.5em",
                right: "-16px",
                top: "22px",
              }}
            >
              <div className="">2</div>
            </div>
          </Button>
        </Container>
      </NavbarB>
    </>
  );
};

export default Navbar;
