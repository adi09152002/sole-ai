import upload from "./assets/upload.svg";
import upload2 from "./assets/drag-files.svg";
import upload3 from "./assets/batch-upload.svg";
import upload4 from "./assets/scanning-files.svg";
import upload5 from "./assets/upload-complete.svg";
import upload6 from "./assets/scanning-complete.svg";
import upload7 from "./assets/runtime.svg";
import upload8 from "./assets/results.svg";
import styles from "./SimpleFlow.module.css";


const FLOW_ILLUSTRATIONS = [
  upload,
  upload2,
  upload3,
  upload4,
  upload5,
  upload6,
  upload7,
  upload8,
];
 
const SECONDS_PER_SLIDE = 2.75;
 
export const SimpleFlow = () => {
  const totalDuration = FLOW_ILLUSTRATIONS.length * SECONDS_PER_SLIDE;
 
  return (
    <div className={styles["simple-flow"]}>
      <div className={styles["art-slideshow"]}>
        {FLOW_ILLUSTRATIONS.map((src, index) => (
          <img
            key={index}
            className={styles["svg-slide"]}
            style={{
              animationDelay: `-${totalDuration - index * SECONDS_PER_SLIDE}s`,
              animationDuration: `${totalDuration}s`,
            }}
            alt=""
            src={src}
          />
        ))}
      </div>
    </div>
  );
};