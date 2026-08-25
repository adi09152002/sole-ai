import "./ReconciliationFlow.css";
import blobBg from "../../assets/image-19.png";

const FEATURES = [
  {
    title: "Know where every dirham went.",
    text: "Stop silent revenue leaks and see your true cash position before you close the day.",
  },
  {
    title: "Understand what your business is really earning.",
    text: "See which channels actually make money—not just the ones generating sales.",
  },
  {
    title: "Act while it still matters.",
    text: "Catch issues before recovery windows expire and close your books in minutes, not nights.",
  },
];

const INCOME_ROWS = [
  { name: "Noon", gross: "gross 805.00", net: "net 669.25" },
  { name: "Amazon", gross: "gross 514.00", net: "net 436.90" },
  { name: "Card acquirer", gross: "recognised income", net: "512.30" },
];

const SUMMARY_STATS = [
  { label: "Captured", value: "1,319.00" },
  { label: "Settled", value: "1,106.15" },
  { label: "Matched", value: "89%" },
];

const ReconciliationFlow = () => {
  return (
    <section className="recon-flow">
      <div className="recon-flow__inner">
        {/* Left column */}
        <div className="recon-flow__left">
          <div className="recon-flow__intro">
            <span className="recon-flow__eyebrow">/One Real Close</span>
            <h2 className="recon-flow__heading">
              <span className="recon-flow__heading--muted">
                The 15 dirhams
              </span>{" "}
              <span className="recon-flow__heading--dark">
                no tool could see.
              </span>
            </h2>
          </div>

          <div className="recon-flow__features">
            {FEATURES.map((feature, i) => (
              <div key={i} className="recon-flow__feature">
                <p className="recon-flow__feature-title">{feature.title}</p>
                <p className="recon-flow__feature-text">{feature.text}</p>
              </div>
            ))}
          </div>

          <a href="/request-access" className="recon-flow__cta">
            Request Access
          </a>
        </div>

        {/* Right column: gradient panel with floating card */}
        <div className="recon-flow__right">
          <img
            src={blobBg}
            alt=""
            aria-hidden="true"
            className="recon-flow__blob"
          />

          <div className="recon-flow__card">
            {/* Browser-style top bar */}
            <div className="recon-flow__card-titlebar">
              <span className="recon-flow__dot" />
              <span className="recon-flow__dot" />
              <span className="recon-flow__dot" />
              <span className="recon-flow__card-appname">SOLE AI</span>
            </div>

            <div className="recon-flow__card-body">
              <div className="recon-flow__card-head">
                <h3 className="recon-flow__card-title">Daily Close</h3>
                <div className="recon-flow__card-selectors">
                  <span className="recon-flow__selector">AED ⌄</span>
                  <span className="recon-flow__selector">
                    July 24,2026 ⌄
                  </span>
                </div>
              </div>

              <p className="recon-flow__section-label">Income Sources</p>
              <div className="recon-flow__table">
                {INCOME_ROWS.map((row, i) => (
                  <div key={i} className="recon-flow__table-row">
                    <span className="recon-flow__cell recon-flow__cell--name">
                      {row.name}
                    </span>
                    <span className="recon-flow__cell recon-flow__cell--muted">
                      {row.gross}
                    </span>
                    <span className="recon-flow__cell recon-flow__cell--value">
                      {row.net}
                    </span>
                  </div>
                ))}
              </div>

              <div className="recon-flow__stats">
                {SUMMARY_STATS.map((stat, i) => (
                  <div key={i} className="recon-flow__stat">
                    <span className="recon-flow__stat-label">
                      {stat.label}
                    </span>
                    <span className="recon-flow__stat-value">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="recon-flow__section-label">Exception</p>
              <div className="recon-flow__exception">
                <span className="recon-flow__issue-badge">
                  #1 issue found
                </span>
                <p className="recon-flow__exception-title">
                  NOON-1005 ; Short-paid AED 15.00
                </p>
                <p className="recon-flow__exception-text">
                  The daily total still matched the bank to the dirham.
                  Nothing else flagged it. Sole did — and cited the rows
                  behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReconciliationFlow;