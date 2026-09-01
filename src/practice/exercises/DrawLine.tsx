import styles from './DrawLine.module.css'

/**
 * pathLength="1" normalises the path's length, so the dash values in CSS can
 * be written as 1 instead of a number you would otherwise have to measure.
 */
export const DrawLine = () => (
  <svg className={styles.svg} viewBox="0 0 320 120" fill="none" aria-hidden="true">
    <path
      className={styles.path}
      d="M8 96 C 70 96, 70 24, 132 24 S 194 96, 256 96 L 312 96"
      pathLength="1"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle className={styles.dot} cx="312" cy="96" r="6" fill="currentColor" />
  </svg>
)
