import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>We provide great service with exceptional hospitality staff.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="1" title="Service reporting" />
                  <SingleService icon="2" title="Team Leaders" />
                  <SingleService icon="3" title="Porters" />
                  <SingleService icon="4" title="Kitchen Team" />
                  <SingleService icon="5" title="Chefs All Levels" />
                  <SingleService icon="6" title="Concierge" />
                  <SingleService icon="7" title="Coordinators" />
                  <SingleService icon="8" title="Reception" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;
