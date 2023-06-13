import styles from "./index.module.css";

import { useCurrentPage } from "../../context/currentPageContext";

import { Profile, Button, WorkList } from "../../components";

export default function Home() {
  const pageCtx = useCurrentPage();
  pageCtx.changePage("home");

  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <Profile />
        <div className="button" onClick={() => window.open("https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1717594/b4f4448de5eaf6336aa90d3c6e1dc9ca.pdf?", "_blank")}>
          <Button content="View my CV" />
        </div>
      </section>
      <section className={styles.works}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            <h1>Works</h1>
          </div>
          <p>
            Below you will find a curated selection of my creative writing &
            non-fiction pieces
          </p>
          <p className={styles.symbol}>◇</p>
          <p>
            Also, if you'd like to learn more about me, please feel free to
            visit the "About Me" page. Alternatively, to get in touch with me,
            kindly utilise the form located under the "Get in Touch" page.
          </p>
        </div>
        <WorkList />
      </section>
    </div>
  );
}
