import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";

const Header = (props) => {
  return (
    <Box sx={{ marginLeft: "5%", marginRight: "5%" }}>
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
              padding: "1rem",
            }}
          >
            <img src={logo} alt="logo" width={props.logoWidth} />
          </Box>
          <Button
            color="secondary"
            sx={{ fontWeight: "bold", fontSize: "1em" }}
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
