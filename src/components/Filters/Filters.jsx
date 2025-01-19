import React from 'react';
import styles from './Filters.module.scss';
const Filters = () => {
    return (
        <div>
            <ul className={styles.FiltersList}>
                <li className={`${styles.FiltersItem} ${styles.FiltersActive}`}>самый дешевый</li>
                <li className={styles.FiltersItem}>самый быстрый</li>
                <li className={styles.FiltersItem}>оптимальный</li>
            </ul>
        </div>
    );
};

export default Filters;
