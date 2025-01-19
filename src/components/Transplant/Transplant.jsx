import React from 'react';
import styles from './Transplant.module.scss';

const Transplant = () => {
    return (
        <div className={styles.Transplant}>
            <h3 className={styles.TransplantHeader}>Количество пересадок</h3>
            <ul className={styles.TransplantList}>
                <li className={styles.TransplantItem}>
                    <form>
                        <input className={styles.TransplantCheckbox} type="checkbox" />
                    </form>
                    <p>Все</p>
                </li>
                <li className={styles.TransplantItem}>
                    <form>
                        <input className={styles.TransplantCheckbox} type="checkbox" />
                    </form>
                    <p>Без пересадок</p>
                </li>
                <li className={styles.TransplantItem}>
                    <form>
                        <input className={styles.TransplantCheckbox} type="checkbox" />
                    </form>
                    <p>1 пересадка</p>
                </li>
                <li className={styles.TransplantItem}>
                    <form>
                        <input className={styles.TransplantCheckbox} type="checkbox" />
                    </form>
                    <p>2 пересадки</p>
                </li>
                <li className={styles.TransplantItem}>
                    <form>
                        <input className={styles.TransplantCheckbox} type="checkbox" />
                    </form>
                    <p>3 пересадки</p>
                </li>
            </ul>
        </div>
    );
};

export default Transplant;
