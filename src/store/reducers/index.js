import { combineReducers } from "redux";
import sortReducer from "./sortReducer";
import checkboxReducer from "./checkboxReducer";
import ticketsReducer from "./ticketsReducer";
const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
});

export default rootReducer;
