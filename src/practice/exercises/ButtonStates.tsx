import { useState } from 'react'
import styles from './ButtonStates.module.css'

export const ButtonStates = () => {
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setLoading(true)
    window.setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={submit} disabled={loading}>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        {loading ? 'Sending' : 'Request access'}
      </button>
      <p className={styles.caption}>Click it — the loading state lasts 1.5s.</p>
    </div>
  )
}
