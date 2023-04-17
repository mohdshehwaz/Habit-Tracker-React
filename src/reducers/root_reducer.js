import { combineReducers } from "@reduxjs/toolkit";

import { habitReducer } from ".";
const rootReducer = combineReducers({
    habits:habitReducer
});