import styles from './ScrollReveal.module.css'

const ROWS = [
  'Bank feed connected',
  'Transactions matched',
  'Exceptions flagged',
  'Ledger updated',
  'Tax position recalculated',
  'Period closed',
]

export const ScrollReveal = () => (
  <div className={styles.scroller}>
    <p className={styles.hint}>Scroll this box ↓</p>
    {ROWS.map((row) => (
      <div key={row} className={styles.row}>
        {row}
      </div>
    ))}
    <p className={styles.hint}>End</p>
  </div>
)
