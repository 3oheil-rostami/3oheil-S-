import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SectionId =
  | "home"
  | "about"
  | "services"
  | "skills"
  | "projects"
  | "contact";

interface UiState {
  mobileNavOpen: boolean;
  activeSection: SectionId;
}

const initialState: UiState = {
  mobileNavOpen: false,
  activeSection: "home",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.mobileNavOpen = action.payload;
    },
    setActiveSection(state, action: PayloadAction<SectionId>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setMobileNavOpen, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
