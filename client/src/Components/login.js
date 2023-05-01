import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../apis/api";

function Login(props) {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onClickLogin = async () => {
    const data = await loginUser(inputId, inputPw);

    if (data.loggedIn) {
      sessionStorage.setItem("loginUser", inputId);
      navigate("/main");
    } else {
      console.log("Invalid credentials");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" width={props.logoWidth} />
      <Box sx={{ marginTop: 5 }}>
        <TextField
          margin="normal"
          fullWidth
          label="아이디"
          name="id"
          value={inputId}
          color="secondary"
          onChange={(e) => setInputId(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          color="secondary"
          value={inputPw}
          onChange={(e) => setInputPw(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={onClickLogin}
          sx={{
            marginTop: 5,
            padding: 1,
            backgroundColor: "black",
            fontWeight: "bold",
          }}
        >
          로그인
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
