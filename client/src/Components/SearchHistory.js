import React from "react";
import PropTypes from "prop-types";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import "../styles.css";

function SearchHistory({ height, history, onDelete }) {
  return (
    <div style={{ maxHeight: { height } }}>
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
          {history.length === 0 ? (
            <tr>
              <td style={{ textAlign: "center" }}>검색 내역이 없습니다.</td>
            </tr>
          ) : (
            history.map((search, id) => (
              <tr key={id} style={{ textAlign: "left", display: "flex" }}>
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
                  <a
                    href={search.url}
                    style={{ color: "black", maxWidth: "100%" }}
                  >
                    {search.url}
                  </a>

                  <IconButton onClick={() => onDelete(search.id)}>
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
  onDelete: PropTypes.func.isRequired,
};

export default SearchHistory;
