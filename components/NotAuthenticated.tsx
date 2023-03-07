import { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "../styles.module.css";
import { Capacitor } from "@capacitor/core";

interface AuthProps {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const NotAuthenticated = (props: AuthProps) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Notes</h1>

      <form
        className={styles.form}
        onSubmit={(e) => req(e, props.setAuthenticated)}
      >
        <input
          className={styles.password}
          aria-label="password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className={styles.submit} type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default NotAuthenticated;

const req = async (
  event: FormEvent,
  setAuthenticated: Dispatch<SetStateAction<boolean>>
) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = form.password.value as string;

  const res = await fetch(getUrl(), {
    method: "POST",
    body: data,
  });

  if (res.status === 200) {
    setAuthenticated(true);
  } else {
    alert("Wrong credentials!");
  }
};

const getUrl = (): string => {
  let origin = Capacitor.isNativePlatform()
    ? //! Remove
      "https://dhzdhd-notes.vercel.app/api/auth"
    : "/api/auth";
  return origin;
};
