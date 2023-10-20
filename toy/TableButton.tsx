import styles from "./TableButton.module.css";
import { numberWithCommas } from "../library/functions";

export default function TableButton({ number, price }: any) {
  return (
    <div className={styles.container}>
      <h1>{number}</h1>
      {price != 0 ? <h2>{`${numberWithCommas(price)}원`} </h2> : null}
    </div>
  );
}
