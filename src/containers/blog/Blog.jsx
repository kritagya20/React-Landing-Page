import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Glimps of some of the  <br /> open source libraries</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2022" text="Digital Marketing: The Ultimate Guide to Strategic Marketing" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 6, 2022" text="Learn 5 PLCs in a Day-AB, Siemens, Schneider, Omron & Delta " />
        <Article imgUrl={blog03} date="Apr 26, 2022" text="Deep Learning A-Z™: Hands-On Artificial Neural Networks " />
        <Article imgUrl={blog04} date="Aug 20, 2022" text="Beginners Manual on Ethereum Crypto-currency & its Trading " />
        <Article imgUrl={blog05} date="Mar 26, 2022" text="SEO Training: Get Free Traffic to Your Website With SEO" />
      </div>
    </div>
  </div>
);

export default Blog;
