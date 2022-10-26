import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import albumLibraryReducer from '../components/albumLibrary/albumLibrarySlice';

export default configureStore({
  reducer: {
    counter : counterReducer,
    albumLibrary : albumLibraryReducer,
  },
});