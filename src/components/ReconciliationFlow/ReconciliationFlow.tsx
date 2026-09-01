import containerArt from "./assets/container.svg";
import containerArtt from "./assets/container-2.svg";
import containerArttt from "./assets/container-3.svg";
import a from "./assets/a.svg";
import styles from "./ReconciliationFlow.module.css";
export const ReconciliationFlow = () => {
  return (
    <div className={styles["reconciliation-flow"]}>
      <div className={styles.container}>
        <div className={styles["container-wrapper"]}>
          <div className={styles.div}>
            <div className={styles["container-2"]}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["container-3"]}>
                  <div className={styles["text-wrapper"]}>
                    Bring Every Payment Together
                  </div>
                  <p className={styles["centra-shows-exactly"]}>
                    Import bank statements, POS exports, marketplace reports, or
                    spreadsheets. Sole works with the financial data you already
                    have.
                  </p>
                </div>
              </div>
              <div className={styles.artwork}>
                <img className={styles.img} alt="" src={containerArt} />
                <img className={styles["a"]} alt="" src={a} />
              </div>
            </div>
            <div className={styles["container-2"]}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["container-3"]}>
                  <div className={styles["text-wrapper"]}>
                    Let Sole Reconcile Everything
                  </div>
                  <p className={styles["centra-shows-exactly"]}>
                    Sole automatically matches transactions across every source,
                    detects discrepancies, and prepares the next best action.
                  </p>
                </div>
              </div>
              <img className={styles.img} alt="" src={containerArtt} />
            </div>
            <div className={styles["container-2"]}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["container-3"]}>
                  <div className={styles["text-wrapper"]}>
                    Receive Your Daily Close
                  </div>
                  <p className={styles["centra-shows-exactly"]}>
                    Get a verified close with every match explained and only the
                    exceptions that need your attention.
                  </p>
                </div>
              </div>
              <img
                className={styles["container-8"]}
                alt=""
                src={containerArttt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
