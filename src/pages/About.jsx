import React from "react";
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

export default function About() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get("page");

    const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
  }

  return (
        <>
            <Button 
            variant="contained" 
            style={{ display: "inline-block"}} 
            onClick={goToHomePage}>
            Back To Home</Button>

            <div style={{ display: "flex" , justifyContent: "center"  }}>
                <p style={{ fontSize: "25px"}}>{page}</p>
            </div>
        </>
    )
}
