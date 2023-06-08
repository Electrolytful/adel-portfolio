import styles from "./index.module.css";

import { useCurrentPage } from "../../context/currentPageContext";

import { Profile } from "../../components";

export default function Home() {
  const pageCtx = useCurrentPage();
  pageCtx.changePage("home");

  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <Profile />
      </section>

      <section className={styles.works}></section>
    </div>
  );
}
