const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
