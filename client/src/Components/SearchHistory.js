import React from "react";
import PropTypes from "prop-types";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import "../styles.css";

function SearchHistory(props) {
  const handleDelete = (index) => {
    const newHistory = [...props.history];
    newHistory.splice(index, 1);
    props.setHistory(newHistory);
  };

  return (
    <div style={{ maxHeight: props.height }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 10px",
          height: "100%",
          width: "100%",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          <col style={{ width: "1%" }} />
        </colgroup>
        <thead
          style={{
            backgroundColor: "#f0f0f0",
            position: "sticky",
            height: "5vh",
            top: "64px",
            zIndex: "1",
          }}
        >
          <tr>
            <th style={{ textAlign: "center", border: "3px solid #ddd" }}>
              검색 히스토리
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            overflowY: "scroll",
            height: "calc(40vh - 64px)",
            display: "block",
          }}
          className="scroll-hide"
        >
          {props.history.length === 0 ? (
            <tr>
              <td style={{ textAlign: "center" }}>검색 내역이 없습니다.</td>
            </tr>
          ) : (
            props.history.map((search, index) => (
              <tr key={index} style={{ textAlign: "left", display: "flex" }}>
                <td
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    border: "3px solid #ddd",
                    maxWidth: "100%",
                    wordBreak: "break-all",
                  }}
                >
                  <a href={search} style={{ color: "black", maxWidth: "100%" }}>
                    {search}
                  </a>

                  <IconButton onClick={() => handleDelete(index)}>
                    <ClearIcon />
                  </IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

SearchHistory.propTypes = {
  height: PropTypes.string.isRequired,
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired,
};

export default SearchHistory;
