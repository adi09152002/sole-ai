import type { CSSProperties } from "react";
import amazon from "./assets/amazon.svg";
import imagePhotoroom201 from "./assets/image-photoroom-20-1.svg";
import mobileScreen from "./assets/mobile-screen.svg";
import orbits from "./assets/orbits.svg";
import shopify from "./assets/shopify.svg";
import styles from "./Hero.module.css";

const PHONE_BLUR_LAYERS = [
  { blur: 0, start: "0%", full: "0%" },
  { blur: 2, start: "46%", full: "60%" },
  { blur: 6, start: "58%", full: "71%" },
  { blur: 14, start: "69%", full: "82%" },
  { blur: 26, start: "80%", full: "93%" },
];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles["one-platform-for"]}>Close your day with clarity.</p>
        <div className={styles["container-margin"]}>
          <p className={styles["earn-rewards-and"]}>
            Money comes from everywhere Sole quietly reconciles it against your
            bank , so you only have one thing to approve.
          </p>
        </div>
        <div className={styles.div}>
          <div className={styles.link}>
            <div className={styles["text-wrapper"]}>Get Started For Free</div>
          </div>
          <div className={styles["link-open-lightbox"]}>
            <div className={styles["div-wrapper"]}>
              <div className={styles["text-wrapper-2"]}>Request Access</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["mockup-animation"]}>
        <img
          className={styles["image-photoroom"]}
          alt=""
          src={imagePhotoroom201}
        />
        <img className={styles.orbits} alt="" src={orbits} />
        <div className={styles.cards}>
          <div className={styles.frame} data-ring="0">
            <div className={styles["frame-2"]}>
              <img className={styles["selfhst-amazon"]} alt="Amazon" src={amazon} />
              <div className={styles["frame-4"]}>
                <div className={styles["frame-5"]}>
                  <div className={styles["frame-6"]}>
                    <div className={styles["text-wrapper-3"]}>Amazon</div>
                  </div>
                  <div className={styles["text-wrapper-4"]}>6m ago</div>
                </div>
                <div className={styles["frame-7"]}>
                  <p className={styles.p}>
                    A refund totaling AED 400.00 has been processed for a recent
                    order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["frame-8"]} data-ring="5">
            <div className={styles["frame-2"]}>
              <img
                className={styles["logos-shopify-wrapper"]}
                alt="Shopify"
                src={shopify}
              />
              <div className={styles["frame-4"]}>
                <div className={styles["frame-5"]}>
                  <div className={styles["frame-6"]}>
                    <div className={styles["text-wrapper-3"]}>Shopify</div>
                  </div>
                  <div className={styles["text-wrapper-4"]}>10m ago</div>
                </div>
                <div className={styles["frame-7"]}>
                  <p className={styles.p}>
                    A new sale worth AED 400.00 has been recorded in your store.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["frame-9"]} data-ring="2">
            <div className={styles["frame-10"]}>
              <img className={styles["frame-11"]} alt="Shopify" src={shopify} />
              <div className={styles["frame-12"]}>
                <div className={styles["frame-5"]}>
                  <div className={styles["frame-13"]}>
                    <div className={styles["text-wrapper-5"]}>Shopify</div>
                  </div>
                  <div className={styles["text-wrapper-6"]}>now</div>
                </div>
                <div className={styles["frame-14"]}>
                  <p className={styles["text-wrapper-7"]}>
                    A new sale worth AED 400.00 has been recorded in your store.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["frame-15"]} data-ring="1">
            <div className={styles["text-wrapper-8"]}>Talabat</div>
          </div>
          <div className={styles["frame-16"]} data-ring="4">
            <div className={styles["text-wrapper-8"]}>Cards</div>
          </div>
          <div className={styles["frame-17"]} data-ring="6">
            <div className={styles["text-wrapper-8"]}>Marketplaces</div>
          </div>
          <div className={styles["frame-18"]} data-ring="3">
            <div className={styles["text-wrapper-8"]}>Deliveroo</div>
          </div>
        </div>

        <div className={styles["mobile-screen-flat"]}>
          {PHONE_BLUR_LAYERS.map(({ blur, start, full }) => (
            <img
              key={blur}
              className={styles["phone-layer"]}
              style={
                {
                  "--layer-blur": `${blur}px`,
                  "--layer-start": start,
                  "--layer-full": full,
                } as CSSProperties
              }
              alt=""
              src={mobileScreen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
