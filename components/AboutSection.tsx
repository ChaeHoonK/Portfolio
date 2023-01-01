import styles from "./AboutSection.module.css";
import Button from "./Button";
import Image from "next/image";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function AboutSection() {

  const [ref, observer] = useIntersectionObserver((entries : any) => {
    entries.forEach((entry : any) => {
        if (entry.intersectionRatio > 0) {
        entry.target.style.transition = 'opacity 3s';
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });

  return (
    <div className={styles.container} ref = {ref}>
      <h1>About</h1>
      <h3>I value...</h3>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <Image
            className={styles.filterMint + " " + styles.img}
            src="/fast.svg"
            alt="hi"
            width={200}
            height={100}
          />
          <h3>Speed</h3>
          <p>
            Building Fast interface (3second loading time, 60fr/s) by
            obtimization Html, Css, JavaScript codes
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
            Building Responsive interface so that the application is usable
            throughout any devices
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
          <p>Effective communication is crucial for achieving success in organizations, teams, and even as an individual. It involves not just the use of language, but also includes the right attitude and a strong foundation of knowledge in the relevant field. I always strive to foster connections with my colleagues and ask questions when I don't understand something. I have a strong passion and understanding of web development, as well as a diverse range of industries including business, investment, and insurance. This broad base of knowledge helps me to effectively collaborate with others.

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
          <p>Diversified Experience enables my fast learning curve.</p>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/chae-hoon-kim-4b81b81a5/" target="_blank"><Button text="Check My LinkedIn" /></a>
    </div>
  );
}
