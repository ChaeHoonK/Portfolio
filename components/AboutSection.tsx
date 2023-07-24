import styles from "./AboutSection.module.css";
import Button from "./Button";
import Image from "next/image";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

export const fetchAbout = async (lan: string): Promise<string[]> => {
  const response = await fetch(`/language/about_${lan}.json`); // Fetch the data from the public folder

  if (!response.ok) {
    // If HTTP-status is 200-299
    // Throw an error
    throw new Error("HTTP-Error: " + response.status);
  }

  const content = await response.json(); // Parse it as json
  console.log("content in About is", content);

  return content; // Return the projects
};

export default function AboutSection({ lan = null }) {
  const [ref, observer] = useIntersectionObserver((entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.transition = "opacity 3s";
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });

  const intro = "I value...";
  const efficiency = `I believe that one of the keys to success is learning from past mistakes and taking steps to prevent them from happening again.`;
  const user = `I prioritize speed and responsiveness in all of my projects to ensure a seamless and enjoyable experience for the end user.`;
  const diversity = `I am not afraid to try new things and embrace new technology, which allows me to stay up-to-date on industry trends and deliver innovative solutions to my clients.`;
  const communication = "For effective communication strive to foster connections with my colleagues and ask questions when I don't understand something. ";

  const defaultContent = {
    intro,
    efficiency,
    user,
    diversity,
    communication,
  };

  const [content, setContent] = useState<any>(defaultContent);

  useEffect(() => {
    console.log("lan in aboutSection is", lan);
    if (lan) {
      fetchAbout(lan).then((translatedContent) => {
        setContent(translatedContent);
      });
    } else {
      setContent(defaultContent);
    }
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <h1>About Me</h1>
      <h3>{content.intro}</h3>
      <br />
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <Image className={styles.filter + " " + styles.img} src="/fast.svg" alt="hi" width={200} height={100} />
          <h3>Challenge</h3>
          <p>{content.efficiency}</p>
        </div>
        <div className={styles.card}>
          <Image className={styles.filter + " " + styles.img} src="/devices.svg" alt="hi" width={200} height={100} />
          <h3>User</h3>
          <p>{content.user}</p>
        </div>
        <div className={styles.card}>
          <Image className={styles.filter + " " + styles.img} src="/communication.svg" alt="hi" width={200} height={100} />
          <h3>Communication</h3>
          <p>{content.communication}</p>
        </div>
        <div className={styles.card}>
          <Image className={styles.filter + " " + styles.img} src="/diversity.svg" alt="hi" width={200} height={100} />

          <h3>Diversity</h3>
          <p>{content.diversity}</p>
        </div>
      </div>
      <br />
      <a href="https://www.linkedin.com/in/chae-hoon-kim-4b81b81a5/" target="_blank" rel="noreferrer">
        <Button text="Check My LinkedIn" />
      </a>
    </div>
  );
}
