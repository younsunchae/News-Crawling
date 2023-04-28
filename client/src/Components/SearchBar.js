import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton, InputAdornment } from "@mui/material";

function SearchBar({ onSearch }) {
  const [url, setUrl] = useState("");

  const handleSearch = () => {
    onSearch(url);
    setUrl("");
  };

  return (
    <TextField
      placeholder="URL 입력"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <ArrowForwardIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      color="secondary"
      fullWidth
    />
  );
}

export default SearchBar;
