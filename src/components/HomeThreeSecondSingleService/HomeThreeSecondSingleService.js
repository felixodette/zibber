import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSecondSingleService = ({title}) => {
   return (
      <>
         <div className="services__nav-content pt-90 pb-90">
            <div className="row">
               <div className="col-xl-5 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src="assets/img/services/services-1.png" alt="" />
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                     <div className="services__icon-wrapper d-md-flex mb-35">
                        <div className="services__icon-item d-flex mr-60 mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-9.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Acquisitions Finance Consulting</h3>
                           </div>
                        </div>
                        <div className="services__icon-item d-flex mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-10.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Private Placement Consulting</h3>
                           </div>
                        </div>
                     </div>
                     <Link to="/contact" className="z-btn">Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSecondSingleService;