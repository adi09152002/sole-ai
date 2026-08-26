import "./OurApproach.css";

const CheckIcon = () => (
  <svg viewBox="0 0 21 21" className="oa-icon oa-icon--check">
    <circle cx="10.5" cy="10.5" r="10.5" fill="#FFFFFF" />
    <path
      d="M6 10.7l3 3 6-6.4"
      stroke="#6B8024"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 21 21" className="oa-icon oa-icon--cross">
    <circle cx="10.5" cy="10.5" r="10.5" fill="#000000" />
    <path
      d="M7 7l7 7M14 7l-7 7"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ApproachPair = ({ size = "large" }) => (
  <div className={`oa-pair oa-pair--${size}`}>
    <div className="oa-card oa-card--positive">
      <span className="oa-card__icon">
        <CheckIcon />
      </span>
      <p className="oa-card__text">
        We reconcile every channel you sell on, including cash, against
        your bank
      </p>
    </div>

    <div className="oa-card oa-card--negative">
      <span className="oa-card__icon">
        <CrossIcon />
      </span>
      <p className="oa-card__text oa-card__text--negative">
        We don&rsquo;t replace your POS or gateway. We stay neutral across
        all of them
      </p>
    </div>
  </div>
);

const OurApproach = () => {
  return (
    <section className="oa">
      <div className="oa__glow" aria-hidden="true" />

      <div className="oa__intro">
        <span className="oa__eyebrow">/Our Approach</span>
        <h2 className="oa__heading">
          The platform will evolve.
          <br />
          Our approach won&rsquo;t.
        </h2>
      </div>

      <div className="oa__stack">
        <ApproachPair size="large" />
        <ApproachPair size="small" />
      </div>
    </section>
  );
};

export default OurApproach;