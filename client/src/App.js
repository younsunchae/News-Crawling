import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import MainPage from "./Pages/mainPage";
import LoginPage from "./Pages/loginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "./Components/ProtectedRoute";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});
function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loginUser")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/main"
              element={
                <ProtectedRoute
                  outlet={<MainPage />}
                  isAuthentication={isLogin}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
