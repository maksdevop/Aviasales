import { createSlice } from "@reduxjs/toolkit";

const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState: {
    Все: false,
    "Без пересадок": false,
    "1 пересадка": false,
    "2 пересадки": false,
    "3 пересадки": false,
  },
  reducers: {
    toggleCheckbox: (state, action) => {
      const { payload } = action;
      if (payload === "Все") {
        const isChecked = !state["Все"];
        Object.keys(state).forEach((key) => (state[key] = isChecked));
      } else {
        state[payload] = !state[payload];

        if (state["Все"]) {
          state["Все"] = false;
        }

        const allChecked = Object.keys(state).every(
          (key) => key === "Все" || state[key],
        );
        if (allChecked) {
          state["Все"] = true;
        }
      }
    },
  },
});

export const { toggleCheckbox } = checkboxesSlice.actions;
export default checkboxesSlice.reducer;
