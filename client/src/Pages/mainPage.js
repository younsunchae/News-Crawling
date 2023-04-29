import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Desktop } from "../Components/Desktop";
import { Tablet } from "../Components/Tablet";
import { Mobile } from "../Components/Mobile";
import Header from "../Components/Header";
import NewsTable from "../Components/NewsTable";
import SearchBar from "../Components/SearchBar";
import SearchHistory from "../Components/SearchHistory";
import { getArticles } from "../apis/api";
import ExcelDownload from "../Components/ExcelDownload";
import Footer from "../Components/Footer";
import "../styles.css";

function MainPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchData();
  }, []);

  const onClickLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const handleSearch = (value) => {
    if (value) {
      setSearchHistory([...searchHistory, value]);
    }
  };

  const handleDelete = (index) => {
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
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
                      history={searchHistory}
                      setHistory={setSearchHistory}
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
                      history={searchHistory}
                      setHistory={setSearchHistory}
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

            <Box sx={{}}>
              <SearchHistory
                history={searchHistory}
                setHistory={setSearchHistory}
                onDelete={handleDelete}
              />
            </Box>
            <Box sx={{}}>
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
