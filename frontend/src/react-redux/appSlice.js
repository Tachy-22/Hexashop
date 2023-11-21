import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logedInUser: null,
  isModalVisible: false,
  modalContent: null,
  myCart: null,
  productInView: null,
  isOnLine: true,
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
    setMyCart: (state, action) => ({
      ...state,
      myCart: action.payload,
    }),
    setProductInView: (state, action) => ({
      ...state,
      productInView: action.payload,
    }),
    setOnlineStatus: (state, action) => ({
      ...state,
      isOnLine: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  initiateCurrentUser,
  setModalVisibility,
  setModalContent,
  setMyCart,
  setProductInView,
  setOnlineStatus,
} = appSlice.actions;

export default appSlice.reducer;
