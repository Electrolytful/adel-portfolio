import styles from "./index.module.css";

import { useEffect } from "react";

import { useCurrentPage } from "../../context/currentPageContext";

export default function AboutMe() {
  const pageCtx = useCurrentPage();

  useEffect(() => {
    pageCtx.changePage("aboutMe");
  }, []);

  return (
    <>
      <section className={styles.summary}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>Graduate Writer</h2>
          </div>
          <p>
            So, what about me? I am a Law graduate and I am currently studying
            an MA in Creative Writing whilst working as a Personal Trainer in
            London. Previously, I have worked as a teaching assistant and a
            study support assistant within a specialist SEN provision.
          </p>
          <p>
            I have always had an interest in writing and been an avid reader
            ever since I was a child. It was only after completing my
            undergraduate degree in Law that I realised I wanted to pursue my
            creative writing aspirations which led me to undertake an MA at
            City, University of London.
          </p>
          <p>
            Outside of writing, I am a fitness fanatic, so in 2021 I completed
            my personal training qualification and started working as one -
            whilst jointly undertaking my MA.
          </p>
          <p>
            Currently, I am finishing my MA degree, mainly focusing on my
            dissertation, which is the final assessment. This will be the first
            three chapters of my - long in the making - novel titled, The
            Search; an apocalyptic dystopian novel, following three characters
            as they each search for something amidst the ruins of a dying city.
            Revenge, Redemption and a Reason to Live.
          </p>
          <p>
            I hope to complete the manuscript of this in the coming years whilst
            I also pursue other avenues within the writing and publishing
            industry.
          </p>
        </div>
      </section>

      <section className={styles.history}></section>
    </>
  );
}
