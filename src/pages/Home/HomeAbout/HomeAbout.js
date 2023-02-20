import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/about-1.jpg" alt=""/>
                           <div className="about__shape">
                              <img src="assets/img/about/red-shape.png" alt=""/>
                           </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <h2>Who we are</h2>
                           {/*<h2>We Provide Seamless Service</h2>*/}
                        </div>
                        <p>Mighty Griffin Recruitment Ltd. International is London’s leading provider of recruitment services to the hospitality industry with 30 years of experience, focused on personal service and attention to detail, delivering consistent service and standards to our many exclusive clients and their guests assisting their business and creating a seamless memorable expiereince to all patrons.
                           <br /><br />24 hours each day, 7 days per week, 365 days each and every year, we supply temporary, contract and permanent staff at all levels including outsourcing management contracts.</p>
                        {/*<div className="about__list">*/}
                        {/*   <ul>*/}
                        {/*      <li ><span><i > <FaCheck/> </i>Innovative ideas</span></li>*/}
                        {/*      <li ><span><i > <FaCheck/> </i>Professional assistance</span></li>*/}
                        {/*      <li ><span><i > <FaCheck/> </i>Personnel training</span></li>*/}
                        {/*   </ul>*/}
                        {/*</div>*/}
                        <Link to="/services" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAbout;
