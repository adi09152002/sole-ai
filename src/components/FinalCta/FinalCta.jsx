import "./FinalCta.css";

const FinalCta = () => {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" aria-hidden="true" />

      <div className="final-cta__content">
        <h2 className="final-cta__heading">One clean close. Every day.</h2>
        <p className="final-cta__subtitle">
          Sole is in early development. We&rsquo;re onboarding a small group
          of design-partner merchants in the UAE to close their day with
          us.
        </p>
        <a href="/request-access" className="final-cta__button">
          Request Early Access
        </a>
      </div>
    </section>
  );
};

export default FinalCta;