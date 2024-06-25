import { createSlice } from "@reduxjs/toolkit";
import store from "../indexStore";

export type IRootStoreType = ReturnType<typeof store.getState>;

const appSlice = createSlice({
  name: "app",
  initialState: {
    currencyData: {
      eur: "",
      usd: "",
    },
  },
  reducers: {
    setCurrencyValue(state, action) {
      if (action.payload.usd) {
        state.currencyData.usd = action.payload.usd;
      } else {
        state.currencyData.usd = action.payload.eur
          ? String(Number(action.payload.eur) * 0.93)
          : "";
      }

      if (action.payload.eur) {
        state.currencyData.eur = action.payload.eur;
      } else {
        state.currencyData.eur = action.payload.usd
          ? String(Number(action.payload.usd) * 1.07)
          : "";
      }
    },
  },
});

export const { setCurrencyValue } = appSlice.actions;

export default appSlice.reducer;
