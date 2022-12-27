import styles from "./AboutSection.module.css";
import Button from "./Button";

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <h1>This is About Section</h1>
      <h3>Aiming For...</h3>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          />
          <h3>Fast</h3>
          <p>Diversified Experience is all I need to do thank you so much bye</p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          />
          <h3>Responsive</h3>
          <p>Diversified Experience is all I need to do thank you so much bye</p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          />
          <h3>Communication</h3>
          <p>Diversified Experience is all I need to do thank you so much bye</p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          />
          <h3>Diversified</h3>
          <p>Diversified Experience is all I need to do thank you so much bye</p>
        </div>
        
      </div>
      <Button text="More" />
    </div>
  );
}
