import styles from "./index.module.css";

import { useCurrentPage } from "../../context/currentPageContext";

import { Profile, Button } from "../../components";

export default function Home() {
  const pageCtx = useCurrentPage();
  pageCtx.changePage("home");

  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <Profile />
        <div className="button">
          <Button content="View my CV" />
        </div>
      </section>

      <section className={styles.works}></section>
    </div>
  );
}
