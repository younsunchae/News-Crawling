const express = require("express");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const cors = require("cors");

app.use(cors());
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.json());

app.use(
  session({
    secret: "loginUser",
    cookie: {
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.post("/api/login", (req, res) => {
  const { inputId, inputPw } = req.body;
  const validId = "dozn";
  const validPw = "doznScrapping2023";

  if (inputId === validId && inputPw === validPw) {
    req.session.user = { id: inputId };
    res.status(200).send({ loggedIn: true });
  } else {
    res.status(401).send({ loggedIn: false, message: "로그인 실패" });
  }
});

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.status(200).send({ loggedIn: false });
});

app.get("/api/check-session", (req, res) => {
  if (req.session.user) {
    res.status(200).send({ loggedIn: true, user: req.session.user });
  } else {
    res.status(200).send({ loggedIn: false });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      "https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid1=105&sid2=230",
      { responseType: "arraybuffer", responseEncoding: "binary" }
    );
    const content = iconv.decode(response.data, "EUC-KR").toString();
    const $ = cheerio.load(content);
    const newsList = [];

    $("div.list_body > ul > li").each((index, element) => {
      const author = $(element).find("span.writing").text();
      const title = $(element)
        .find("a")
        .text()
        .replace(/\n|\r|\s*/g, "")
        .trim();
      const url = $(element).find("a").attr("href");
      const imageUrl = $(element).find("img").attr("src");

      newsList.push({ author, title, url, imageUrl });
    });

    res.json(newsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
