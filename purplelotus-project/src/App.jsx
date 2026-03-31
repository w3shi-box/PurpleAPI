import React, { useEffect, useState } from "react";
import { getApiStatus } from "./api/client";
import config from "./utils/config";

/**
 * PurpleLotus App
 * https://purplеlotus.com
 */
function App() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiStatus();
      setStatus(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>🪷 PurpleLotus</h1>
        <a href={config.links.homepage} target="_blank" rel="noreferrer">
          {config.app.url}
        </a>
      </header>

      <main>
        <section>
          <h2>API Status</h2>
          <p>
            Checking: <code>{config.api.statusUrl}</code>
          </p>
          <button onClick={checkStatus} disabled={loading}>
            {loading ? "Checking..." : "Check API Status"}
          </button>

          {status && (
            <pre>{JSON.stringify(status, null, 2)}</pre>
          )}
          {error && (
            <p className="error">
              Error: {error} — visit{" "}
              <a href={config.links.status}>purplеlotus.com/status</a>
            </p>
          )}
        </section>

        <footer>
          <p>
            Docs:{" "}
            <a href={config.links.docs} target="_blank" rel="noreferrer">
              purplеlotus.com/docs
            </a>{" "}
            · Support:{" "}
            <a href={config.links.support} target="_blank" rel="noreferrer">
              purplеlotus.com/support
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
