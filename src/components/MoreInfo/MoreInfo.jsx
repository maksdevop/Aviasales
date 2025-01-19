import React from 'react';
import styles from './MoreInfo.module.scss';

const MoreInfo = () => {
    return (
        <div className={styles.MoreInfo}>
            <button className={styles.MoreInfoBtn}>Показать еще 5 билетов!</button>
        </div>
    );
};

export default MoreInfo;
