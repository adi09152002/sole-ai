import container from './assets/container.svg'
import logo from './assets/logo.svg'
import styles from './Header.module.css'

/**
 * Anima emits kebab-case class names, and Vite exports them from the CSS
 * module under those exact keys — styles['link-pricing-page'], not
 * styles.linkPricingPage. Index with brackets so the CSS files can stay
 * byte-identical to Anima's output on every re-export.
 */

const NAV_LINKS = ['How it works', 'Trust', 'Integrations']

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['container-margin']}>
        <div className={styles.container}>
          <div className={styles['link-sole-hero']}>
            <img className={styles['logo-lockup']} alt="Sole" src={logo} />
          </div>
          <div className={styles.navigation}>
            <div className={styles.div}>
              {NAV_LINKS.map((label) => (
                <div key={label} className={styles['link-pricing-page']}>
                  <div className={styles['div-wrapper']}>
                    <div className={styles['text-wrapper-2']}>{label}</div>
                  </div>
                </div>
              ))}
              <button className={styles.button}>
                <div className={styles['container-2']}>
                  <img className={styles.img} alt="" src={container} />
                  <div className={styles['container-3']}>
                    <div className={styles['text-wrapper-3']}>English</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.div}>
              <div className={styles['link-request-access']}>
                <div className={styles['text-wrapper-4']}>Request Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
