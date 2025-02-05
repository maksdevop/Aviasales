import {
  fetchSearchId,
  fetchTickets,
  showMoreTickets,
} from "../actions/ticketsActions";

const initialState = {
  searchId: null,
  tickets: [],
  visibleTicketsCount: 5, // Новое состояние
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
        tickets: [...state.tickets, ...action.payload.tickets], // Добавляем новые билеты в массив
        status: action.payload.stop ? "completed" : "idle",
      };
    case fetchSearchId.rejected.type:
    case fetchTickets.rejected.type:
      return {
        ...state,
        status: "failed",
        error: action.error.message,
      };
    case showMoreTickets.type: // Обработка нового экшена
      return {
        ...state,
        visibleTicketsCount: state.visibleTicketsCount + 5,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
