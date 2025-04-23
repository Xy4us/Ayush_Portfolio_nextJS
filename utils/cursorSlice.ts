import { createSlice } from "@reduxjs/toolkit";

interface CursorState {
  type: string; // e.g., "default", "explore"
}

const initialState: CursorState = {
  type: "default", // Default cursor type
};

const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorType: (state, action) => {
      state.type = action.payload; // Update the cursor type
    },
  },
});

export const { setCursorType } = cursorSlice.actions;

export default cursorSlice.reducer;
