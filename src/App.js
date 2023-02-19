import React from "react";
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Image from './components/Image.js';
import Emoji from './components/Emoji.js';

import { StyledApp } from "./components/styles/StyledApp";
import { GlobalStyles }  from "./components/styles/Global";

function App() {
  return (
    <>  
      <GlobalStyles /> 
      <StyledApp>
        <Form />
        <Image />
        <Footer />
        <Emoji emojiFileName="first_yellow.png" height="88.32px" width="85.84px" top="65px" left="20px" />
        <Emoji emojiFileName="rose_emoji.png" height="214px" width="208px" top="400px" left="1000px" noDisplayWidth="1400px"/>
        <Emoji emojiFileName="second_yellow.png" height="100px" width="100px" top="360px" left="1000px" noDisplayWidth="1400px"/>

      </StyledApp>
    </>
  );
}

export default App;