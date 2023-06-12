import styles from './index.module.css';

import { useWorks } from '../../context/workContext';

import Work from '../Work';

export default function WorkList() {
    const workCtx = useWorks();

    return (
        <ul>
            {workCtx.works.map((work) => {
                return <li><Work key={work.id} title={work.title} author={work.author} description={work.description} image={work.image} link={work.link} /></li>
            })}
        </ul>
    );
}
