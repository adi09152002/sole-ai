import freepikBackground219962 from "./assets/freepik-background-21996-2.svg";
import maskGroup from "./assets/mask-group.svg";
import soleAppiconFinalB from "./assets/sole-appicon-final-b.svg";
import styles from "./FinalCtaFooter.module.css"

export const FinalCtaFooter = () => {
    return (
        <div className={styles["final-cta-footer"]}
        >
            <div className={styles["container"]}
            >
                <div className={styles["cta"]}
                >
                    <img className={styles["mask-group"]}
                        alt="Mask group" src={maskGroup} />
                    <div className={styles["div"]}
                    >
                        <div className={styles["one-platform-for"]}
                        >One clean close. Every day.</div>
                        <div className={styles["container-margin"]}
                        >
                            <p className={styles["earn-rewards-and"]}
                            >
                                Sole is in early development. We&#39;re onboarding a small group
                        of design-partner merchants in the UAE to close their day with
                                us.
                            </p>
                        </div>
                        <div className={styles["container-2"]}
                        >
                            <div className={styles["link"]}
                            >
                                <div className={styles["text-wrapper"]}
                                >Request Early Access</div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={styles["footer"]}
                >
                    <div className={styles["container-3"]}
                    >
                        <div className={styles["container-4"]}
                        >
                            <div className={styles["frame"]}
                            >
                                <div className={styles["logo"]}
                                >
                                    <img
                                        className={styles["sole-appicon-final-b"]}

                                        alt="Sole appicon final b"
                                        src={soleAppiconFinalB}
                                    />
                                    <div className={styles["text-wrapper-2"]}
                                    >Sole</div>
                                </div>
                                <p className={styles["centralize-helps-top"]}
                                >
                                    Developing our MVP · non-custodial · built for MENA merchants
                                </p>
                            </div>
                            <div className={styles["container-5"]}
                            >
                                <div className={styles["container-6"]}
                                >
                                    <div className={styles["div-wrapper"]}
                                    >
                                        <div className={styles["text-wrapper-3"]}
                                        >How it works</div>
                                    </div>
                                    <div className={styles["div-wrapper"]}
                                    >
                                        <div className={styles["text-wrapper-3"]}
                                        >Trust</div>
                                    </div>
                                    <div className={styles["div-wrapper"]}
                                    >
                                        <div className={styles["text-wrapper-3"]}
                                        >Integration</div>
                                    </div>
                                    <div className={styles["div-wrapper"]}
                                    >
                                        <div className={styles["text-wrapper-3"]}
                                        >Security</div>
                                    </div>
                                    <div className={styles["div-wrapper"]}
                                    >
                                        <div className={styles["text-wrapper-3"]}
                                        >Contact</div>
                                    </div>
                                </div>
                                <div className={styles["container-7"]}
                                >
                                    <div className={styles["link-2"]}
                                    >
                                        <div className={styles["text-wrapper-4"]}
                                        >Privacy Policy</div>
                                    </div>
                                    <div className={styles["link-2"]}
                                    >
                                        <div className={styles["text-wrapper-4"]}
                                        >Terms of Service</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["container-8"]}
                        >
                            <div className={styles["container-9"]}
                            >
                                <div className={styles["paragraph"]}
                                >
                                    <p className={styles["p"]}
                                    >© 2026 Sole. All rights reserved.</p>
                                </div>
                            </div>
                            
                        </div>
                        <img
                            className={styles["freepik-background"]}

                            alt="Freepik background"
                            src={freepikBackground219962}
                        />
                    </div>
                </footer>
            </div>
        </div>
    );
};