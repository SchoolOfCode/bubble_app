import Image from "next/image";
import styles from "./page.module.css";
import Logo from "/public/assets/BubbleLogo.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <Image src={Logo} alt="Logo" />
    </main>
  );
}
