import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {ICoinsData} from 'Types/coinsTypes';

interface ICoinsState {
  coinsList: ICoinsData;
}

const initialState: ICoinsState = {
  coinsList: {
    EUR: 0,
    GBP: 0,
    USD: 0,
  },
};

const CoinsSlice: Slice = createSlice({
  name: 'CoinsSlice',
  initialState,
  reducers: {
    setCoinsList: (state, action: PayloadAction<ICoinsData>) => {
      state.coinsList = action.payload;
    },
  },
});

export default CoinsSlice;
