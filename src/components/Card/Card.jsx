import React from 'react';
import styles from './Card.module.scss';
import logoAir from '/LogoAirlines.svg';
const Card = () => {
    return (
        <div className={styles.Card}>
            <div className={styles.CardHeader}>
                <div className={styles.CardPrice}>13 400 Р</div>
                <div className={styles.CardLogo}>
                    <img src={logoAir} alt="logoAir" />
                </div>
            </div>
            <div className={styles.CardInfo}>
                <div className={styles.CardInfoSchedule}>
                    <p>MOW - HKT</p>
                    <p>10:45 - 08:00</p>
                </div>
                <div className={styles.CardInfoTime}>
                    <p>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div className={styles.CardInfoTransplant}>
                    <p>2 пересадки</p>
                    <p>HKG , JNB</p>
                </div>
            </div>
            <div className={styles.CardInfo}>
                <div className={styles.CardInfoSchedule}>
                    <p>MOW - HKT</p>
                    <p>10:45 - 08:00</p>
                </div>
                <div className={styles.CardInfoTime}>
                    <p>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div className={styles.CardInfoTransplant}>
                    <p>2 пересадки</p>
                    <p>HKG , JNB</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
