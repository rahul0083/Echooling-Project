import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_top'>
       <div className='footer_top1'>
        <img src="data:image/png;base64,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" alt="image" />
        <div>There are course and event custom <br /> post types so you can easily create <br /> and <br />
             manage course, events.</div>
             <div>+(402) 76244183</div>
             <div><a href="/">info@echooling.com</a> </div>
       </div>
       <div className='footer_top2'>
        <h2>About us</h2> 
       <div className='footer_menu'>  <ul>
            <li><a href="/">About</a></li>
            <li><a href="/"> Courses </a></li>
            <li><a href="/">Events</a> </li>
            <li><a href="/">Carrer</a></li>
            <li><a href="/">Become a Teacher</a> </li>
            <li><a href="/">Contact</a> </li>
        </ul>
        </div>
       </div>
       <div className='footer_top3'>
        <h2>Useful Links</h2>
        <div className='footer_menu'>  
        <ul>
            <li><a href="/">Browse Library</a></li>
            <li><a href="/">Library </a></li>
            <li><a href="/">Partners</a> </li>
            <li><a href="/">News & Blog</a></li>
            <li><a href="/">FAQ</a> </li>
            <li><a href="/">Tutorials</a> </li>
        </ul>
        </div>
       </div>
       <div className='footer_top4'>
        <h2>Newsletter</h2>
        <div>Get the latest Echooling news <br />
           delivered to you inbox</div>
           <form action="/">
           <input type="email" placeholder='Enter Your Mail' required />
           <button><ArrowForwardIcon /></button>
           </form>
       </div>
      </div>
      <hr />
      <div className='footer_bottom'>
        <div className="footer_bottomleft">
        
      <CopyrightIcon />2022 <a href="/">Echooling.</a>All Rights Reserved
        </div>
        <div className="footer_bottomright">
          <ul className='links'>
            <li>Follow us</li>
            <li><a href="/"><span><FacebookRoundedIcon /></span></a></li>
            <li><a href="/"><span><TwitterIcon /></span></a></li>
            <li><a href="/"><span><LinkedInIcon /></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
