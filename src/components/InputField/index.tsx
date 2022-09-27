import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  info?: string;
  register?: any;
}

export function InputField({ info, register, ...rest }: InputFieldProps) {
  return (
    <div className={styles.container}>
      <input {...rest} {...register} />

      {info && <span>{info}</span>}
    </div>
  );
}
