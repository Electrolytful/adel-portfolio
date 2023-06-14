import styles from "./index.module.css";

import { useEffect } from "react";

import { useCurrentPage } from "../../context/currentPageContext";

export default function GetInTouch() {
  const pageCtx = useCurrentPage();

  useEffect(() => {
    pageCtx.changePage("getInTouch");
  }, []);

  return (
    <section>
      <h1>This is the Get In Touch page!</h1>
    </section>
  );
}
