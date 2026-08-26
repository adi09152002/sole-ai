import "./RealClose.css";

const ShopifyIcon = () => (
  <svg viewBox="0 0 26 30" className="real-close__brand-svg">
    <path
      fill="#95BF46"
      d="M22.5 5.7s-.2-.1-.5-.1c-.3 0-2.6-.1-2.6-.1s-1.9-1.9-2.1-2.1c-.2-.2-.6-.1-.8 0 0 0-.4.1-1 .3-.1-.3-.3-.7-.5-1.1-.7-1.3-1.7-2-2.9-2h-.3c0-.1-.1-.1-.1-.1-.5-.5-1.1-.8-1.9-.7-1.5.1-3 1.1-4.2 2.8-.9 1.2-1.5 2.7-1.7 3.9-1.7.5-2.9.9-3 .9-.9.3-.9.3-1 1.1C-.5 9.9 0 24.2 0 24.2l17.6 3 8.5-2.1c0 .1-3.4-19.2-3.6-19.4z"
    />
    <path
      fill="#5E8E3E"
      d="M22 5.6c-.3 0-2.6-.1-2.6-.1s-1.9-1.9-2.1-2.1c-.1-.1-.2-.1-.2-.1v21.9l8.5-2.1S22.2 5.7 22 5.6z"
    />
    <path
      fill="#FFFFFF"
      d="m14 10.4-.9 2.9s-1-.5-2.1-.5c-1.7 0-1.8 1.1-1.8 1.3 0 1.5 3.8 2 3.8 5.5 0 2.7-1.7 4.5-4 4.5-2.8 0-4.2-1.7-4.2-1.7l.7-2.4s1.5 1.3 2.8 1.3c.8 0 1.2-.6 1.2-1.1 0-1.9-3.1-2-3.1-5.3 0-2.6 1.9-5.2 5.7-5.2 1.5.1 2 .5 2 .5z"
    />
  </svg>
);

