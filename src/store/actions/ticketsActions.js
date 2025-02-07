import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async () => {
    const response = await fetch(
      "https://aviasales-test-api.kata.academy/search",
    );
    const data = await response.json();
    return data.searchId;
  },
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (searchId) => {
    const tickets = [];
    let stop = false;

    while (!stop && tickets.length < 5) {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      const data = await response.json();

      if (Array.isArray(data.tickets)) {
        tickets.push(...data.tickets);
      } else {
        throw new Error("Некорректный формат данных");
      }
      stop = data.stop;
    }

    return { tickets: tickets, stop: true };
  },
);

export const showMoreTickets = createAction("tickets/showMoreTickets");
