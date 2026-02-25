import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

function Dashboard() {
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loadingId, setLoadingId] = useState(null);
  const [results, setResults] = useState({});
  const [historyData, setHistoryData] = useState({});

  // ---------------- FETCH LINKS ----------------
  const fetchLinks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/links`);
      setLinks(res.data);
    } catch {
      setError("Could not fetch links");
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // ---------------- ADD LINK ----------------
  const addLink = async () => {
    if (!url) return setError("URL cannot be empty");

    try {
      await axios.post(`${BASE_URL}/api/links`, { url });
      setUrl("");
      fetchLinks();
    } catch {
      setError("Invalid URL or server error");
    }
  };

  // ---------------- DELETE LINK ----------------
  const deleteLink = async (id) => {
    if (!window.confirm("Are you sure you want to delete this link?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/links/${id}`);
      fetchLinks();
    } catch {
      alert("Failed to delete link");
    }
  };

  // ---------------- CHECK NOW ----------------
  const checkNow = async (id) => {
    setLoadingId(id);

    try {
      const res = await axios.post(`${BASE_URL}/api/check/${id}`);

      setResults((prev) => ({
        ...prev,
        [id]: res.data,
      }));
    } catch {
      alert("Check failed");
    }

    setLoadingId(null);
  };

  // ---------------- FETCH HISTORY ----------------
  const fetchHistory = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/history/${id}`);

      setHistoryData((prev) => ({
        ...prev,
        [id]: res.data,
      }));
    } catch {
      alert("Failed to load history");
    }
  };

  // ---------------- RENDER DIFF ----------------
  const renderDiff = (diffText) => {
    return diffText.split("\n").map((line, index) => {
      if (line.startsWith("+")) {
        return (
          <div key={index} className="diff-added">
            {line}
          </div>
        );
      }
      if (line.startsWith("-")) {
        return (
          <div key={index} className="diff-removed">
            {line}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  return (
    <div>
      {/* ---------------- ADD LINK CARD ---------------- */}
      <div className="card">
        <h2>Add Link</h2>

        <div className="add-link-row">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="primary-btn" onClick={addLink}>
            Add
          </button>
        </div>

        {error && <p className="error">{error}</p>}
      </div>

      {/* ---------------- LINKS LIST ---------------- */}
      <div className="card">
        <h2>Monitored Links</h2>

        {links.map((link) => (
          <div key={link._id} className="link-item">
            {/* HEADER */}
            <div className="link-header">
              <strong className="link-url">{link.url}</strong>

              <div className="button-group">
                <button
                  onClick={() => checkNow(link._id)}
                  disabled={loadingId === link._id}
                  className="primary-btn"
                >
                  {loadingId === link._id ? "Checking..." : "Check Now"}
                </button>

                <button
                  onClick={() => fetchHistory(link._id)}
                  className="secondary-btn"
                >
                  View History
                </button>

                <button
                  onClick={() => deleteLink(link._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* RESULT */}
            {results[link._id] && (
              <div className="result-box">
                <h4>{results[link._id].message}</h4>

                {results[link._id].summary && (
                  <>
                    <h5>Summary:</h5>
                    <pre>{results[link._id].summary}</pre>
                  </>
                )}

                {results[link._id].diff && (
                  <>
                    <h5>Diff:</h5>
                    <div className="diff">
                      {renderDiff(results[link._id].diff)}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* HISTORY */}
            {historyData[link._id] && (
              <div className="history-box">
                <h4>History (Last 5 Checks)</h4>

                {historyData[link._id].map((item) => (
                  <div key={item._id} className="history-item">
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(item.createdAt).toLocaleString()}
                    </p>

                    {item.summary && (
                      <>
                        <p><strong>Summary:</strong></p>
                        <pre style={{whiteSpace:'pre-wrap'}}>{item.summary}</pre>
                      </>
                    )}

                    {item.diff &&
                      item.diff !== "Initial snapshot stored." && (
                        <>
                          <p><strong>Diff:</strong></p>
                          <div className="diff">
                            {renderDiff(item.diff)}
                          </div>
                        </>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;