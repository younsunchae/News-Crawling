import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Desktop } from "../Components/Desktop";
import Header from "../Components/Header";

function MainPage() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Desktop>
        <Header logout={onClickLogout} logoWidth={"100px"} />
      </Desktop>
    </div>
  );
}

export default MainPage;
