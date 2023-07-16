import styles from "./ContactSection.module.css";
import Button from "./Button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <h1>Contact Me</h1>
      <div style={{ display: "block" }}>
        <h3>Personal : rlacogns7@gmail.com</h3>
        <h3>School : chk2@illinois.edu</h3>
      </div>
      {/* <div>
        <form action="api/sendemail" method="post">
            <label>Name:</label><br/>
            <input type="text" id="name" name="name"/><br/>
            <label >Email:</label><br/>
            <input type="email" id="email" name="email"/><br/>
            <label >Message:</label><br/>
            <textarea id="message" name="message"></textarea><br/>
            <input type="submit" value="Send"/>
        </form>
      </div> */}
      <div>
        <Link href="/">
          <button>English</button>
        </Link>
        <Link href="/ko">
          <button>한국어</button>
        </Link>
        <Link href="/ja">
          <button>日本語</button>
        </Link>
        <Link href="/zh-CN">
          <button>简体字</button>
        </Link>
        <Link href="/zh-TW">
          <button>傳統的</button>
        </Link>
        <Link href="/fr">
          <button>Français</button>
        </Link>
      </div>
    </div>
  );
}
