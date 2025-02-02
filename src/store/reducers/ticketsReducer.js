import { fetchSearchId, fetchTickets } from "../actions/ticketsActions";

const initialState = {
  searchId: null,
  tickets: [],
  visibleTicketsCount: 5,
  status: "idle",
  error: null,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchSearchId.pending.type:
    case fetchTickets.pending.type:
      return {
        ...state,
        status: "loading",
      };
    case fetchSearchId.fulfilled.type:
      return {
        ...state,
        searchId: action.payload,
        status: "idle",
      };
    case fetchTickets.fulfilled.type:
      return {
        ...state,
        tickets: action.payload.tickets,
        status: action.payload.stop ? "completed" : "idle",
      };
    case fetchSearchId.rejected.type:
    case fetchTickets.rejected.type:
      return {
        ...state,
        status: "failed",
        error: action.error.message,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
