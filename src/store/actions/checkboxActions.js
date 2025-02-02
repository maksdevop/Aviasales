export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

export const toggleCheckbox = (checkboxId) => ({
  type: TOGGLE_CHECKBOX,
  payload: checkboxId,
});
