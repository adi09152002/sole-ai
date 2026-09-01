import styles from './CardGrid.module.css'

const CARDS = [
  { title: 'Invoicing', body: 'Issue, track and match every invoice.' },
  { title: 'Settlement', body: 'Payouts reconciled the day they land.' },
  { title: 'Tax', body: 'Liabilities computed as the ledger moves.' },
]

export const CardGrid = () => (
  <div className={styles.grid}>
    {CARDS.map((card) => (
      <article key={card.title} className={styles.card} tabIndex={0}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardBody}>{card.body}</p>
      </article>
    ))}
  </div>
)
