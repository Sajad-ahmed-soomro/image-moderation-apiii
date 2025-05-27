function ReportViewer({ report }) {
  if (!report) return null;

  const { predictions } = report;

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "0.5rem" }}>Moderation Report</h2>
      {predictions && predictions.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {predictions.map(({ className, probability }) => (
            <li key={className} style={{ marginBottom: "0.3rem" }}>
              <strong>{className}:</strong> {(probability * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No predictions available.</p>
      )}
    </div>
  );
}

export default ReportViewer;
