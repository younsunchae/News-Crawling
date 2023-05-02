import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Desktop } from "../Components/Desktop";
import { Tablet } from "../Components/Tablet";
import { Mobile } from "../Components/Mobile";
import Header from "../Components/Header";
import NewsTable from "../Components/NewsTable";
import SearchBar from "../Components/SearchBar";
import SearchHistory from "../Components/SearchHistory";
import { getArticles, checkSession, logoutUser } from "../apis/api";
import ExcelDownload from "../Components/ExcelDownload";
import Footer from "../Components/Footer";
import "../styles.css";

function MainPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const checkSessionInterval = setInterval(async () => {
      const data = await checkSession();

      if (!data.loggedIn) {
        console.log("세션 만료");
        sessionStorage.removeItem("loginUser");
        navigate("/");
      }
    }, 10 * 60 * 1000);

    return () => {
      clearInterval(checkSessionInterval);
    };
  }, []);

  const onClickLogout = async () => {
    const data = await logoutUser();

    if (!data.loggedIn) {
      sessionStorage.clear();
      navigate("/");
    }
  };
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleSearch = (value) => {
    if (value) {
      const newUrl = {
        id: Date.now(),
        url: value,
      };
      setHistory([newUrl, ...history]);
    }
  };

  const handleDelete = (id) => {
    setHistory(history.filter((url) => url.id !== id));
  };

  return (
    <div>
      <Desktop>
        <div
          style={{
            height: "100vh",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ marginLeft: "5%", marginRight: "5%" }}>
            <Header logout={onClickLogout} logoWidth={"150px"} />
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "4vh",
                  paddingBottom: "4vh",
                  width: "70vw",
                }}
              >
                <SearchBar onSearch={handleSearch} />
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "1rem",
                      width: "30%",
                    }}
                  ></Box>
                  <Box sx={{ width: "70%" }}>
                    <ExcelDownload rows={articles} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    className="scroll-hide"
                    sx={{ flex: 1, paddingRight: "10%" }}
                  >
                    <SearchHistory
                      height="calc(40vh - 64px)"
                      history={history}
                      onDelete={handleDelete}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "70%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      className="scroll-hide"
                      sx={{ overflowY: "scroll", flex: 1 }}
                    >
                      <NewsTable articles={articles} />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                      <Footer articles={articles} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </div>
          </Box>
        </div>
      </Desktop>

      <Tablet>
        <div
          style={{
            height: "100vh",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ marginLeft: "5%", marginRight: "5%" }}>
            <Header logout={onClickLogout} logoWidth={"150px"} />
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "4vh",
                  paddingBottom: "4vh",
                  width: "70vw",
                }}
              >
                <SearchBar onSearch={handleSearch} />
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "1rem",
                      width: "30%",
                    }}
                  ></Box>
                  <Box sx={{ width: "70%", flexShrink: 0 }}>
                    <ExcelDownload rows={articles} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    className="scroll-hide"
                    sx={{ flex: 1, paddingRight: "10%" }}
                  >
                    <SearchHistory
                      height="calc(40vh - 64px)"
                      history={history}
                      onDelete={handleDelete}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "70%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      className="scroll-hide"
                      sx={{ overflowY: "scroll", flex: 1 }}
                    >
                      <NewsTable articles={articles} />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                      <Footer articles={articles} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </div>
          </Box>
        </div>
      </Tablet>

      <Mobile>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              flex: 1,
              padding: "10px",
            }}
          >
            <Header logout={onClickLogout} logoWidth={"80px"} />
            <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <SearchBar onSearch={handleSearch} />
            </Box>

            <SearchHistory
              height="50vh"
              history={history}
              onDelete={handleDelete}
            />

            <Box>
              <ExcelDownload rows={articles} />
            </Box>
            <Box className="scroll-hide" sx={{ flex: 1 }}>
              <NewsTable articles={articles} />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Footer articles={articles} />
          </Box>
        </Box>
      </Mobile>
    </div>
  );
}

export default MainPage;
