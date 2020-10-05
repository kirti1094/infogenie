import React from "react";
import "./processing-table.css";
import jsonData from "../processingQueue/processing.json";
import Theading from "./Theading-component";
export const ProcessTable = (props) => {
  return (
    <div class="container">
      <div class="queue-heading">
        <div>Processing Queue</div><span>
          <a>View Suppresion List History</a>
        </span>
      </div>

      {jsonData.map((row) => (
        <table>
          <tr><tr className="date-border">{row.date}</tr>
            <tr className="after-border">{row.heading}</tr></tr>
          <Theading></Theading>
          <table>
            <thead>
              <td style={{ width: 110 }}>{row.records}</td>
              <td style={{ width: 140 }}>{row.validRec}</td>
              <td style={{ width: 150 }}>{row.action}</td>
              <td style={{ width: 160 }}>{row.by}</td>
              <td style={{ width: 300 }}>{row.list}</td>
              <td><span style={{
                backgroundColor: row.style,
                height: '12px',
                width: '12px',
                borderRadius: '50%',
                marginRight: '8px',
                display: 'inline-block'
              }}></span>{row.status}</td>
            </thead>
          </table>
        </table>
      ))}
    </div>
  );
};
