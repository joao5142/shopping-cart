import { Spin } from "antd";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Spin data-testid="loading" size="large" />
    </div>
  );
}
