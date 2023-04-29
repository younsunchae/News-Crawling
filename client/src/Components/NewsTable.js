import React from "react";

const NewsTable = ({ articles }) => {
  const rows = articles.map((article, index) => {
    return {
      id: index + 1,
      title: article.title,
      author: article.author,
      url: article.url,
      imageUrl: article.imageUrl,
    };
  });

  return (
    <div style={{ height: "50vh" }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0px 10px",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f0f0f0",
            position: "sticky",
            top: "0",
          }}
        >
          <tr>
            <th
              style={{
                border: "3px solid #ddd",
                whiteSpace: "nowrap",
              }}
            >
              순번
            </th>
            <th
              style={{
                whiteSpace: "nowrap",
                borderTop: "3px solid #ddd",
                borderBottom: "3px solid #ddd",
              }}
            >
              제목
            </th>
            <th
              style={{
                whiteSpace: "nowrap",
                border: "3px solid #ddd",
              }}
            >
              작성자
            </th>
            <th
              style={{
                whiteSpace: "nowrap",
                borderTop: "3px solid #ddd",
                borderBottom: "3px solid #ddd",
              }}
            >
              기사 URL
            </th>
            <th
              style={{
                whiteSpace: "nowrap",
                border: "3px solid #ddd",
              }}
            >
              이미지 URL
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            height: "calc(50vh - 40px)",
          }}
        >
          {rows.map((row) => (
            <tr key={row.id}>
              <td
                style={{
                  border: "3px solid #ddd",
                }}
              >
                {row.id}
              </td>
              <td
                style={{
                  borderTop: "3px solid #ddd",
                  borderBottom: "3px solid #ddd",
                  wordBreak: "break-all",
                }}
              >
                {row.title}
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  border: "3px solid #ddd",
                }}
              >
                {row.author}
              </td>
              <td
                style={{
                  wordBreak: "break-all",
                  textAlign: "left",
                  borderTop: "3px solid #ddd",
                  borderBottom: "3px solid #ddd",
                }}
              >
                <a href={row.url} style={{ color: "black" }}>
                  {row.url}
                </a>
              </td>
              <td
                style={{
                  wordBreak: "break-all",
                  textAlign: "left",
                  border: "3px solid #ddd",
                }}
              >
                <a href={row.imageUrl} style={{ color: "black" }}>
                  {row.imageUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
