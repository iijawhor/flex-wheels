import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  searchResult: [],
  startDate: "",
  endDate: ""
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    searchData: (state, action) => {
      state.searchResult = action.payload;
    },
    searchStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    searchEndDate: (state, action) => {
      state.endDate = action.payload;
    }
  },
  prepareAction: (payload) => ({ payload })
});
export const { searchQuery, searchData, searchStartDate, searchEndDate } =
  searchSlice.actions;
export default searchSlice.reducer;
