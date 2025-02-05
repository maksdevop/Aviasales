const initialState = {
  checkboxes: {
    Все: false,
    "Без пересадок": false,
    "1 пересадка": false,
    "2 пересадки": false,
    "3 пересадки": false,
  },
};

const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX: {
      let newCheckboxes = { ...state.checkboxes };

      if (action.payload === "Все") {
        const isChecked = !state.checkboxes["Все"];
        newCheckboxes = Object.fromEntries(
          Object.entries(state.checkboxes).map(([key]) => [key, isChecked]),
        );
      } else {
        newCheckboxes[action.payload] = !state.checkboxes[action.payload];

        if (state.checkboxes["Все"]) {
          newCheckboxes["Все"] = false;
        }

        const allChecked = Object.keys(newCheckboxes).every(
          (key) => key === "Все" || newCheckboxes[key],
        );

        if (allChecked) {
          newCheckboxes["Все"] = true;
        }
      }

      return {
        ...state,
        checkboxes: newCheckboxes,
      };
    }
    default:
      return state;
  }
};

export default checkboxReducer;
