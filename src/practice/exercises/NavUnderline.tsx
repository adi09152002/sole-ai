import styles from './NavUnderline.module.css'

const LINKS = ['How it works', 'Trust', 'Integrations']

export const NavUnderline = () => (
  <nav className={styles.nav}>
    {LINKS.map((label) => (
      <a key={label} className={styles.link} href="#">
        {label}
        <span className={styles.underline} aria-hidden="true" />
      </a>
    ))}
  </nav>
)
