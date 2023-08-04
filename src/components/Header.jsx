import React from 'react'
import '../styles/header.scss';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {SiReplit} from 'react-icons/si';
const Header = ( ) => {
  
  // const showIcons = () => {
  //   let var1 = document.getElementById('react-icons');
  //   var1.style.visibility = 'visible';
  // }
  // const hideIcons = () => {
  //   let var2 = document.getElementById('react-icons');
  //   var2.style.visibility = 'hidden';
  // }
  return (
    <div className='header'>
      <h1 >Music Player Mp3</h1>
      <div className="icons" id='react-icons'>
      <a href="https://github.com" target='_blank'><AiFillGithub  className='icon'/></a>
      <a href="https://linkdin.com" target='_blank'><AiFillLinkedin className='icon'/></a>
      <a href="https://replit.com" target='_blank'><SiReplit className='icon'/></a>
      </div>
    </div>
  )
}

export default Header