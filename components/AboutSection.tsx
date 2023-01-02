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
          <h3>Efficiency</h3>
          <p>
          I understand that speed does not always equate to quality. For me, it's about ensuring that my work is accurate and free of errors. I believe that one of the keys to success is learning from past mistakes and taking steps to prevent them from happening again. This mindset allows me to not only deliver top-notch work, but also continuously improve my skills and knowledge. In addition, I understand the value of hard work and am willing to put in the labor and dedication necessary to produce exceptional results. If you want a developer who is committed to excellence and continuous improvement, I'm the perfect fit for your project.
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
          <h3>User</h3>
          <p>
          I prioritize speed and responsiveness in all of my projects to ensure a seamless and enjoyable experience for the end user. In addition, I value consensus and believe that effective communication and collaboration are key to delivering successful projects. If you want a developer who puts the needs of the end user first and values the importance of teamwork, I'm the perfect fit for your project.
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
          <p>As a full-stack developer, I am constantly seeking new perspectives and opportunities to develop new skills and knowledge. I am not afraid to try new things and embrace new technology, which allows me to stay up-to-date on industry trends and deliver innovative solutions to my clients. If you want a developer who is always looking for ways to improve and grow, I'm the perfect fit for your project.</p>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/chae-hoon-kim-4b81b81a5/" target="_blank"><Button text="Check My LinkedIn" /></a>
    </div>
  );
}
