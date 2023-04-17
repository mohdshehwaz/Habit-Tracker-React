import { configureStore } from "@reduxjs/toolkit";
import habits from './index';

const store = configureStore({
    reducer:{
        habits:habits
    }
});
export default store;
