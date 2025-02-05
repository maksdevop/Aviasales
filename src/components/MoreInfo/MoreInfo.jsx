import { useDispatch } from "react-redux";
import styles from "./MoreInfo.module.scss";
import { showMoreTickets } from "../../store/actions/ticketsActions";
const MoreInfo = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showMoreTickets());
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
