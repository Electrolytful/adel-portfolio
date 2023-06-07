import styles from './index.module.css';

import { useCurrentPage } from '../../context/currentPageContext';

export default function GetInTouch() {
    const pageCtx = useCurrentPage();
    pageCtx.changePage("getInTouch");

    return <section>
        <h1>This is the Get In Touch page!</h1>
    </section>
}
