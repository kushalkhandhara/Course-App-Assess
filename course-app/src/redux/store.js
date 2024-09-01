import { configureStore } from '@reduxjs/toolkit';
import courseReducer from "./studentSlice";

const store = configureStore({
    reducer: {
      enrollCourse: courseReducer,
    },
  });
  
export default store;