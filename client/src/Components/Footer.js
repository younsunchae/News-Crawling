import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Footer = ({ articles }) => {
  const authorCounts = {};
  for (let article of articles) {
    if (authorCounts[article.author]) {
      authorCounts[article.author]++;
    } else {
      authorCounts[article.author] = 1;
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
        }}
      >
        작성자: 기사수
      </Typography>
      <Table sx={{ marginLeft: "-15px" }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ border: "none", fontSize: "15px" }} align="left">
              {Object.keys(authorCounts).map((author) => (
                <span key={author}>
                  {author}: {authorCounts[author]} | &nbsp;
                </span>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Footer;
