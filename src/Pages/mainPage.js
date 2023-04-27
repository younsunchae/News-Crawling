import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function MainPage() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Box onClick={onClickLogout}>로그아웃</Box>
      <h1>main 입니둥 크롤링 구현합시다</h1>
    </div>
  );
}

export default MainPage;
