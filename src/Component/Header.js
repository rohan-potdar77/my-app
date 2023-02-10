import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Tattoo from "./Tattoo.css";

export default function Header() {
  return (
    <div>
      <div className=" container-fluid top-content">
      
         <div class=" row header-content p-2">
            <div class="col-7 ">
            <h6 id="text">FREE SHIPPING WITH ORDERS OVER $50</h6>
            </div>
            <div class="col-5 ">
            <button className="btnshop px-3 py-1 ">SHOP NOW</button>
            </div>
          </div>
      </div>



      <div>
        
     
        
      <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        
                
            </NavDropdown>
            <Nav.Link href="#features"><b>Wholesale</b></Nav.Link>
            <Nav.Link  href="#pricing"><b>Ambassador</b></Nav.Link>
            <Nav.Link  href="#pricing"><b>Build A Bundle</b></Nav.Link>
            
          
          </Nav>
          <img  id="logo"src="https://cdn.shopify.com/s/files/1/0076/4156/3234/files/Path_2x_2_180x.png?v=1614336433" alt="logo"/>
          <Nav>
          <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              
              
              
            </NavDropdown>
            <NavDropdown title="Tattoo Stories" id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>

            <svg id="svg1" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 7.03448C7.70122 7.03448 8.3867 6.8282 8.96975 6.44172C9.5528 6.05524 10.0072 5.50592 10.2756 4.86323C10.5439 4.22054 10.6141 3.51334 10.4773 2.83106C10.3405 2.14879 10.0029 1.52207 9.50702 1.03018C9.01117 0.538283 8.37943 0.203298 7.69168 0.0675844C7.00393 -0.0681291 6.29106 0.00152397 5.64321 0.267736C4.99537 0.533947 4.44164 0.984761 4.05206 1.56317C3.66248 2.14158 3.45455 2.8216 3.45455 3.51724C3.45455 4.45007 3.82808 5.3447 4.49299 6.00431C5.15789 6.66392 6.05969 7.03448 7 7.03448ZM7 1.17242C7.46748 1.17242 7.92447 1.30994 8.31317 1.56759C8.70186 1.82524 9.00482 2.19146 9.18371 2.61992C9.36261 3.04838 9.40942 3.51984 9.31822 3.9747C9.22702 4.42955 9.0019 4.84736 8.67134 5.17529C8.34078 5.50322 7.91962 5.72654 7.46112 5.81702C7.00262 5.90749 6.52737 5.86106 6.09548 5.68358C5.66358 5.50611 5.29443 5.20556 5.03471 4.81996C4.77499 4.43435 4.63636 3.98101 4.63636 3.51724C4.63636 2.89536 4.88539 2.29894 5.32866 1.8592C5.77192 1.41946 6.37312 1.17242 7 1.17242ZM7 7.62069C5.27609 7.62069 3.62279 8.30006 2.40381 9.50935C1.18482 10.7186 0.5 12.3588 0.5 14.069V16.4138C0.5 16.5693 0.562256 16.7184 0.673073 16.8283C0.78389 16.9382 0.93419 17 1.09091 17H12.9091C13.0658 17 13.2161 16.9382 13.3269 16.8283C13.4377 16.7184 13.5 16.5693 13.5 16.4138V14.069C13.5 12.3588 12.8152 10.7186 11.5962 9.50935C10.3772 8.30006 8.72391 7.62069 7 7.62069ZM12.3182 15.8276H1.68182V14.069C1.68182 12.6697 2.24212 11.3278 3.23948 10.3384C4.23683 9.34895 5.58953 8.7931 7 8.7931C8.41047 8.7931 9.76317 9.34895 10.7605 10.3384C11.7579 11.3278 12.3182 12.6697 12.3182 14.069V15.8276Z" fill="currentColor"></path>
                                    </svg>
            
              <svg id="svg2" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.909147 1C0.683091 1 0.5 1.19033 0.5 1.42497C0.5 1.65976 0.683241 1.84994 0.909147 1.84994H3.03186L5.18654 12.4352C5.16457 12.6774 5.38106 12.9122 5.61498 12.9001H15.8446C16.0608 12.9033 16.2596 12.6997 16.2596 12.4751C16.2596 12.2505 16.0608 12.0469 15.8446 12.0501H5.94744L5.60222 10.3501H16.663C16.8462 10.348 17.0193 10.2038 17.0594 10.0181L18.4916 3.64297C18.5448 3.39631 18.3386 3.12681 18.0951 3.12507H4.13168L3.76719 1.33207C3.72666 1.14427 3.5497 0.998406 3.36448 1.00004L0.909147 1ZM4.30413 3.97496H17.5836L16.3369 9.50004H5.42957L4.30413 3.97496ZM7.86538 14.1751C6.85327 14.1751 6.02413 15.0365 6.02413 16.0876C6.02413 17.1388 6.85342 18 7.86538 18C8.87749 18 9.70664 17.1386 9.70664 16.0876C9.70664 15.0363 8.87735 14.1751 7.86538 14.1751ZM13.594 14.1751C12.5818 14.1751 11.7527 15.0365 11.7527 16.0876C11.7527 17.1388 12.582 18 13.594 18C14.6061 18 15.4352 17.1386 15.4352 16.0876C15.4352 15.0363 14.6059 14.1751 13.594 14.1751ZM7.86538 15.025C8.43524 15.025 8.88834 15.4957 8.88834 16.0876C8.88834 16.6794 8.43524 17.1501 7.86538 17.1501C7.29552 17.1501 6.84242 16.6794 6.84242 16.0876C6.84242 15.4957 7.29552 15.025 7.86538 15.025ZM13.594 15.025C14.1638 15.025 14.6169 15.4957 14.6169 16.0876C14.6169 16.6794 14.1638 17.1501 13.594 17.1501C13.0241 17.1501 12.571 16.6794 12.571 16.0876C12.571 15.4957 13.0241 15.025 13.594 15.025Z" fill="currentColor" stroke="currentColor" stroke-width="0.3"></path>
              </svg>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




      </div>
    </div>
  );
}
