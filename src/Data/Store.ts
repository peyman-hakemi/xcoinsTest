import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CoinsSlice from './Slices/CoinsSlice';

const RootReducer = combineReducers({
  coins: CoinsSlice.reducer,
});

const store = configureStore({
  reducer: RootReducer,
});

export type IState = ReturnType<typeof RootReducer>;

export default store;
