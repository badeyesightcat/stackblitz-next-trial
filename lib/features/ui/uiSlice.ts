import { createSlice } from "@reduxjs/toolkit";
import type { DetailViewType } from "@/types/issues";
import { RootState } from "@/lib/store";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    detailViewType: <DetailViewType>0,
  },
  reducers: {
    setDetailViewType: (state, action) => {
      action.type === "ui/setDetailViewType" &&
        (state.detailViewType = action.payload);
    },
  },
});

export const selectDetailViewType = (state: RootState) =>
  state.ui.detailViewType;
export const { setDetailViewType } = uiSlice.actions;
export default uiSlice.reducer;
