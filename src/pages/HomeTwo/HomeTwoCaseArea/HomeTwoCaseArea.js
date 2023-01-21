import React, { useState } from 'react';
import HomeTwoSingleCase from '../../../components/HomeTwoSingleCase/HomeTwoSingleCase';
import featuredWorksData from '../../../data/featuredWorksData';

const allCategories = ['all', ...new Set(featuredWorksData.map(item => item.category))];

const arr = featuredWorksData;
const uniqueItem = arr.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))


const HomeTwoCaseArea = () => {

   const [isActive, setIsActive] = useState('all');
   const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);

   const filterCategory = (category) => {
      setIsActive(category)
      if (category === 'all') {
        return setFilterGalleryItems(uniqueItem);
      }

      const remainingItems = featuredWorksData.filter(item => item.category === category);
      setFilterGalleryItems(remainingItems);
   }

   return (
      <>
         <section className="case__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                     <div className="section__title section__title-3 text-center mb-45">
                        <span>Case Studies</span>
                        <h2>Featured Works.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="case__menu text-center mb-40 wow fadeInUp" data-wow-delay=".6s">
                        <div className="masonary-menu filter-button-group">

                           {
                              allCategories.map((category, index) => {
                                 return <button key={index} onClick={() => filterCategory(category)} className={isActive === category ? 'active text-capitalize' : 'text-capitalize'} >{category}</button>
                              })
                           }

                        </div>
                     </div>
                  </div>
               </div>


               <div className='row'>
                  {
                     filterGalleryItems.map((item, index) => <HomeTwoSingleCase key={index} galleryItem={item}
                        index={index} filterGalleryItems={filterGalleryItems} />)
                  }
               </div>

            </div>
         </section>
      </>
   );
};

export default HomeTwoCaseArea;