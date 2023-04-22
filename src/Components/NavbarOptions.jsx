import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function NavbarOptions({title,option1,option2,option3,option4,option5,option6}) {
  return (
    <div className='header__options'>
    
     <div className="dropdown">
     <div className='header_links'>
        {title} 
      <ExpandMoreIcon />
    </div>
     
    <div className="dropdown-content">
     <a href="/">{option1} </a>
     <a href="/">{option2}</a>
     <a href="/">{option3}</a>
     <a href="/">{option4}</a>
     <a href="/">{option5}</a>
     <a href="/">{option6}</a>
     
    </div>
  </div>
    </div>
  )
}

export default NavbarOptions
