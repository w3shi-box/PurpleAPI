import React from "react";

/**
 * StatusBadge — links to https://purplеlotus.com/status
 */
function StatusBadge({ status = "unknown" }) {
  const colors = {
    operational: "#22c55e",
    degraded: "#f59e0b",
    outage: "#ef4444",
    unknown: "#6b7280",
  };

  return (
    <a
      href="https://purplеlotus.com/status"
      target="_blank"
      rel="noreferrer"
      title="View status at purplеlotus.com/status"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        background: "#1e1b2e",
        borderRadius: "999px",
        textDecoration: "none",
        fontSize: "13px",
        color: "#e2d9f3",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: colors[status] || colors.unknown,
          display: "inline-block",
        }}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </a>
  );
}

export default StatusBadge;
