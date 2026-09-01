import styles from './HeroStagger.module.css'

export const HeroStagger = () => (
  <div className={styles.hero}>
    <h3 className={styles.headline}>Close the books in a day.</h3>
    <p className={styles.subhead}>
      Reconciliation, settlement and tax — reconciled continuously, not at month end.
    </p>
    <button className={styles.cta}>Request access</button>
  </div>
)
