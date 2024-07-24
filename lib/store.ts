import { combineReducers, configureStore } from "@reduxjs/toolkit";
import issuesReducer from "@/lib/features/issues/issuesSlice";
import uiReducer from "@/lib/features/ui/uiSlice";

const rootReducer = combineReducers({
  issues: issuesReducer,
  ui: uiReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: null,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
