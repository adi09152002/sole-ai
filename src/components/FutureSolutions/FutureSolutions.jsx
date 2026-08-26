import "./FutureSolutions.css";

import payrollIcon from "../../assets/Illustration-Payroll.svg";
import inventoryIcon from "../../assets/Illustration-Inventory.svg";
import invoicingIcon from "../../assets/Illustration-invoicing.svg";
import settlementIcon from "../../assets/Illustration-Settlement.svg";
import taxIcon from "../../assets/Illustration-Tax.svg";
import capitalIcon from "../../assets/Illustration-Capital.svg";

const CARDS = [
  {
    icon: payrollIcon,
    title: "Payroll",
    text: "Automate payroll from verified financial data.",
    tint: false,
  },
  {
    icon: inventoryIcon,
    title: "Inventory Forecasting",
    text: "Predict inventory before stock runs low.",
    tint: true,
  },
  {
    icon: invoicingIcon,
    title: "Invoicing & Payables",
    text: "Manage invoices and supplier payments effortlessly.",
    tint: false,
  },
  {
    icon: settlementIcon,
    title: "Settlement Insights",
    text: "Track settlement trends across every channel.",
    tint: false,
  },
  {
    icon: taxIcon,
    title: "Tax & E-invoicing",
    text: "Stay compliant with automated tax records",
    tint: false,
  },
  {
    icon: capitalIcon,
    title: "Working Capital",
    text: "Unlock financing from verified business performance.",
    tint: false,
  },
];

const FutureSolutions = () => {
  return (
    <section className="fs">
      <div className="fs__intro">
        <h2 className="fs__heading">Your money, handled.</h2>
        <p className="fs__subtitle">
          Reconciliation is where we start. Sole is becoming the place you
          manage everything that happens after a sale from closing your
          books today to running the money side of your business tomorrow.
          <br />
          <strong className="fs__subtitle-strong">
            Here&rsquo;s what&rsquo;s coming soon&hellip;
          </strong>
        </p>
      </div>

      <div className="fs__grid">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`fs-card ${card.tint ? "fs-card--tint" : ""}`}
          >
            <img
              src={card.icon}
              alt=""
              aria-hidden="true"
              className="fs-card__icon"
            />
            <div className="fs-card__content">
              <h3 className="fs-card__title">{card.title}</h3>
              <p className="fs-card__text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureSolutions;