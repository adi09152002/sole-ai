import "./Hero.css";

/* ---------- Small inline icons (no external image files needed) ---------- */

const ShopifyIcon = () => (
  <svg viewBox="0 0 27 31" className="hero__notif-svg" aria-hidden="true">
    <path
      d="M23.7 6.1c0-.2-.2-.4-.4-.4-.2 0-2.1-.2-2.1-.2s-1.4-1.4-1.6-1.5c-.2-.2-.5-.1-.6-.1l-.8.2C17.6 2.7 16.6 1 14.9 1c-.1 0-.2 0-.3.1-.5-.6-1.1-.9-1.7-.9-4.1 0-6.1 5.2-6.7 7.8L3.3 8.6c-.9.3-.9.3-1 1.1L0 27.6l17.6 3.3 9.4-2c0-.1-3.3-22.6-3.3-22.8z"
      fill="#95BF46"
    />
    <path
      d="M23.3 5.7c-.2 0-2.1-.2-2.1-.2s-1.4-1.4-1.6-1.5a.4.4 0 0 0-.2-.1l-1.8 27 9.4-2s-3.3-22.6-3.3-22.8c0-.2-.2-.3-.4-.4z"
      fill="#5E8E3E"
    />
    <path
      d="M14.6 10.9l-1 3.6s-1.1-.5-2.4-.4c-1.9.1-2 1.3-2 1.6.1 1.7 5.4 2.1 5.7 6.9.2 3.7-2 6.3-5.1 6.5-3.8.2-5.9-2-5.9-2l.8-3.4s2.1 1.6 3.8 1.5c1.1-.1 1.5-1 1.5-1.6-.2-2.3-4.4-2.1-4.7-6.6-.3-3.6 2.2-7.3 7.3-7.6 2-.1 3 .5 3 .5z"
      fill="#FFFFFF"
    />
  </svg>
);

const AmazonIcon = () => (
  <svg viewBox="0 0 20 24" className="hero__notif-svg" aria-hidden="true">
    <path
      d="M13.2 12.6c-.6.5-1.5.9-2.7.9-1.7 0-2.6-1-2.6-2.3 0-1.7 1.4-2.6 4-2.9l1.3-.1v-.3c0-.9-.2-1.5-1.4-1.5-1 0-1.6.4-1.8 1.2l-2-.2c.3-1.8 1.9-2.7 3.9-2.7 1.4 0 2.4.3 3 1 .6.6.6 1.3.6 2.4v3c0 .5.1.9.4 1.4h-2.1c-.2-.3-.3-.5-.3-.9z"
      fill="#FFFFFF"
    />
    <path d="M11.9 10.1c-1.4.2-2.1.6-2.1 1.4 0 .6.4 1 1.1 1 .9 0 1.7-.5 1.7-1.7v-.8z" fill="#111111" />
    <path
      d="M2.6 15.7c2.8 2 6.7 3 10.1 3 2.7 0 5.7-.6 7.9-2.1.4-.3.7.1.3.4-2 1.7-5 2.7-8.3 2.7-3.6 0-6.8-1.1-9.3-3.1-.2-.2 0-.4.3-.2z"
      fill="#FF9900"
    />
    <path
      d="M20.1 15.1c-.3-.4-1.7-.2-2.4-.1-.2 0-.2-.2-.1-.3 1.2-.7 3.1-.5 3.3-.3.2.3-.1 2.1-1.1 3-.2.1-.3 0-.3-.1.3-.6.9-2 .6-2.2z"
      fill="#FF9900"
    />
  </svg>
);

const SignalIcon = () => (
  <svg viewBox="0 0 14 9" className="hero__status-icon">
    <rect x="0" y="6" width="2.5" height="3" rx="0.5" fill="#fff" />
    <rect x="3.8" y="4" width="2.5" height="5" rx="0.5" fill="#fff" />
    <rect x="7.6" y="2" width="2.5" height="7" rx="0.5" fill="#fff" />
    <rect x="11.4" y="0" width="2.5" height="9" rx="0.5" fill="#fff" />
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 14 10" className="hero__status-icon">
    <path
      d="M7 9.6a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zM3.6 5.9a5 5 0 0 1 6.8 0l-1.2 1.3a3.2 3.2 0 0 0-4.4 0L3.6 5.9zM.8 2.9a9 9 0 0 1 12.4 0l-1.2 1.3a7.1 7.1 0 0 0-10 0L.8 2.9z"
      fill="#fff"
    />
  </svg>
);

const BatteryIcon = () => (
  <svg viewBox="0 0 25 12" className="hero__status-icon">
    <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="#fff" strokeOpacity="0.4" />
    <rect x="2" y="2" width="17" height="8" rx="1.8" fill="#fff" />
    <rect x="21.5" y="4" width="1.6" height="4" rx="0.8" fill="#fff" fillOpacity="0.5" />
  </svg>
);

