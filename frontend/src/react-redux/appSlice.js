import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logedInUser: null,
  isModalVisible: false,
  modalContent: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initiateCurrentUser: (state, action) => ({
      ...state,
      logedInUser: action.payload,
    }),
    setModalVisibility: (state, action) => ({
      ...state,
      isVisible: action.payload,
    }),
    setModalContent: (state, action) => ({
      ...state,
      content: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { initiateCurrentUser, setModalVisibility, setModalContent } =
  appSlice.actions;

export default appSlice.reducer;
