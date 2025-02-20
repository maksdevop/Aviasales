import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async () => {
    const response = await axios.get(
      "https://aviasales-test-api.kata.academy/search",
    );
    return response.data.searchId;
  },
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (searchId) => {
    const tickets = [];
    let stop = false;

    while (!stop) {
      try {
        const response = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        );
        const data = response.data;

        if (Array.isArray(data.tickets)) {
          tickets.push(...data.tickets);
        } else {
          throw new Error("Некорректный формат данных");
        }

        if (data.stop) {
          stop = true;
          break;
        }
      } catch (error) {
        console.error("Ошибка при получении билетов:", error);
      }
    }
    return { tickets: tickets, stop: true };
  },
);

export const showMoreTickets = createAction("tickets/showMoreTickets");
