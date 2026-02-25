import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

function Status() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/status`)
      .then((res) => setStatus(res.data))
      .catch(() => setStatus({ server: "down", database: "down", llm: "down" }));
  }, []);

  if (!status) {
    return (
      <div className="card status-card">
        <h2>System Status</h2>
        <p>Checking system health...</p>
      </div>
    );
  }

  const StatusBadge = ({ label, value }) => (
    <div className="status-row">
      <span className="status-label">{label}</span>
      <span
        className={`status-badge ${
          value === "ok"
            ? "status-ok"
            : value === "down"
            ? "status-down"
            : "status-unknown"
        }`}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div className="card status-card">
      <h2>System Status</h2>

      <StatusBadge label="Server" value={status.server} />
      <StatusBadge label="Database" value={status.database} />
      <StatusBadge label="LLM" value={status.llm} />
    </div>
  );
}

export default Status;