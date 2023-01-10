import styles from "./WorkExperienceSection.module.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const list: any = [
  {
    name: "Saeha Comms Inc.",
    position: "FrontEnd Developer (Windows)",
    period: "2021 Jan - 2022 May",
    description: [
      "Cooperate with designers to develop user interface with MFC (C++) framework according to Zeplin design software. Ex) Chat Interface and Answer Sheet Interface",
      "Participate in developers' meetings where front and backend developers plan new features",
      "Fix bugs that are listed by the QT team",
      "Version Control System: SVN Tortoise",
    ],
    link: "https://www.saeha.com/main",
    img: "/Saeha-1.png",
  },
  {
    name: "DaDream Inc.",
    position: "Marketing Position",
    period: "2020 Nov - 2021 Jan",
    description: [
      "Manage the company’s home page",
      "Bookkeeping",
      "Online Selling through platforms such as Naver, Kakao, and Market Curly",
    ],
    link: "https://watsso1.cafe24.com/",
    img: "/study.jpg",
  },
  {
    name: "8th Army, US Army",
    position: "Senior Air and Missile Defense KATUSA (Sergeant)",
    period: "2019 April - 2020 Nov",
    description: [
      "Participate in the US-KOR Combined Exercise in 2019, 2020",
      "General Officer level Translation",
      "Cooperate with the 2020 Nakdong River World Peace Culture Festival TF",
    ],
    img: "https://www.reuters.com/resizer/-0TEImTevDccI4tG075fHY_hXAA=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PU3HYPN7FRKSJIH5BMVXQ6A3FI.jpg",
  },
];

const content = list.map((elem: any, idx: number) => {
  const description = elem.description.map((li: string, index : number) => {
    return <li key = {index}>{li}</li>;
  });
  return (
    <div
        key = {elem.name}
      style={{
        flexDirection: idx % 2 == 0 ? "row" : "row-reverse",
      }}
      className={styles.tmp}
    >
      <div className={styles.workinfo}>
        <h2>
          {elem.name}{" "}
          {elem.link ? (
            <a
              href={elem.link}
              style={{ fontStyle: "italic" }}
              target="_blank"
              rel="noreferrer"
            >
              <u>(link)</u>
            </a>
          ) : null}
        </h2>
        <h3 className={styles.position}>{elem.position}</h3>

        <h4>{elem.period}</h4>
        <ul style={{ listStylePosition: "inside", listStyleType: "none" }}>
          {description}
        </ul>
      </div>

      <img src={elem.img} alt="hi" className={styles.img} />
    </div>
  );
});

export default function WorkExperienceSection() {
  const [ref, observer] = useIntersectionObserver((entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > 0) {
        entry.target.animate(
          [
            {
              opacity: 0,
              transform: "translateY(-100px)",
            },
            {
              opacity: 1,
              transform: "translateY(Opx)",
            },
          ],
          { duration: 2000, fill: "forwards", delay: 0, iterations: 1 }
        );
      } else {
        entry.target.animate([{ opacity: 0 }]);
      }
    });
  });

  return (
    <div className={styles.container} ref={ref}>
      <h1>Work Experience</h1>
      {content}
    </div>
  );
}
