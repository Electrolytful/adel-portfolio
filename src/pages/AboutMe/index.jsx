import styles from './index.module.css';

import { useCurrentPage } from '../../context/currentPageContext';

export default function AboutMe() {
    const pageCtx = useCurrentPage();
    pageCtx.changePage("aboutMe");

    return <section>
        <h1>This is the About Me page!</h1>
    </section>
}
