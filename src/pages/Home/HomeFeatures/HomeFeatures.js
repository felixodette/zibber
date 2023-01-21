import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="Rooms Attendants" />
                     <HomeSingleFeature icon={<FaLightbulb />} title="Supervisors" />
                     <HomeSingleFeature icon={<BsHouseDoor />} title="Coordinators" />
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="Concierge" />
                     <HomeSingleFeature icon={<FiLock />} title="Reception" />
                     <HomeSingleFeature icon={<FaRibbon />} title="How we think and work" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;
