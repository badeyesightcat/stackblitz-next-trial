import { createSlice } from "@reduxjs/toolkit";
import type { DetailViewVisibility, DetailViewSize } from "@/types/ui";
import { RootState } from "@/lib/store";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    detailViewVisibility: <DetailViewVisibility>0,
    detailViewSize: <DetailViewSize>0,
  },
  reducers: {
    setDetailViewVisibility: (state, action) => {
      action.type === "ui/setDetailViewVisibility" &&
        (state.detailViewVisibility = action.payload);
    },
    setDetailViewSize: (state, action) => {
      action.type === "ui/setDetailViewSize" &&
        (state.detailViewSize = action.payload);
    },
  },
});

export const selectDetailViewVisibility = (state: RootState) =>
  state.ui.detailViewVisibility;
export const selectDetailViewSize = (state: RootState) =>
  state.ui.detailViewSize;
export const { setDetailViewVisibility, setDetailViewSize } = uiSlice.actions;
export default uiSlice.reducer;
