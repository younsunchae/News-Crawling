import React from "react";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { Box, Table, TableBody, Typography } from "@mui/material";

const Footer = (props) => {
  const { articles } = props;

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
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          display: "inline-block",
          whiteSpace: "nowrap",
          marginLeft: "15px",
        }}
      >
        작성자: 기사수
      </Typography>
      <Table
        border="none"
        sx={{
          flexDirection: "column",
          display: "inline-block",
          border: "none",
          paddingTop: "3px",
        }}
      >
        <TableBody>
          <TableRow sx={{}}>
            <TableCell sx={{ border: "none", fontSize: "15px" }}>
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
