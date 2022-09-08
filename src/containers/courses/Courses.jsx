import React from 'react';
import Feature from '../../components/feature/Feature';
import './courses.css';

const CoursesData = [
  {
    title: 'Machine Learning',
    text: 'Master your language with lessons, quizzes, and projects designed for real-life scenarios.',
  },
  {
    title: 'Devops',
    text: 'Expertise certification training course via a comprehensive curriculum covering the concepts of DevOps.',
  },
  {
    title: 'Cyber Security',
    text: 'Learn cybersecurity skills to advance your education and career with our tutors!',
  },
  {
    title: 'Web Development',
    text: 'Leading Industry Experts Recommend a Structured Learning Path to Ensure Mastery.',
  },
];

const Courses = () => (
  <div className="courses section__padding" id="courses">
    <div className="courses-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="courses-container">
      {CoursesData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Courses;
