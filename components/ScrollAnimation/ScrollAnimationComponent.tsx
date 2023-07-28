import { useRef, useEffect, useState } from "react";
import styles from "./ScrollAnimationComponent.module.css";
import { BsRocket } from "react-icons/bs";
import { BiSolidFlame } from "react-icons/bi";

const rocketKF = [{ transform: "scale(1)" }, { transform: "translateY(4px) scale(0.9)" }, { transform: "translateY(-300px) scale(2)" }];

const rocketOption = {
  duration: 2000,
  iteration: 1,
  easing: "ease-in",
};

function colorMapper(percentage: number) {
  if (percentage > 80) return "skyblue";
  if (percentage > 50) return "orange";
  return "red";
}

function textMapper(percentage: number) {
  if (percentage > 80) return "Thank you!!";
  if (percentage < 55 && percentage > 45) return "Little bit More";
  if (percentage < 5) return "Watch All my Page to Shoot Rocket To The Moon.";
}

export default function ScrollAnimationWrapper() {
  let CLIENT_HEIGHT = 5000;
  const rocket = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const [yPos, setYPos] = useState(0);

  function handleScroll(event: any) {
    function getScrollPercent() {
      var h: any = document.documentElement,
        b: any = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      return Math.round(((h[st] || b[st]) / ((h[sh] || b[sh]) - CLIENT_HEIGHT)) * 100);
    }

    if (percentage < 5 && rocket.current && rocket.current.className == styles.rocketLaunch) {
      console.log(rocket.current.className);
      //rocket.current.animate(rocketKF, rocketOption);
      console.log("rocket fire");
      rocket.current.classList.replace(styles.rocketLaunch, styles.rocketReady);
    }

    if (percentage > 95 && rocket.current && rocket.current.className == styles.rocketReady) {
      console.log(rocket.current.className);
      //rocket.current.animate(rocketKF, rocketOption);
      console.log("rocket fire");
      rocket.current.classList.replace(styles.rocketReady, styles.rocketLaunch);
      console.log(CLIENT_HEIGHT);
    }

    setPercentage(getScrollPercent());
    setYPos(((CLIENT_HEIGHT ? CLIENT_HEIGHT : 0) * percentage) / 150);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    CLIENT_HEIGHT = window.screen.height;
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className={styles.container} style={{ position: "fixed", right: "0px", top: `${yPos}px` }}>
      {rocket.current &&rocket.current.className == styles.rocketReady? <p>{textMapper(percentage)}</p> : null}
        <div className={styles.rocketReady} ref={rocket}>
          {rocket.current &&rocket.current.className == styles.rocketLaunch? <p>{`"Going to the Moon"`}</p>: null}
          <div>
            <BsRocket size="30px" />
          </div>
          <div className={styles.flame}>
            <BiSolidFlame color={colorMapper(percentage)} size={`${10 + (30 * percentage) / 100}`} />
          </div>
        </div>
      </div>
    </>
  );
}
