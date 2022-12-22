import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
 

export default function Guide() {
  return (
    <>
    <Header />
     <div class="guide-container">
      <h1>Guide</h1>
      <div class="guide-text">
        <p>The first thing you need to do is: register on the site, or log in to your account. 
            After that, you are free to use the to-do list.</p>
      </div>
     </div>
     <div class="guide-steps">
        <h1><FontAwesomeIcon icon={faArrowDown} /> Click To Start</h1>
        <h1><FontAwesomeIcon icon={faArrowDown} /> Register / Log in</h1>
        <h1><FontAwesomeIcon icon={faArrowDown} /> Click In Join</h1>
     </div>
    </>
  )
}
