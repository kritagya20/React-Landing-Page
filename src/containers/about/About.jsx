import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="about section__margin" id="about">
    <div className="about-feature">
      <Feature title="What is Master School" text="Learn about a few of the world's most cutting-edge technology. It's time to improve your abilities by acquiring the most important market skills. Use our classes and mock series to put your skills to the test. We make certain that the content is of high quality. Our instructors have real-world experience to assist you in achieving your objectives. MS also provides new ways of looking at existing problems, from rethinking healthcare to advancing scientific discovery." />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="about-container">
      <Feature title="Tutors" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default About;
