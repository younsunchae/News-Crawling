import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";

const Header = (props) => {
  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "2px solid gray",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              paddingBottom: "1rem",
              paddindTop: "1rem",
            }}
          >
            <img src={logo} alt="logo" width={props.logoWidth} />
          </Box>
          <Button
            color="secondary"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
            onClick={props.logout}
          >
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
