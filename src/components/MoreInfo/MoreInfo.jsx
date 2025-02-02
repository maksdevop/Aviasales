import styles from "./MoreInfo.module.scss";

const MoreInfo = () => {
  const handleClick = () => {
    console.log("вывести еще 5 билетов");
  };

  return (
    <div className={styles.MoreInfo}>
      <button className={styles.MoreInfoBtn} onClick={handleClick}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default MoreInfo;
