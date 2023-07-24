import styles from "./IntroSection.module.css";
import Button from "./Button";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function IntroSection({ lan = null }) {
  function scrollToForm() {
    document?.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  }

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

  const greeting = {
    en: "Hi, I'm",
    ko: "안녕하세요, 저는",
    ja: "こんにちは、私です",
    fr: "Salut je suis",
    "zh-CN": "你好我是",
    "zh-TW": "你好我是",
  };

  const experienceIn = {
    en: "experience in",
    ko: "다양한 경험을 가지고 있습니다.",
    ja: "についての",
    fr: "de l'expérience en",
    "zh-CN": "经验",
    "zh-TW": "经验",
  };

  const name = {
    en: "Chae Hoon Kim",
    ko: "김채훈 입니다.",
    ja: "キム・チェフン",
    fr: "Chen Hoon Kim",
    "zh-CN": "金彩勋",
    "zh-TW": "金彩勋",
  };

  return (
    <div className={styles.container} ref={ref} style={{ opacity: "0" }}>
      <h1>
        {!lan ? greeting["en"] : greeting[lan]}
        <br />
        <span>{!lan ? name["en"] : name[lan]}</span>
      </h1>
      <h1>{!lan ? experienceIn["en"] : experienceIn[lan]} </h1>
      <h1>
        <span className={styles.job}> </span>
        {/* <span>Full Stack</span> developer */}
      </h1>
      <div style={{display:"flex", flexDirection:"column", rowGap:'3px'}}>
        <Button style={{ color: "white", border: "2px solid white" }} text={"Go to My Works"} onClick={scrollToForm} />
        <a href="https://github.com/ChaeHoonK/Portfolio" target="_blank" rel="noreferrer">
          <Button style={{ color: "white", border: "2px solid white"}} text={"GitHub for Current Website"}></Button>
        </a>
      </div>
      

    </div>
  );
}
