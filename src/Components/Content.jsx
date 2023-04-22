import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import CardsCourses from './CardsCourses';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Content() {
  return (
    <div className='content'>
         <img    src="https://echooling-react.vercel.app/static/media/1.444626c32f772f4850ee.jpg" alt="Course img" />
        <div className='content_top'>
      <p >Course
      <ul>
        <li> <a href="/Echooling-Project">Home</a> </li>
        <li>Course</li>
      </ul>
      </p>
      </div>
      <div className='content_middle'>

       <div className='content_middle_left'> 
       <div>
        <TuneIcon />
       </div>
       <div >Filters</div>
       </div>
       <div className='content_middle_right'>
         <select name="categories" id="category">
            <option value="categories">All Categories</option>
            <option value="education">Education</option>
            <option value="marketing">Marketing</option>
            <option value="development">Development</option>
            <option value="uidesign">UI/UX Design</option>
         </select>
         <select name="languages" id="language">
            <option value="language">All Language</option>
            <option value="english">English</option>
            <option value="italic">Italic</option>
            <option value="spanish">Spanish</option>
            <option value="bangla">Bangla</option>
            <option value="urdu">Urdu</option>
            <option value="hindi">Hindi</option>
         </select>
         <select name="prices" id="price">
            <option value="prices">All Prices</option>
            <option value="freecourses">Free Courses</option>
            <option value="paidcourses">Paid Courses</option>
            <option value="subscription">Subscription Only</option>
            
         </select>
         <select name="skill" id="skills">
            <option value="skills">All Skills</option>
            <option value="education">Begineer</option>
            <option value="marketing">Intermediate</option>
            <option value="development">Advanced</option>
         </select>
       </div>
      </div>
      <div className='content_bottom'>
      <div className='content_bottom_top'>
       <div  className='coursesavailable'>We found 104 courses available for you</div>
       <div >
        <select name="sortby" id="sortby">
            <option value="default">Sort by: Default</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="dates">Sort by dates</option>
            <option value="low to high">Sort by price: low to high</option>
            <option value="high to low">Sort by price: high to low</option>
         </select>
         </div>
      </div>
      <div className='content_bottom_middle'>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/3.6b11038910b97598ddc3.jpg" description="The Most Complete Design Thinking Course On The Market"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/1.b72c23dfb77d83dd1915.jpg" description="Everything You Need to Know About Business"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/2.330bf7ab6f7a9c287f65.jpg" description="Statistics Data Science and Business Analysis"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/4.8672a859a83dc3742656.jpg" description="Become a UI/UX Designer Everything You need To Know"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/5.ea1ec548f5f047f7e1d1.jpg" description="Learn Essentials of User Interface Design in Figma"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/6.84ade845657cd10bef29.jpg" description="AWS Certified Solutions Architect Associate"/>
       <CardsCourses imageUrl="https://echooling-react.vercel.app/static/media/3.2f7b3c10359c070cae98.png" description="Python for Data Science & Machine Learning"/>
      </div>
      <div className='content_bottom_bottom'>
      <ul className='links'>
            <li><a href="/Echooling-Project">1</a></li>
            <li><a href="/Echooling-Project">2</a></li>
            <li><a href="/Echooling-Project"><span><ArrowForwardIcon /></span></a></li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Content
