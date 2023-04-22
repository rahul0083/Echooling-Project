import React, { useRef, useState } from 'react'
import NavbarOptions from './NavbarOptions'
import SearchIcon from '@mui/icons-material/Search';
// import BorderClearIcon from '@mui/icons-material/BorderClear';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AppsIcon from '@mui/icons-material/Apps';
function Navbar() {
  const [active,setActive]=useState("header__right")
  const navtoggle=()=>{
    if (active === "header__right") {
      setActive("nav__menu nav__active");
    } else setActive("header__right");
  }
  return (
    <div>
     <div className='header'>
       <div className="header__left">
       <div className="header__logo">
          <a href="/Echooling-Project">  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAsCAYAAAAU9DYWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsCSURBVHgB7VxdcuO4EW5QGlflKdobcE4wnK3keTQnmPEJrHlNxTbnBKZPYMqTyqvlE1g5wcpvW5VkhjnBcE8w2iRVW+W1yO1ugPohAYmkSEvy4quiLZIgCIBodOPrBgS0hL6f9v4nkpMkTd8DiJ4j0vBF2rn/MRQxWFg8EwhoGH/yf+0nIE7wJwoO9DRJRg6kt/8KX0zAwuLA0YgAkbb5LyTnKaQDzNAt+VgsBARWK1kcMrYSINI2MxAXmEnfkCQG1DZ44H/nAszCNUZhGv/7qnsLFhYHhMoClGkbFAof9CbaVJBAaMw0KXCkpZwTQ/YxHpMj6FxarWRxCCglQEwIwAznNnBu0jZ4fQJCjGepcxuFYrouP8//xXWg0xfQIbPP06VJMT9HwMhqJYt9xloBkoSA8w678wAM2oZMNAc1Tl1S4M/+g/cI4KNWegN6Ey/GY9KBZPjP8CgCC4s9glaAPNQ4AmZ367RNCsltAi/Gm7RNFXzvP7B5lxrem4KIvoSd12BhsScwCRCaWLOvucukbYZH0B21PT8hEw/Nu0CnlT6H3cap9yeDdxYULzoRROEYDh2e7wIkg+INZ4z1i3JpyWwniybGezEcMLplEqHf5m3eRCPTy2hSeac+OU/V0yP5P2vcdArRp1D3WJZnFP4hxlNOT1oJ87iBuvB8KocHdRGFE2gOF8VLsxH+OXwBkgOdrn4x/pH9RArZD3i489s0qETXl3CgKCVAmfAsM3Az1kjwUv+EwDRzzTFR/1XjsvbSCtAMnLvv/UdKM8K515DMw8/h0Qiv1RcgFh76aLVxuBpv75DqXBkBCtZ9wwPVk8Gpkvj/8IidMQ1ATyg0BZfe0eV3WTwvLGmeFcxcOFCU0kDVkQ4XJhyzaASlptPGSId6SD+AxY4g7kFLEHUmcKBoR4D0c5wA9gHRpxFY7AhOqLRQ5kgnYurykImEdgTIO8U5h3DliXMMbPIlah6TIvPy6S1Y/P4QhWR9DHDOI6NYDpyBI7RkwgkXFpPFzJRT589oTi4ZPhcWdZwWKNv6+VXPq8nyMGM2/4bb1SsPKUj1TPl8HauQDy3UqSUBeubw/D5OfJFRSjJ/xtK9MzJLkJbulDdNuFMQQ8VUf28prxj/jjbSvN4pPYdmUdIv3qM80kmp8sh6YT7iPeaVrxeofIa1/VbSD6ahup2XXDZ+v44xdb4DbpfZTaGOZdrI++t7yQxrnw3w+s/4jrvVh8QEouFGS6kSC1cezltuFD4gkqNEdu4ctvnmnV3Ijyz6oGcj8ZoYYJov2CHeb87QcTmtPjgX7xHNe66n4WlElebyjSqPDq4qzw9ry7Oo1wCMLCu9I7nD8lzB06Iv20hbRxdkG+nLxPUi4TA+O8L7tevTjgDRaLI4poVrhwr+GKXJkJ7sbP4GOj7tw8Y1VJiGndPLZcmckkbBycNV5Smmr1YvYGH3zrfxzVVEQtphg+uEypSrW/l6uVATLWmgZwhpPwdQGWlDozUF9a7ku2591RqwEC2ZiSzgAVRGOigI9c6RLDRs7e9VDb8/ASKTp9RxlluzNDMIAvmVyEYn81Ro5gakPdZqIdLQvsoDj+QYtBNszkd2fO4cHCGfR8wmcnSNTI3zWl8e1oz+5nrBcFGm9KM+ibiAp0GspgUbygNvFj8Tf21e8zaCrZbLtEci8MemsJ/53ggBFvh+9yZcaZPnfv5L1kUzf0hHS36lKab7oEyynLkxIwGKwPSe6Hq4dD5G4aX0us7pynxMncP5MGelJMN0jHl9haKmosEhUGZgv5gP12v5HSHm09OUqcdmU+thOOkw9w4sz/k71dbLcJd+v9HnRcKj+qBsI9SkZ6alNBtRW4CErkPMAzeZoern7o7wGmmAMY+M0XVB8lNI7gVPqtsEsiulkMRLJwYN0lmtA833vNMJviOXXvwRjEi/aa7FBrpfCWb6SnM/NnRkKmO+47tSeChcSmeEdDSjMjtBNULNA8sE2oVOI/+kSZdp6J5iSHMgZq3ZAbySAHXhMX6A7mUC3XBlHRBP3tJ3Cxp2na+HKFLUSkxpzmlRFsYv4dHA838J5GrVmn6CTShBTRZBGkRbp2IZo0/H0DqETqD/o09rFEYXhcJkWhYHRx4cmPZ1c/mvGRx2hQdX37XTe2gYZQRo3kl+lMsMAj6RUo6mAO37pjMDNsJV9CqpUPpgIZl4ainDSFOGHuwMwvTudoR8MzTl0WkyQidmzV8ABXAKV/tIxpyWQtsWQx0c9fR1psGkWRhJBFp1isdxAp2XKzdI27DvISHbOqwwp1gHGglHnKd3epP3V3wOuzS5/iDaNxUsLCpBq4EiueJ0Yeowi5QQjepLD7WA9jDXSvGyB53WBUFRMz0RKIK8zTpXRgylJ72PPcM8J87N8xYg60KvhXSa72fYOzxMDV27cSvGbMJtb6JtC3chTDwxH+2OxTPOI0hzxqtXSHvO8ixcBNHfI2gMNMClbu6aYT5jnOdMN9RrsnqFGTtdB4xh73AU6004eAUNozg0SRPtrmETbUtwGUZLJl4fnhTdif66julJrlRozdLR6UOjSHWEgWdolxPNtVgSN6Z1ODPNM8k7fVpnAvsGqT3j4g0ksKSDtTFIDfSkJtq2WDbxyFEohq1rJWagzicav8M5+1mIkp8HhOY1A6HToPYhOGPlY8shuWFfFNHZsjxX+vKQaQwyvEpbL6Ha11H+qUe6HxTzYUEcw35CR99Tm9ypNoqUQ/pc30Y5eH9BGelcKeJlqnxukSMjeTkCNoCdMl2V4coAzLJBm9tCXGouUnuNsLOlWI5vKiA0j7hxRyPnp40ycGXQ6Lw8A9CVh+aVc2jrRQhkHnQ4hli0dAh7C/Jbaf1Hnuwz3EZfDd9Mg24WkOpCts8GDlJd9qR7Pn6MGXZC2nK3MMruKcghSssGnNtKtCuZgJXQ+cj586h+Rh3mvNrzOFK1AvFBdoaqHvQE63Mdz09lvUiIKoblYNsbdlfaC0inNtZLbB+LKOd/bu4qBw105y/jkdSfqE1D6JxMOheaQSz/MQ+Ph/hJ7Y0wVWwQTe4oluzVBgGmZ4a8VVZts43D9avgErKRLLr25XqfUp1tyjFbbYW5cAfx3yrrwS3xhCrP34qaK7oO5Hqf0kKE5lGn5Mi9Q5CA60OQlpENvr0SafKIdfxmzB0lus7W7tzC9nDlQSqQO/CFHBlogk0dgJg+QHUqPqogv+y9sSw8mSscAPgdf+xdxtPR+7l8xpCgKceSUaBi2/sv8PIQ+k68UUoMxvLwoLO+PFyvx9frQ53oHn+HQTVn6w7B9TK1D9Xnkfra+rpwXVcCWLPBMV5lC7LdJfmlK9d7ysQ7B8Nm8A0iBhl4+g81yvb29mMtNm3sSeqayYJ4Z+WdL1nOtomqWZ5ivWKQCyMPQ2hMkFHx7vxbZUu6eT6Uh2ZFqmwXOqZZW5QToMX9/pabFFYAR81OwMJiG8g+fWJc8u2d0Zw21NwZsiW2AW0tZ4hRNtUcJx/HxpShCxYWTwJeeEi0/ACkZUM+NKVJE7msQwunFEGyrQDR/CSSjj12qEUVNtJQ6pSckeLN4bB/FgcD1i5zKt+FbEnNRqSlSao6AjSVky9BlG59u1jan3SM+Vzal321vuQELCy2BhFWadVnsE86H8umripAkdqCqPnJpMxzzIfnB7C7pQIWzwbiWLllyg7ItCV1UKV/VyMRLCwOEbJfB8rPuMwiZ1OQe57z1FAMdmNFi+cPOZ8ZQAuw21pZWGwBnQB9AwsLi1L4DUQ6idBphA8sAAAAAElFTkSuQmCC' />
         </a>
        </div>
       
       </div>
      
       <div className={active} >
        {/* <BorderClearIcon /> */}
        <AppsIcon />
        <NavbarOptions  title="Categories" option1="English Book" option2="Maths Book" option3="Story Book"/>
        <NavbarOptions title="Home" option1="Home One" option2="Home Two" option3="Home Three"/>
        <NavbarOptions title="Pages" option1="About" option2="Instructor" option3="Profile" option4="Login" option5="Signup" option6="Events" />
        <NavbarOptions title="Courses" option1="Course" option2="Right Sidebar" option3="Courses List" option4="Course List"  />
        <NavbarOptions title="Blog" option1="Blog" option2="Single Blog" />
       
        <div className='header__options'>
        <div className='header_links'>
       <div> <a href="/Echooling-Project">Contact </a> </div> 
       </div>
        </div>
        <div className="header__search">
           <input type="text" placeholder='Search Course' />
           <SearchIcon /> 
       </div>
       
       </div>
    
       <div className='hidebtn'>  
       <div className='header__options' onClick={navtoggle}> <DensityMediumIcon />   </div>
      </div>
    </div>
    
    </div>
  )
}

export default Navbar
