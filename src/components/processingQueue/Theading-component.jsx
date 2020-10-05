import React from "react";

export const Theading = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th key="011" style={{ width: 110 }}>Input Records</th>
            <th key="012" style={{ width: 150 }}>Valid Records</th>
            <th key="013" style={{ width: 150 }}>Action</th>
            <th key="014" style={{ width: 150 }}>By</th>
            <th key="015" style={{ width: 300 }}>Lists</th>
            <th key="016">Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Theading;
