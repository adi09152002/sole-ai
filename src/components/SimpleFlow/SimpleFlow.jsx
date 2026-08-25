import { useRef, useState } from "react";
import "./SimpleFlow.css";

// Row widths (dot counts) approximating the upload-cloud dot-pattern icon
// seen in the reference design.
const CLOUD_ROWS = [
  8, 10, 12, 13, 15, 16, 17, 18, 19, 19, 20, 20, 19, 19, 18, 17, 15, 12, 9,
];

const DocCard = ({ className, lines = 6 }) => (
  <div className={`simple-flow__doc ${className}`}>
    <div className="simple-flow__doc-lines">
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="simple-flow__doc-line" />
      ))}
    </div>
    <span className="simple-flow__doc-chip" />
  </div>
);

const SoleMarkIcon = () => (
  <svg viewBox="0 0 29 24" className="simple-flow__scan-icon">
    <path
      d="M8 12c2-3 4-4 6.5-4s4.5 1 6.5 4"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.9"
      fill="none"
    />
    <path
      d="M7 17c2.5-2.5 5-3.5 7.5-3.5s5 1 7.5 3.5"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.75"
      fill="none"
    />
    <path
      d="M9 7c1.8-2 3.6-3 5.5-3s3.7 1 5.5 3"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.6"
      fill="none"
    />
  </svg>
);

const SimpleFlow = () => {
  // "idle" = dashed upload card, "scanning" = fanned-out doc cards + status pill
  const [status, setStatus] = useState("idle");
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setStatus("scanning");
    // Reset the input so selecting the same file again still fires onChange
    event.target.value = "";
  };

  return (
    <section className="simple-flow">
      <div className="simple-flow__panel">
        {/* Dashed grid background */}
        <div className="simple-flow__grid" aria-hidden="true" />

        {/* Faint decorative document cards in the corners */}
        <DocCard className="simple-flow__doc--tl" lines={6} />
        <DocCard className="simple-flow__doc--tr" lines={6} />
        <DocCard className="simple-flow__doc--ml" lines={7} />
        <DocCard className="simple-flow__doc--mr" lines={7} />
        <DocCard className="simple-flow__doc--bl" lines={6} />

        {/* Hidden native file input, wired to the Upload File button */}
        <input
          ref={fileInputRef}
          type="file"
          className="simple-flow__file-input"
          onChange={handleFileChange}
          accept=".csv,.xlsx,.xls,.pdf,.ofx,.qif"
        />

        {status === "idle" && (
          <div className="simple-flow__upload-card">
            <div className="simple-flow__cloud" aria-hidden="true">
              {CLOUD_ROWS.map((count, rowIndex) => (
                <div key={rowIndex} className="simple-flow__cloud-row">
                  {Array.from({ length: count }).map((_, i) => (
                    <span key={i} className="simple-flow__cloud-dot" />
                  ))}
                </div>
              ))}
            </div>

            <p className="simple-flow__upload-title">
              Drag this week&rsquo;s files to start
            </p>
            <p className="simple-flow__upload-text">
              Settlements, payouts, bank statements. The agent standardizes
              and matches everything,
            </p>
            <button
              type="button"
              className="simple-flow__upload-btn"
              onClick={handleUploadClick}
            >
              Upload File
            </button>
          </div>
        )}

        {status === "scanning" && (
          <div className="simple-flow__scan-stage">
            <DocCard className="simple-flow__scan-doc simple-flow__scan-doc--left" lines={7} />
            <DocCard className="simple-flow__scan-doc simple-flow__scan-doc--center" lines={7} />
            <DocCard className="simple-flow__scan-doc simple-flow__scan-doc--right" lines={9} />

            <div className="simple-flow__scan-pill">
              <span className="simple-flow__scan-icon-wrap">
                <SoleMarkIcon />
              </span>
              <span className="simple-flow__scan-label">
                Agent scanning&hellip;.
              </span>
            </div>
          </div>
        )}

        {/* Bottom copy */}
        <div className="simple-flow__copy">
          <span className="simple-flow__eyebrow">/THE SIMPLE FLOW</span>
          <h2 className="simple-flow__heading">
            Complex accounting work. Made simple.
          </h2>
          <p className="simple-flow__subtitle">
            Upload your data. Get clear actions in seconds.
          </p>
          <a href="/get-started" className="simple-flow__cta">
            Get Started For Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleFlow;