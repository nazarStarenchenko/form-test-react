import React from 'react';
import { FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";
import { ImFacebook } from 'react-icons/im';
import Emoji from './Emoji';
import { StyledFooter } from './styles/StyledFooter';

export default function Footer() {
  
  return (
    <StyledFooter>
      <ul>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><ImFacebook /></a></li>
        <li><a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterestP /></a></li>
      </ul>

      <Emoji emojiFileName="green_emoji.png" height="97px" width="78.46px" top="0px" right="100px" noDisplayWidth="500px"/> 
      <Emoji emojiFileName="first_yellow.png" height="88.32px" width="85.84px" top="65px" right="-20px" noDisplayWidth="500px"/>
      <Emoji emojiFileName="rose_emoji.png" height="214px" width="208px" top="2px" left="1px" noDisplayWidth="1000px"/>
    </StyledFooter>
  )
};