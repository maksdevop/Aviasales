import styles from "./Transplant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/actions/checkboxActions";

const Transplant = () => {
  const checkboxes = useSelector((state) => state.checkbox.checkboxes);
  const dispatch = useDispatch();
  console.log(checkboxes);

  const handleCheckboxChange = (id) => {
    dispatch(toggleCheckbox(id));
  };

  return (
    <div className={styles.Transplant}>
      <h3 className={styles.TransplantHeader}>Количество пересадок</h3>
      <div className={styles.TransplantItem}>
        {Object.entries(checkboxes).map(([id, checked]) => (
          <label key={id}>
            <input
              className={styles.TransplantCheckbox}
              type="checkbox"
              checked={checked}
              onChange={() => handleCheckboxChange(id)}
            />
            {id}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Transplant;
