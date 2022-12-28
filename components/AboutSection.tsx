import styles from "./AboutSection.module.css";
import Button from "./Button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <h1>This is About Section</h1>
      <h3>Aiming For...</h3>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <Image
            className={styles.filterMint + " " + styles.img}
            src="/fast.svg"
            alt="hi"
            width={200}
            height={100}
          />
          <h3>Fast</h3>
          <p>
            Building Fast interface (3second loading time, 60fr/s) by obtimization
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.filterMint + " " + styles.img}
            src="/devices.svg"
            alt="hi"
            width={200}
            height={100}
          />
          <h3>Responsive</h3>
          <p>
            Building Responsive interface so that the application is usable throughout any devices
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.filterMint + " " + styles.img}
            src="/communication.svg"
            alt="hi"
            width={200}
            height={100}
          />
          <h3>Communication</h3>
          <p>
            Cooperate as a team
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.filterMint + " " + styles.img}
            src="/diversity.svg"
            alt="hi"
            width={200}
            height={100}
          />

          <h3>Diversified</h3>
          <p>
            Diversified Experience is my power
          </p>
        </div>
      </div>
      <Button text="More" />
    </div>
  );
}
