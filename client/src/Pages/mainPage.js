import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Desktop } from "../Components/Desktop";
import Header from "../Components/Header";
import axios from "axios";

function MainPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/news");
      setArticles(response.data);
    };
    fetchData();
  }, []);

  const onClickLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Desktop>
        <Header logout={onClickLogout} logoWidth={"100px"} />
        <ul>
          {articles.map((article) => (
            <li key={article.url}>
              <img src={article.imageUrl} alt={article.title} />
              <a href={article.url}>{article.title}</a>
              <p>{article.author}</p>
            </li>
          ))}
        </ul>
      </Desktop>
    </div>
  );
}

export default MainPage;
