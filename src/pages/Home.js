import "./styles.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  }

  return (
    <>
    <Header />
     <div class="container">
      <h1>A better online listings app for work</h1>
      <div class="text">
        <p>start by registering or connecting your account to be able to create your todo-list.</p>
      </div>
      <Button variant="dark btn-home all-btn" onClick={() => goToSignup()}>To start</Button>
     </div>
    <Footer/>
    </>
  )
}
