import illustrationCapital from "./assets/illustration-Capital.svg";
import illustrationInventory from "./assets/illustration-Inventory.svg";
import illustrationInvoicing from "./assets/illustration-invoicing.svg";
import illustrationPayroll from "./assets/illustration-payroll.svg";
import illustrationSettlement from "./assets/illustration-Settlement.svg";
import illustrationTax from "./assets/illustration-Tax.svg";
import styles from "./FutureSolutions.module.css";
export const FutureSolutions = () => {
  return (
    <div className={styles["future-solutions"]}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.heading}>
            <div className={styles["text-wrapper"]}>Your money, handled.</div>
          </div>
          <div className={styles.paragraph}>
            <p className={styles["give-a-dedicated"]}>
              <span className={styles.span}>
                Reconciliation is where we start. Sole is becoming the place you
                manage everything that happens after a sale from closing your
                books today to running the money side of your business tomorrow.{" "}
              </span>
              <span className={styles["text-wrapper-2"]}>
                Here&#39;s what&#39;s coming soon...
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["container-2"]}>
        <div className={styles["container-3"]}>
          <div className={styles["container-4"]}>
            <img
              className={styles.img}
              alt="Illustration payroll"
              src={illustrationPayroll}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Payroll</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>
                  Automate payroll from verified financial data.
                </p>
              </div>
            </div>
          </div>
          <div className={styles["container-5"]}>
            <img
              className={styles.img}
              alt="Illustration"
              src={illustrationInventory}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Inventory Forecasting</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>Predict inventory before stock runs low.</p>
              </div>
            </div>
          </div>
          <div className={styles["container-6"]}>
            <img
              className={styles.img}
              alt="Illustration"
              src={illustrationInvoicing}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Invoicing &amp; Payables</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>
                  Manage invoices and supplier payments effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["container-3"]}>
          <div className={styles["container-4"]}>
            <img
              className={styles["img-2"]}
              alt="Illustration"
              src={illustrationSettlement}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Settlement Insights</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>
                  Track settlement trends across every channel.
                </p>
              </div>
            </div>
          </div>
          <div className={styles["container-6"]}>
            <img
              className={styles["illustration-tax"]}
              alt="Illustration tax"
              src={illustrationTax}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Tax &amp; E-invoicing</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>Stay compliant with automated tax records</p>
              </div>
            </div>
          </div>
          <div className={styles["container-6"]}>
            <img
              className={styles["img-2"]}
              alt="Illustration capital"
              src={illustrationCapital}
            />
            <div className={styles.content}>
              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Working Capital</div>
              </div>
              <div className={styles["paragraph-align"]}>
                <p className={styles.p}>
                  Unlock financing from verified business performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};