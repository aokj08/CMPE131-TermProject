import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { getContents } from "../../api/axios";
import { useEffect, useState, useContext } from "react";
import ListPage from "./ListPage";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const [contents, setContents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hasList, setHasList] = useState(false);

  const ctx = useContext(AuthContext);

  useEffect(() => {
    getContents()
      .then((json) => {
        setContents(json.data);
        return json;
      })
      .catch((error) => {
        console.log("Error fetching database from Strapi - Connection 404");
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (event) => {
    if (!event.target.value) {
      setSearchResults([]);
      setHasList(false);
    } else {
      const resultsArray = contents.filter((content) =>
        content.attributes.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setHasList(true);
      setSearchResults(resultsArray);
    }
  };

  const logOutHandler = () => {
    ctx.logOut();
  };

  return (
    <Navbar
      expand="xxl"
      className={`bg-body-tertiary ${styles[props.className]} `}
      fixed="top"
      // bg="dark"
      // data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
            />
            <span>City of Williamston</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles["hamburger-button"]}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/" className="nav-link">
              Boards & Commissions
            </NavLink>

            <NavDropdown title="Departments" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Police Department
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Water & Sewer</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <div>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
              />{" "}
              {/* {hasList && <ListPage searchResults={searchResults} />} */}
            </div>
            <Button
              variant="outline-success"
              className={styles["search-button"]}
            >
              Search
            </Button>
          </Form>
          {hasList && <ListPage searchResults={searchResults} />}
          <ul className={`nav navbar-nav ml-auto ${styles["user-login"]}`}>
            <Nav.Item>
              {ctx.isLogIn ? (
                <span className="fas fa-user">
                  {` ${ctx.currentUser.displayName}`}
                </span>
              ) : (
                <Link to="/signin" className="nav-link">
                  <span className="fas fa-user" /> Sign Up
                </Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {ctx.isLogIn ? (
                <button
                  onClick={logOutHandler}
                  style={{ background: "none", border: "none" }}
                >
                  <span
                    className="fas fa-sign-in-alt"
                    style={{ fontFamily: "Font Awesome 6 Free" }}
                  />
                  Sign Out
                </button>
              ) : (
                <Link className="nav-link" to="/signin">
                  <span className="fas fa-sign-in-alt" /> Login
                </Link>
              )}
            </Nav.Item>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
