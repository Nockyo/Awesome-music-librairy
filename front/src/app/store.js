import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import albumLibraryReducer from '../features/albumLibrary/albumLibrarySlice';

export default configureStore({
  reducer: {
    counter : counterReducer,
    albumLibrary : albumLibraryReducer,
  },
});