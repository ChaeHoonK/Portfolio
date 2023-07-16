import styles from "./WorkExperienceSection.module.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

const list: any = [
  {
    name: "University of Illinois at Urbana-Champaign",
    position: "Major:Actuarial Science/ Minor: Computer Science",
    period: "Graduated in May 2023",
    description: [
      "Prominent in Calculus, Statistics, Risk Management, Economics, Accounting, Finance, and Computer Science",
      "Web Development Team Leader in Korean Coding Club managing various web-based projects.",
    ],
    img: "/grad2.jpg",
  },
  {
    name: "StartUp - Baggume",
    position: "Founder",
    period: "May 2021 - May 2022",
    description: [
      "Secured $5000 in startup funding from Korean Government and gained education in diverse business concepts such as marketing, entrepreneurship, and basic financial management.",
      "Developed Application Prototyping with Figma, wrote Business Plan for investment",
      "End-to-end business experience",
    ],
    img: "/startup.jpg",
  },
  {
    name: "Saeha Comms Inc.",
    position: "FrontEnd Developer (Windows)",
    period: "Jan 2021  - Apr 2021",
    description: [
      "Cooperate with designers to develop user interface with MFC (C++) framework according to Zeplin design software. Ex) Chat Interface and Answer Sheet Interface.",
      "Participate in developers' meetings where front and backend developers plan new features.",
      "Fix bugs that are listed by the QT team.",
      "Version Control System: SVN Tortoise.",
    ],
    link: "https://www.saeha.com/main",
    img: "/Saeha-1.png",
  },
  {
    name: "DaDream Inc.",
    position: "Marketing Position",
    period: "Nov 2020 - Jan 2021 ",
    description: ["Manage the company’s home page.", "Bookkeeping.", "Online Selling through platforms such as Naver, Kakao, and Market Curly."],
    link: "https://watsso1.cafe24.com/",
    img: "/study.jpg",
  },
  {
    name: "8th Army, US Army",
    position: "Senior Air and Missile Defense KATUSA (Sergeant)",
    period: "April 2019 - Nov 2020",
    description: ["Participate in the US-KOR Combined Exercise in 2019, 2020.", "General Officer level Translation.", "Cooperate with the 2020 Nakdong River World Peace Culture Festival TF."],
    img: "https://www.reuters.com/resizer/-0TEImTevDccI4tG075fHY_hXAA=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PU3HYPN7FRKSJIH5BMVXQ6A3FI.jpg",
  },
];

function makeContent(list: any) {
  const content = list.map((elem: any, idx: number) => {
    const description = elem.description.map((li: string, index: number) => {
      return <li key={index}>{li}</li>;
    });
    return (
      <div
        key={elem.name}
        style={{
          flexDirection: idx % 2 == 0 ? "row" : "row-reverse",
        }}
        className={styles.tmp}
      >
        <div className={styles.workinfo}>
          <h2>
            {elem.name}{" "}
            {elem.link ? (
              <a href={elem.link} style={{ fontStyle: "italic" }} target="_blank" rel="noreferrer">
                <u>(link)</u>
              </a>
            ) : null}
          </h2>
          <h3 className={styles.position}>{elem.position}</h3>

          <h4>{elem.period}</h4>
          <ul style={{ listStylePosition: "inside", listStyleType: "disc" }}>{description}</ul>
        </div>

        <img src={elem.img} alt="hi" className={styles.img} />
      </div>
    );
  });
  return content;
}

const content = list.map((elem: any, idx: number) => {
  const description = elem.description.map((li: string, index: number) => {
    return <li key={index}>{li}</li>;
  });
  return (
    <div
      key={elem.name}
      style={{
        flexDirection: idx % 2 == 0 ? "row" : "row-reverse",
      }}
      className={styles.tmp}
    >
      <div className={styles.workinfo}>
        <h2>
          {elem.name}{" "}
          {elem.link ? (
            <a href={elem.link} style={{ fontStyle: "italic" }} target="_blank" rel="noreferrer">
              <u>(link)</u>
            </a>
          ) : null}
        </h2>
        <h3 className={styles.position}>{elem.position}</h3>

        <h4>{elem.period}</h4>
        <ul style={{ listStylePosition: "inside", listStyleType: "disc" }}>{description}</ul>
      </div>

      <img src={elem.img} alt="hi" className={styles.img} />
    </div>
  );
});

export const fetchWorkDescription = async (lan: string): Promise<string[][]> => {
  const response = await fetch(`/language/descriptions_${lan}.json`); // Fetch the data from the public folder

  if (!response.ok) {
    // If HTTP-status is 200-299
    // Throw an error
    throw new Error("HTTP-Error: " + response.status);
  }

  const content = await response.json(); // Parse it as json
  console.log("content in Work Experience is", content);

  const list_copied = JSON.parse(JSON.stringify(list));
  for (let i = 0; i < list_copied.length; i++) {
    list_copied[i].description = content[i];
  }

  return list_copied; // Return the projects
};

export default function WorkExperienceSection({ lan = null }) {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (lan) {
      fetchWorkDescription(lan).then((result) => {
        console.log("lan", lan);
        console.log("result", result);
        setContent(result);
      });
    } else {
      setContent(list);
    }
  }, [content]);

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
      <h1>Career/Experience</h1>
      <br />
      <ul>{content ? makeContent(content) : null}</ul>
    </div>
  );
}
