import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const TeamArea = () => {
   return (
      <>
         <section className="team__area pt-115 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>We help to create visual strategies.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleTeam image="1" name="Berlin Corleone" title="CEO & founder" />
                  <SingleTeam image="2" name="Norman Gordon" title="Associate Consultant" />
                  <SingleTeam image="3" name="Indigo Violet" title="Project Manager" />
                  <SingleTeam image="4" name="Dylan Meringue" title="Support" />
                  <SingleTeam image="5" name="Berlin Corleone" title="App Developer" />
                  <SingleTeam image="6" name="Shahnewaz Sakil" title="Web Developer" />
                  <SingleTeam image="7" name="Chauffina Carr" title="UI/UX Designer" />
                  <SingleTeam image="8" name="Justin Case" title="Sumo Founder" />
                  <SingleTeam image="9" name="Joss Sticks" title="Support" />
                  <SingleTeam image="10" name="Dianne Ameter" title="App Designer" />
                  <SingleTeam image="11" name="Russell Sprout" title="Web Developer" />
                  <SingleTeam image="12" name="Lurch Schpellchek" title="Digital Marketer" />

               </div >
            </div >
         </section >
      </>
   );
};

export default TeamArea;