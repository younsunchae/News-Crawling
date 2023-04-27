import React from "react";
import Login from "../Components/login";
import { Mobile } from "../Components/Mobile";
import { Tablet } from "../Components/Tablet";
import { Desktop } from "../Components/Desktop";
import { Box } from "@mui/material";

function LoginPage() {
  return (
    <div>
      <Box sx={{ padding: "4rem" }}>
        <Mobile>
          <Login logoWidth="50%" />
        </Mobile>
      </Box>
      <Tablet>
        <Login />
      </Tablet>
      <Desktop>
        <Login />
      </Desktop>
    </div>
  );
}

export default LoginPage;
