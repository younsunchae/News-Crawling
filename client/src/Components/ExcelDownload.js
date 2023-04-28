import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import * as XLSX from "xlsx";

const ExcelDownload = ({ rows }) => {
  const download = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "News");
    XLSX.writeFile(workbook, "naverITnews.xlsx");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography fontWeight="bold">전체 기사 수: {rows.length}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
      <Button
        variant="text"
        color="secondary"
        onClick={download}
        sx={{ fontWeight: "Bold", fontSize: "large" }}
      >
        엑셀파일 다운로드 &nbsp;
        <DownloadOutlined />
      </Button>
    </Box>
  );
};

export default ExcelDownload;
