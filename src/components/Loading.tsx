import { LoaderCircle } from "lucide-react";
import React from "react";
import styles from "../App.module.scss";

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = () => {
  return (
    <div className={styles.loading}>
      <LoaderCircle size={36} className="animate-spin" />
    </div>
  );
};
