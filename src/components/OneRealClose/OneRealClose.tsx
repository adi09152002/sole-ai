import Container from "./assets/Container.svg";
import styles from "./OneRealClose.module.css";

export const OneRealClose = () => {
  return (
    <div className={styles["section-art"]}>
 <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.frame}>
          <div className={styles["div-2"]}>
            <div className={styles["one-real-close"]}>/ONE REAL CLOSE</div>
            <p className={styles["the-dirhams-no"]}>
              <span className={styles["text-wrapper"]}>The 15 dirhams </span>
              <span className={styles.span}>no tool could see.</span>
            </p>
          </div>
        </div>
        <div className={styles["frame-2"]}>
          <div className={styles["div-3"]}>
            <div className={styles["div-4"]}>
              <div className={styles["div-wrapper"]}>
                <p className={styles.p}>Know where every dirham went.</p>
              </div>
              <div className={styles.paragraph}>
                <p className={styles["always-up-to-date"]}>
                  Stop silent revenue leaks and see your true cash position
                  before you close the day.
                </p>
              </div>
            </div>
            <div className={styles["div-5"]}>
              <div className={styles["div-wrapper"]}>
                <p className={styles.p}>
                  Understand what your business is really earning.
                </p>
              </div>
              <div className={styles.paragraph}>
                <p className={styles["always-up-to-date"]}>
                  See which channels actually make money—not just the ones
                  generating sales.
                </p>
              </div>
            </div>
            <div className={styles["div-5"]}>
              <div className={styles["div-wrapper"]}>
                <p className={styles.p}>Act while it still matters.</p>
              </div>
              <div className={styles.paragraph}>
                <p className={styles["always-up-to-date"]}>
                  Catch issues before recovery windows expire and close your
                  books in minutes, not nights.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles["text-wrapper-2"]}>Request Access</div>
          </div>
        </div>
      </div>
    </div>
      <img className={styles["container-art"]} alt="" src={Container} />
    </div>
  );
};
