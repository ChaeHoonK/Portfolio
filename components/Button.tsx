import { CSSProperties, ReactElement } from "react";
import { JsxElement } from "typescript";
import styles from "./Button.module.css";

type props = {
  text: string;
  onClick?: Function;
  className? : string;
  style? : CSSProperties;
  clicked? : boolean;
  disabled? : boolean;
};

export default function Button({ style, text, onClick,className,clicked,disabled }: props): ReactElement {
  return (
    <button
      className={(clicked? styles['buttonClicked']:styles.button) + " " + className}
      onClick={() => (onClick ? onClick() : undefined)}
      style = {style}
      disabled = {disabled}
    >
        {text}
    </button>
  );
}
