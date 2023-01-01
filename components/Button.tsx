import { CSSProperties, ReactElement } from "react";
import { JsxElement } from "typescript";
import styles from "./Button.module.css";

type props = {
  text: string;
  onClick?: Function;
  className? : string;
  style? : CSSProperties;
};

export default function Button({ style, text, onClick,className }: props): ReactElement {
  console.log('button', style)
  return (
    <button
      className={styles.button + " " + className}
      onClick={() => (onClick ? onClick() : undefined)}
      style = {style}
    >
        {text}
    </button>
  );
}
