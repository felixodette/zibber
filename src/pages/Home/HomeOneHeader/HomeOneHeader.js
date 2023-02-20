import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaPhoneAlt, FaEnvelope, FaSearch, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeOneHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="header__area p-relative header__transparent">
               <div className="header__top d-none d-md-block">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-md-4">
                           <div className="header__social">
                              <ul>
                                 <li><a href="#"><i ><FaFacebookF/></i> </a></li>
                                 <li><a href="#"><i ><FaTwitter/> </i></a> </li>
                                 <li><a href="#"><i ><FaLinkedinIn/></i></a></li>
                                 <li><a href="#"><i > <FaPinterestP/> </i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-8">
                           <div className="header__info f-right">
                              <ul>
                                 <li>
                                    <a href="tel:(+44)-70438-850-098">
                                       <i > <FaPhoneAlt/> </i>
                                       (+44) 70438 850 098
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@consulting.com">
                                       <i > <FaEnvelope/> </i>
                                       griffinrec@aol.com
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="search-toggle">
                                       <i > <FaSearch/> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo">
                              <NavLink to="/">
                                 <img src="assets/img/logo/Griffin - Logo.png" alt="logo"/>
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 <img src="assets/img/logo/Griffin - Gold Logo.png" style={{width: '60%'}} alt="logo"/>
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                             <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink  to="/home">Home</NavLink>
                                          {/*<ul className="submenu">*/}
                                          {/*   <li><NavLink to="/home">Home Style 1</NavLink></li>*/}
                                          {/*   <li>*/}
                                          {/*      <NavLink to="/homeTwo">Home Style 2</NavLink>*/}
                                          {/*      <ul className="submenu">*/}
                                          {/*         <li><NavLink to="/home">Home Style 1</NavLink></li>*/}
                                          {/*         <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>*/}
                                          {/*         <li><NavLink to="/homeThree">Home Style 3</NavLink></li>*/}
                                          {/*      </ul>*/}
                                          {/*   </li>*/}
                                          {/*   <li>*/}
                                          {/*      <NavLink to="/homeThree">Home Style 3</NavLink>*/}
                                          {/*      <ul className="submenu">*/}
                                          {/*         <li><NavLink to="/headerStyleFour">Header Syle 4</NavLink></li>*/}
                                          {/*         <li><NavLink to="/headerStyleFive">Header Syle 5</NavLink></li>*/}
                                          {/*         <li><NavLink to="/headerStyleSix">Header Syle 6</NavLink></li>*/}
                                          {/*         <li><NavLink to="/headerStyleSeven">Header Syle 7</NavLink></li>*/}
                                          {/*      </ul>*/}
                                          {/*   </li>*/}
                                          {/*</ul>*/}
                                       </li>
                                       <li><NavLink to="/about">About Us </NavLink></li>
                                       <li>
                                          <NavLink to="/services">Services</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/services">Recruitment</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Food and Beverage</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Front of House</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Back of House</NavLink></li>
                                             <li><NavLink to="/servicesDetails">GDR</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/portfolio">Insights</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/portfolio">portfolio</NavLink></li>
                                             <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                                             <li><NavLink to="/team">team</NavLink></li>
                                             <li><NavLink to="/teamDetails">team Details</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/blogs">Blog</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/blogs">Blog</NavLink></li>
                                             <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                                          </ul>
                                       </li>
                                       <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                              <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                                 <Link to="/contact" className="z-btn z-btn-white">Get a Quote</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="header__search-wrapper">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <form action="#">
                              <input type="text" placeholder="Your Keywords" />
                              <button type="button"><i > <FaSearch/> </i></button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="body-overlay-2"></div>
            </div>
         </header>



         <Sidebar show={show} handleClose={handleClose} />

      </>
   );
};

export default HomeOneHeader;
