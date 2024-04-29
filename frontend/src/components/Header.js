import React from "react";

/* REACT BOOTSTRAP */
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

/* REACT ROUTER BOOTSTRAP */
import { LinkContainer } from "react-router-bootstrap";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { logout } from "../actions/userActions";
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
/* COMPONENTS */
import SearchBox from "./SearchBox";

import logo from "../assets/logo.png";

function Header() {
  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  /* HANDLER */
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const top100Films = [
    { title: 'iPhone 13'  },
    { title: 'Samsung Galaxy S21' },
    { title: 'Google Pixel 6'  },
    { title: 'MacBook Pro'  },
    { title: 'Dell XPS 13' },
    { title: 'HP Spectre x360'  },
    { title: 'Sony Bravia X90J' },
    { title: 'LG C1 OLED TV'  },
    { title: 'Samsung QN90A Neo QLED TV'  },
    { title: 'Apple Watch Series 7'  },
    { title: 'Samsung Galaxy Watch 4'  },
    { title: 'Fitbit Sense' },
    { title: 'AirPods Pro'  },
    { title: 'Sony WF-1000XM4'  },
    { title: 'Samsung Galaxy Buds Pro'  },
    { title: 'Bose QuietComfort Earbuds'  },
    { title: 'Jabra Elite 85t' },
    { title: 'Beats Studio Buds'  },
    { title: 'Xiaomi Redmi Note 10'  },
    { title: 'Lenovo Legion 5' },
    { title: 'ASUS ROG Zephyrus G14' },
    { title: 'LG OLED C1'  },
    { title: 'TCL 6-Series' },
    { title: 'Garmin Fenix 7'  },
    { title: 'Polar Vantage V2'  },
    { title: 'Huawei Watch GT 3'  },
    { title: 'Google Pixel Buds A-Series'  },
    { title: 'Anker Soundcore Liberty Air 2 Pro'  },
    { title: 'Skullcandy Indy ANC' },
    { title: 'Sennheiser Momentum True Wireless 2'  },
    { title: 'Apple iPad Pro' },
    { title: 'Samsung Galaxy Tab S7'  },
    { title: 'Microsoft Surface Pro 7'  },
    { title: 'Amazon Fire HD 10'  },
    { title: 'Google Nest Hub Max'  },
    { title: 'Sony A80J OLED'  },
    { title: 'Vizio OLED 4K HDR Smart TV'  },
    { title: 'Apple AirPods Max' },
    { title: 'Sony WH-1000XM4'  },
    { title: 'Bose Noise Cancelling Headphones 700'  },
    { title: 'JBL Flip 5'  },
    { title: 'UE Boom 3'  },
    { title: 'NVIDIA GeForce RTX 3080'  },
    { title: 'AMD Ryzen 9 5900X'  },
    { title: 'PlayStation 5'  },
    { title: 'Xbox Series X'  },
    { title: 'Nintendo Switch'  },
    { title: 'Razer BlackWidow V3'  },
    { title: 'Logitech G Pro X'  },
    { title: 'Corsair K95 RGB Platinum XT'  },
    { title: 'SteelSeries Apex Pro' },
    { title: 'GoPro Hero 9 Black'  },
    { title: 'DJI Mini 2'  },
    { title: 'Canon EOS R5'  },
    { title: 'Sony A7S III' },
    { title: 'Fujifilm X-T4'  },
    { title: 'Nikon Z6 II' },
    { title: 'Panasonic Lumix GH5'  },
    { title: 'GoPro Max'  },
    { title: 'Insta360 One X2'  },
    { title: 'Roku Ultra'  },
    { title: 'Amazon Echo Show 10'  },
    { title: 'Google Nest Audio'  },
    { title: 'Sonos Arc'  },
    { title: 'Bose SoundLink Revolve' },
    { title: 'JBL Charge 4'  },
    { title: 'Anker Soundcore Motion+'  },
    { title: 'UE Wonderboom 2'  },
    { title: 'Logitech MX Master 3' },
    { title: 'Apple Magic Keyboard'  },
    { title: 'Microsoft Surface Ergonomic Keyboard'  },
    { title: 'Razer Huntsman Elite'  },
    { title: 'Corsair K70 RGB MK.2'  },
    { title: 'SteelSeries Apex 7' },
    { title: 'Logitech G502 Hero'  },
];

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Tech connect" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/News">
            <Nav.Link>
              News
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/#">
            <Nav.Link>
              Videos
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Toolbar spacing={1} sx={{ width: 500 }} direction="row" alignItems="center" gap={3}>
            <Autocomplete
              fullWidth
              freeSolo
              size='small'
              id="free-solo-2-demo"
              disableClearable

              sx={{ marginRight: '10px', display: { xs: "none", md: "block" } }}
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField

                  {...params}
                  label="Search Products"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Toolbar>

          <Toolbar sx={{ display: { xs: "block", md: "none" } }}>
            <Autocomplete
              fullWidth
              freeSolo
              size='small'
              id="free-solo-2-demo"
              disableClearable
              sx={{ marginRight: '10px' }}
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField

                  {...params}
                  label="Search Products"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />

          </Toolbar>
          <Navbar.Collapse id="navbarScroll">
            {/* <SearchBox /> */}

            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
