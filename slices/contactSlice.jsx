import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducer: {
    loadMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { loadMessages } = contactSlice.actions;
export const selectMessages = (state) => state.contact;
export default contactSlice.reducer;

// const contactSlice = createSlice({
//   name: "contact",
//   initialState: {
//     messages: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     loadMessagesStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     loadMessagesSuccess(state, action) {
//       state.loading = false;
//       state.messages = action.payload;
//     },
//     loadMessagesFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { loadMessagesStart, loadMessagesSuccess, loadMessagesFailure } =
//   contactSlice.actions;

// export default contactSlice.reducer;