/* ---------- Hero ---------- */

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__margin">
        {/* Text block */}
        <div className="hero__content">
          <h1 className="hero__title">Close your day with clarity.</h1>
          <p className="hero__subtitle">
            Money comes from everywhere Sole quietly reconciles it
            <br />
            against your bank , so you only have one thing to approve.
          </p>
          <div className="hero__cta-group">
            <a href="#get-started" className="hero__btn hero__btn--primary">
              Get Started For Free
            </a>
            <a href="#request-access" className="hero__btn hero__btn--secondary">
              Request Access
            </a>
          </div>
        </div>

        {/* Visual composition */}
        <div className="hero__visual">
          {/* Soft background glow blobs */}
          <div className="hero__glow hero__glow--left" aria-hidden="true" />
          <div className="hero__glow hero__glow--right" aria-hidden="true" />

          {/* Decorative arc lines */}
          <svg
            className="hero__arcs"
            viewBox="0 0 1470 738"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle cx="735" cy="687" r="671" fill="none" stroke="#A7B89C" strokeWidth="1" opacity="0.18" />
            <circle cx="735" cy="687" r="666" fill="none" stroke="#A7B89C" strokeWidth="1.1" opacity="0.4" />
          </svg>

          {/* Floating pills */}
          <div className="hero__pill hero__pill--deliveroo">Deliveroo</div>
          <div className="hero__pill hero__pill--cards">Cards</div>
          <div className="hero__pill hero__pill--talabat">Talabat</div>
          <div className="hero__pill hero__pill--marketplaces">Marketplaces</div>

          {/* Dotted connector under Deliveroo */}
          <div className="hero__connector" aria-hidden="true">
            <span className="hero__chevron" />
            <span className="hero__chevron" />
            <span className="hero__chevron" />
            <span className="hero__chevron" />
            <span className="hero__chevron" />
            <span className="hero__chevron" />
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__dot" />
          </div>

          {/* Floating notification cards */}
          <div className="hero__notif hero__notif--shopify-left">
            <div className="hero__notif-icon hero__notif-icon--shopify">
              <ShopifyIcon />
            </div>
            <div className="hero__notif-body">
              <div className="hero__notif-head">
                <span className="hero__notif-name">Shopify</span>
                <span className="hero__notif-time">now</span>
              </div>
              <p className="hero__notif-text">A new sale worth AED 400.00 has been recorded in your store.</p>
            </div>
          </div>

          <div className="hero__notif hero__notif--amazon">
            <div className="hero__notif-icon hero__notif-icon--amazon">
              <AmazonIcon />
            </div>
            <div className="hero__notif-body">
              <div className="hero__notif-head">
                <span className="hero__notif-name">Amazon</span>
                <span className="hero__notif-time">6m ago</span>
              </div>
              <p className="hero__notif-text">A refund totaling AED 400.00 has been processed for a recent order.</p>
            </div>
          </div>

          <div className="hero__notif hero__notif--shopify-right">
            <div className="hero__notif-icon hero__notif-icon--shopify">
              <ShopifyIcon />
            </div>
            <div className="hero__notif-body">
              <div className="hero__notif-head">
                <span className="hero__notif-name">Shopify</span>
                <span className="hero__notif-time">10m ago</span>
              </div>
              <p className="hero__notif-text">A new sale worth AED 400.00 has been recorded in your store.</p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hero__phone">
            <div className="hero__phone-frame">
              <div className="hero__status-bar">
                <span className="hero__time">9:41</span>
                <span className="hero__camera-dot" />
                <div className="hero__status-icons">
                  <SignalIcon />
                  <WifiIcon />
                  <BatteryIcon />
                </div>
              </div>

              <div className="hero__screen">
                <div className="hero__msg hero__msg--1">
                  <div className="hero__msg-head">
                    <span className="hero__msg-dot" />
                    <span className="hero__msg-app">SOLE AI</span>
                    <span className="hero__msg-time">now</span>
                  </div>
                  <p className="hero__msg-title">Daily Close is ready!</p>
                  <p className="hero__msg-text">
                    127 transactions: 4 mismatches
                    <br />
                    AED 8,000 to explain.
                  </p>
                  <div className="hero__msg-actions">
                    <button type="button" className="hero__msg-btn hero__msg-btn--primary">
                      Reconcile Now
                    </button>
                    <button type="button" className="hero__msg-btn hero__msg-btn--secondary">
                      Not Now
                    </button>
                  </div>
                </div>

                <div className="hero__msg hero__msg--2">
                  <div className="hero__msg-head">
                    <span className="hero__msg-dot" />
                    <span className="hero__msg-app">SOLE AI</span>
                    <span className="hero__msg-time">now</span>
                  </div>
                  <p className="hero__msg-title">3 Tabalat payouts need approval</p>
                  <p className="hero__msg-text">
                    AED 9310 net: 31 May- 9 Jun
                    <br />
                    The 19 orders already tie out
                  </p>
                </div>

                <div className="hero__msg hero__msg--3">
                  <div className="hero__msg-head">
                    <span className="hero__msg-dot" />
                    <span className="hero__msg-app">SOLE AI</span>
                    <span className="hero__msg-time">now</span>
                  </div>
                  <p className="hero__msg-title">Refund request</p>
                  <p className="hero__msg-text">Customer on whatsapp wrong item delivered.</p>
                </div>

                <div className="hero__screen-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;