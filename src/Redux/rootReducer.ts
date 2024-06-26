import { combineReducers } from 'redux';
import notesReducer from './notesSlice';

const rootReducer = combineReducers({
  notes: notesReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
