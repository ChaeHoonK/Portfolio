import { ReactElement } from "react";
import { JsxElement } from "typescript";
import styles from "./Button.module.css";

type props = {
  text: string;
  onClick?: Function;
};

export default function Button({ text, onClick }: props): ReactElement {
  return (
    <button
      className={styles.button}
      onClick={() => (onClick ? onClick() : undefined)}
    >
        {text}
    </button>
  );
}