const AmazonIcon = () => (
  <svg viewBox="0 0 20 20" className="real-close__brand-svg">
    <path
      fill="#FF9900"
      d="M11 14.5c-2.2 1.6-5.4 2.4-8.1 2.4-3.9 0-7.4-1.4-10-3.8-.2-.2 0-.5.2-.3 2.9 1.7 6.4 2.7 10 2.7 2.5 0 5.2-.5 7.7-1.6.4-.1.7.3.2.6z"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" className="real-close__hub-svg">
    <path
      d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3"
      stroke="#1B1C1B"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M18 4v4h-4M6 20v-4h4" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const SoleMarkIcon = () => (
  <svg viewBox="0 0 29 24" className="real-close__sole-svg">
    <path d="M8 12c2-3 4-4 6.5-4s4.5 1 6.5 4" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" fill="none" />
    <path d="M7 17c2.5-2.5 5-3.5 7.5-3.5s5 1 7.5 3.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" fill="none" />
    <path d="M9 7c1.8-2 3.6-3 5.5-3s3.7 1 5.5 3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" fill="none" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="real-close__check-svg">
    <circle cx="8" cy="8" r="8" fill="#EFEFEF" opacity="0" />
    <path d="M4 8.5l2.5 2.5L12 5" stroke="#EFEFEF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const RealClose = () => {
  return (
    <section className="real-close">
      <div className="real-close__grid">
        {/* Panel 1: Bring Every Payment Together */}
        <div className="real-close__panel">
          <div className="real-close__panel-text">
            <h3 className="real-close__panel-title">
              Bring Every Payment Together
            </h3>
            <p className="real-close__panel-desc">
              Import bank statements, POS exports, marketplace reports, or
              spreadsheets. Sole works with the financial data you already
              have.
            </p>
          </div>

          <div className="real-close__hub-stage">
            <div className="real-close__hub-glow" aria-hidden="true" />
            <div className="real-close__hub-ring real-close__hub-ring--outer" />
            <div className="real-close__hub-ring real-close__hub-ring--inner" />

            <div className="real-close__hub-node real-close__hub-node--sole">
              <SoleMarkIcon />
            </div>

            <span className="real-close__hub-line real-close__hub-line--1" />
            <span className="real-close__hub-line real-close__hub-line--2" />

            <div className="real-close__hub-node real-close__hub-node--amazon">
              <span className="real-close__hub-node-inner real-close__hub-node-inner--amazon">
                <AmazonIcon />
              </span>
            </div>
            <div className="real-close__hub-node real-close__hub-node--shopify">
              <span className="real-close__hub-node-inner real-close__hub-node-inner--shopify">
                <ShopifyIcon />
              </span>
            </div>
            <div className="real-close__hub-node real-close__hub-node--other">
              <span className="real-close__hub-node-inner real-close__hub-node-inner--refresh">
                <RefreshIcon />
              </span>
            </div>
            <div className="real-close__hub-node real-close__hub-node--tabalat">
              <span className="real-close__hub-node-inner real-close__hub-node-inner--tabalat">
                t
              </span>
            </div>
            <div className="real-close__hub-node real-close__hub-node--dark" />
            <div className="real-close__hub-node real-close__hub-node--blue" />
          </div>
        </div>

        {/* Panel 2: Let Sole Reconcile Everything */}
        <div className="real-close__panel">
          <div className="real-close__panel-text">
            <h3 className="real-close__panel-title">
              Let Sole Reconcile Everything
            </h3>
            <p className="real-close__panel-desc">
              Sole automatically matches transactions across every source,
              detects discrepancies, and prepares the next best action.
            </p>
          </div>

          <div className="real-close__match-stage">
            <div className="real-close__source-row real-close__source-row--faded">
              <span className="real-close__source-icon real-close__source-icon--amazon">
                a
              </span>
              <span className="real-close__source-name">Amazon</span>
              <span className="real-close__source-status">
                <i className="real-close__status-dot" />
                Connected
              </span>
              <span className="real-close__source-amount">AED 400</span>
            </div>

            <div className="real-close__source-row real-close__source-row--card">
              <span className="real-close__source-icon real-close__source-icon--shopify">
                <ShopifyIcon />
              </span>
              <span className="real-close__source-name">Shopify</span>
              <span className="real-close__source-status">
                <i className="real-close__status-dot" />
                Connected
              </span>
              <span className="real-close__source-amount">AED 260</span>
            </div>

            <div className="real-close__source-row real-close__source-row--card">
              <span className="real-close__source-icon real-close__source-icon--tabalat">
                t
              </span>
              <span className="real-close__source-name">Tabalat</span>
              <span className="real-close__source-status">
                <i className="real-close__status-dot" />
                Connected
              </span>
              <span className="real-close__source-amount">AED 260</span>
            </div>

            <div className="real-close__matched-pill">
              <span className="real-close__matched-check">
                <CheckIcon />
              </span>
              Matched
            </div>

            <div className="real-close__bank-row">
              <span className="real-close__bank-label">Bank Statement</span>
              <span className="real-close__bank-amount">AED 260</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Receive Your Daily Close */}
        <div className="real-close__panel">
          <div className="real-close__panel-text">
            <h3 className="real-close__panel-title">
              Receive Your Daily Close
            </h3>
            <p className="real-close__panel-desc">
              Get a verified close with every exception that needs your
              attention, ready to act on in minutes.
            </p>
          </div>

          <div className="real-close__ticket-stage">
            <div className="real-close__ticket real-close__ticket--back real-close__ticket--right">
              <div className="real-close__ticket-titlebar">
                <span className="real-close__ticket-app">SOLE AI</span>
                <span className="real-close__ticket-time">now</span>
              </div>
              <div className="real-close__ticket-body">
                <p className="real-close__ticket-heading">
                  Refund request- order #14471
                </p>
              </div>
            </div>

            <div className="real-close__ticket real-close__ticket--back real-close__ticket--left">
              <div className="real-close__ticket-titlebar">
                <span className="real-close__ticket-app">SOLE AI</span>
                <span className="real-close__ticket-time">now</span>
              </div>
              <div className="real-close__ticket-body">
                <p className="real-close__ticket-heading">
                  Refund request- order #14471
                </p>
              </div>
            </div>

            <div className="real-close__ticket real-close__ticket--front">
              <div className="real-close__ticket-titlebar">
                <span className="real-close__ticket-app">SOLE AI</span>
                <span className="real-close__ticket-time">now</span>
              </div>
              <div className="real-close__ticket-body">
                <p className="real-close__ticket-heading">
                  Refund request- order #14471
                </p>

                <div className="real-close__ticket-table">
                  <div className="real-close__ticket-row">
                    <span className="real-close__ticket-key">Channel</span>
                    <span className="real-close__ticket-value">Tabalat</span>
                  </div>
                  <div className="real-close__ticket-row">
                    <span className="real-close__ticket-key">Amount</span>
                    <span className="real-close__ticket-value">
                      AED 70.45
                    </span>
                  </div>
                  <div className="real-close__ticket-row">
                    <span className="real-close__ticket-key">Reason</span>
                    <span className="real-close__ticket-value">
                      Missing item
                    </span>
                  </div>
                </div>

                <div className="real-close__ticket-note">
                  Refund AED 70.45 to customer wallet, flag vendor for
                  review.
                </div>

                <button type="button" className="real-close__ticket-approve">
                  Approve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealClose;