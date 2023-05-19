import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEntry, IEntryesSlice } from "../../types/types";

const entryesSlice = createSlice({
  name: "entryes",
  initialState: {
    entryes: [],
    selectedEntryId: 0,
  } as IEntryesSlice,
  reducers: {
    addEntry: (state, action: PayloadAction<IEntry>) => {
      state.entryes.push(action.payload);
    },

    deleteEntry: (state, action: PayloadAction<number>) => {
      const entryId = action.payload;
      state.entryes = state.entryes.filter((entry) => entry.id !== entryId);
      state.selectedEntryId = 0;
    },

    selectEntry: (state, action: PayloadAction<number>) => {
      state.selectedEntryId = action.payload;
    },

    changeEntry: (state, action: PayloadAction<IEntry>) => {
      state.entryes.map((entry) => {
        if (entry.id === action.payload.id) {
          entry.head = action.payload.head;
          entry.content = action.payload.content;
        }
        return entry;
      });
    },
  },
  extraReducers: () => {},
});

export const { addEntry, deleteEntry, selectEntry, changeEntry } =
  entryesSlice.actions;
export default entryesSlice.reducer;
