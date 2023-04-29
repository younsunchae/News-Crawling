import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";

const Header = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "2px solid gray",
        }}
      >
        <Toolbar>
          <Box sx={{ flex: 2 }}></Box>
          <Box sx={{ paddingBottom: "1%", paddingTop: "1%" }}>
            <img
              src={logo}
              alt="logo"
              width={props.logoWidth}
              style={{ margin: "auto" }}
            />
          </Box>

          <Box sx={{ flex: 1 }}></Box>
          <Box sx={{ flex: 1, alignItems: "right" }}>
            <Button
              color="secondary"
              sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              onClick={props.logout}
            >
              로그아웃
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
