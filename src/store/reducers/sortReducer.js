const initialState = {
  sortType: "самый дешевый",
};

const SET_SORT_TYPE = "SET_SORT_TYPE";

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};

export default sortReducer;
