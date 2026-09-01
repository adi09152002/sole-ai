import ellipse43705 from "./assets/ellipse-43705.svg";
import ellipse43706 from "./assets/ellipse-43706.svg";
import styles from "./OurApproach.module.css";

export const OurApproach = () => {
    return (
        <div className={styles["our-approach"]}
        >
            <div className={styles["bg-gradient"]}
            >
                <img className={styles["ellipse"]}
                    alt="Ellipse" src={ellipse43705} />
                <img className={styles["img"]}
                    alt="Ellipse" src={ellipse43706} />
            </div>
            <div className={styles["container"]}
            >
                <div className={styles["frame"]}
                >
                    <div className={styles["text-wrapper"]}
                    >OUR APPROACH</div>
                    <div className={styles["div"]}
                    >
                        <div className={styles["heading"]}
                        >
                            <p className={styles["the-platform-will"]}
                            >
                                The platform will evolve. Our approach won&#39;t.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Each row rises on its own timeline, staggered by the stylesheet —
                see "Approach marquee" in OurApproach.module.css. Adding a row
                here needs a matching :nth-child delay rule there. */}
            <div className={styles["marquee"]}
            >
                <div className={`${styles["marquee-row"]} ${styles["marquee-row-highlight"]}`}
                >
                    <div className={styles["teenyicons-tick"]}
                    />
                    <p className={styles["p"]}
                    >
                        We reconcile every channel you sell on, including cash, against
                        your bank
                    </p>
                </div>
                <div className={styles["marquee-row"]}
                >
                    <div className={styles["oui-cross-in-circle"]}
                    />
                    <p className={styles["always-up-to-date"]}
                    >
                        We dont replace your POS or gateway. We stay neutral across
                        all of them
                    </p>
                </div>
                <div className={`${styles["marquee-row"]} ${styles["marquee-row-highlight"]}`}
                >
                    <div className={styles["teenyicons-tick"]}
                    />
                    <p className={styles["p"]}
                    >
                        We reconcile every channel you sell on, including cash, against
                        your bank
                    </p>
                </div>
                <div className={styles["marquee-row"]}
                >
                    <div className={styles["oui-cross-in-circle"]}
                    />
                    <p className={styles["always-up-to-date"]}
                    >
                        We dont replace your POS or gateway. We stay neutral across
                        all of them
                    </p>
                </div>
            </div>
        </div>
    );
};
