import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <a href="index.html">
                        <img src="assets/img/logo/Griffin - Logo.png" style={{width: '70%'}} alt="logo" />
                     </a>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>


                  <section>
                     <div className="p-0">
                        <div className="sidebar__tab">
                           <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                              <li className="nav-item">
                                 <a className="nav-link active" id="menu-tab" data-bs-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">info</a>
                              </li>
                           </ul>
                        </div>
                        <div className="sidebar__content">

                           <div className="tab-content" id="sidebar-tab-content">
                              <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">

                                 <div className='side_navBar'>
                                    <Collapsible trigger={<NavLink to="/home">Home</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu text-white">

                                          <li className='pt-10'><NavLink to="/home">Link 1</NavLink></li>

                                          <Collapsible trigger={<li className='border-0'><NavLink to="/home">Link 2</NavLink> </li>} triggerTagName="div" triggerOpenedClassName="sub_child icon_close" triggerClassName="sub_child iconAdd" open={false}>
                                             <ul className="sidebar_sub_menu sub_child_menu submenu text-white">
                                                <li><NavLink to="/home">Link 1</NavLink></li>
                                                <li><NavLink to="/home">Link 2</NavLink></li>
                                                <li><NavLink to="/home">Link 3</NavLink></li>
                                             </ul>
                                          </Collapsible>

                                          <Collapsible trigger={<li className='border-0'><NavLink to="/homeThree">Link 3</NavLink></li>} triggerTagName="div" triggerOpenedClassName="sub_child icon_close" triggerClassName="sub_child iconAdd" open={false}>
                                             <ul className="sidebar_sub_menu sub_child_menu submenu text-white">
                                                <li><NavLink to="/headerStyleFour">Link 4</NavLink></li>
                                                <li><NavLink to="/headerStyleFive">Link 5</NavLink></li>
                                                <li><NavLink to="/headerStyleSix">Link 6</NavLink></li>
                                                <li><NavLink to="/headerStyleSeven">Link 7</NavLink></li>
                                             </ul>
                                          </Collapsible>

                                       </ul>
                                    </Collapsible>

                                   <div className='about iconAdd'>
                                       <NavLink to="/about">About Us </NavLink>
                                   </div>

                                    <Collapsible trigger={<NavLink to="/services">Services</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                          <ul className="sidebar_sub_menu submenu text-white">
                                             <li><NavLink to="/services">Services</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                          </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<NavLink to="/portfolio">Insights</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white text-capitalize">
                                          <li><NavLink to="/portfolio">portfolio</NavLink></li>
                                          <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                                          <li><NavLink to="/team">team</NavLink></li>
                                          <li><NavLink to="/teamDetails">team Details</NavLink></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<NavLink to="/blogs">Blog</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><NavLink to="/blogs">Blog</NavLink></li>
                                          <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='about iconAdd border-0'>
                                       <NavLink to="/contact">Contact Us </NavLink>
                                    </div>

                                 </div>

                              </div>

                              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                 <div className="sidebar__info">
                                    <div className="logo mb-40">
                                       <a href="index.html">
                                          <img src="assets/img/logo/Griffin - Logo.png" style={{width: '50%'}} alt="logo"/>
                                       </a>
                                    </div>
                                    <p>We pride ourselves with providing excellent staffing services for all your hospitality requirements. Our length and breadth of experience spans over 30 years in the market.</p>
                                    <a href="contact.html" className="z-btn z-btn-white">contact us</a>
                                    <div className="sidebar__search">
                                       <form action="#">
                                          <input type="text" placeholder="Your Keywords.."/>
                                          <button type="submit"><i > <FaSearch /> </i></button>
                                       </form>
                                    </div>
                                    <div className="sidebar__contact mt-30">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <i > <BiMap /> </i>
                                             </div>
                                             <div className="text">
                                                <span>67 Albert Road, Suite 506, London, NW39 6XV.</span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="icon">
                                                <i > <FaEnvelope /> </i>
                                             </div>
                                             <div className="text ">
                                                <span><a href="mailto:griffinrec@aol.com">griffinrec@aol.com</a></span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="icon">
                                                <i ><FaPhoneAlt /> </i>
                                             </div>
                                             <div className="text">
                                                <span><a href="tel:(+44) 70438 850 098">(+44) 70438 850 098</a></span>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;
