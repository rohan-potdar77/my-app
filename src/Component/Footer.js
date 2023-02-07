import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube , } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMusic } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';




function Footer() {
    return (<>






        <div className="bg-dark">


            <div className="d-flex justify-content-center bg-dark text-light mb-3">
                <div className="p-2 "><img src="//cdn.shopify.com/s/files/1/0076/4156/3234/files/Path_2x_3.png?v=1614336433" alt="" className="img-fluid" style={{width: "60%"}}/></div>

            </div>

            <div className="container row justify-content-center bg-dark">
                <div className="col-2"></div>
                <div className="col-lg-2 col-sm-12 p-2 bg-dark " >
                    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">

                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar1">
                                <span className="dropdown-toggle"></span>SHOP
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar1">
                                <ul className="navbar-nav text-light text-center">
                                    <li className="nav-item">
                                        <h6>SHOP</h6>
                                        <a className="nav-link"  href="true">Gift Card</a>
                                        <a className="nav-link"  href="true">Product Promise</a>
                                        <a className="nav-link"  href="true">Subscription</a>
                                        <a className="nav-link"  href="true">Ambassador</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-12 p-2 bg-dark"  >
                    <div className="navbar navbar-expand-sm  navbar-dark">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar2">
                                <span className="dropdown-toggle"></span>CUSTOMER CARE
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar2">
                                <ul className="navbar-nav text-light text-center">
                                    <li className="nav-item" >
                                        <h6>CUSTOMER CARE</h6>
                                        <a className="nav-link"  href="true">Account</a>
                                        <a className="nav-link"  href="true">Contact Us</a>
                                        <a className="nav-link"  href="true">Shipping Policy</a>
                                        <a className="nav-link"  href="true">FAQs</a>
                                        <a className="nav-link"  href="true">Wholesale</a>
                                        <a className="nav-link"  href="true">Locations</a>
                                        <a className="nav-link"  href="true">Refer a Friend</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-12 p-2 bg-dark p-2"  >
                    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar3">
                                <span className="dropdown-toggle"></span>#MADRABBIT
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar3">
                                <ul className="navbar-nav text-center">
                                    <li className="nav-item">
                                        <h6 className="text-light .d-md-none d-lg-block">#MADRABBIT</h6>
                                        <a className="nav-link"  href="true">Our Story</a>
                                        <a className="nav-link"  href="true">Our Blog</a>
                                        <a className="nav-link"  href="true">Tattoo Care</a>
                                        <a className="nav-link"  href="true">Reviews</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center bg-dark mb-3 text-light ">
                <div className="p-4 "><FontAwesomeIcon icon={faFacebookF} className="h2 "/></div>
                <div className="p-4 "><FontAwesomeIcon icon={faInstagram} className="h2"/></div>
                <div className="p-4 "><FontAwesomeIcon icon={faMusic} className="h2"/></div>
                <div className="p-4 "><FontAwesomeIcon icon={faPinterest} className="h2"/></div>
                <div className="p-4"><FontAwesomeIcon icon={faGamepad} className="h2"/></div>
                <div className="p-4 "><FontAwesomeIcon icon={faYoutube} className="h2"/></div>
                <div className="p-4"><FontAwesomeIcon icon={faTwitter} className="h2"/></div>

            </div>
            <div className="container-fluid justify-content-center row  bg-dark mb-3 p-5 bg-dark text-light">

                

                <div className="col-2"></div>
                <div className="col-lg-3 col-sm-6">Terms of service .</div>
                <div className="col-lg-3 col-sm-6"><a className="text-light"  href="true">Privacy Policy</a></div>
                <div className="col-lg-3 ">© 2023,<a className="text-light"  href="true">Mad Rabbit Tattoo</a></div>


            </div>



        </div>


    </>
    );
}

export default Footer;