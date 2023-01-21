import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="/">
                                       <img src="assets/img/logo/logo-gradient.png" alt=""/>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p className="mb-30">Copyright © 2022 All Rights Reserved passion by Theme_Pure</p>
                                 <div className="footer__social theme-social mb-30">
                                    <ul>
                                       <li>
                                          <a href="#">
                                             <i ><FaFacebookF /></i>
                                             <i ><FaFacebookF /></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#">
                                             <i ><FaTwitter /> </i>
                                             <i ><FaTwitter /> </i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#">
                                             <i ><FaVimeoV /> </i>
                                             <i ><FaVimeoV /> </i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Company</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">About Us</a></li>
                                       <li><a href="#">Testimonials</a></li>
                                       <li><a href="#">Consulting</a></li>
                                       <li><a href="#">Partners</a></li>
                                       <li><a href="#">Contact Us</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Customers</a></li>
                                       <li><a href="#">Pricing</a></li>
                                       <li><a href="#">News</a></li>
                                       <li><a href="#">Learning Center</a></li>
                                       <li><a href="#">Help desk</a></li>
                                       <li><a href="#">Support</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p className="mb-30">Subscribe to out newsletter today to receive updates on the latest news</p>
                                    <div className="footer__subscribe-form p-relative">
                                       <form action="#">
                                          <input type="email" placeholder="Email Address"/>
                                             <button type="submit">Subscribe</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;