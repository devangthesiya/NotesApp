import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  text: string;
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Note[],
  reducers: {
    addNote: (state: any[], action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    deleteNote: (state: any[], action: PayloadAction<string>) => {
      return state.filter((note: { id: any; }) => note.id !== action.payload);
    },
    updateNote: (state: any[], action: PayloadAction<Note>) => {
      const { id, text } = action.payload;
      const note = state.find((note: { id: any; }) => note.id === id);
      if (note) {
        note.id = Date.now().toString(),
        note.text = text;
      }
    }
  }
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
