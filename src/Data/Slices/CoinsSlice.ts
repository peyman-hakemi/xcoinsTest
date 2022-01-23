import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {IBalanceData, ICoinsData} from 'Types/coinsTypes';

interface ICoinsState {
  coinsList: ICoinsData;
  balance: IBalanceData;
}

const initialState: ICoinsState = {
  coinsList: {
    EUR: 0,
    GBP: 0,
    USD: 0,
  },
  balance: {
    USD: 200,
    EUR: 150,
    GBP: 10,
  },
};

const CoinsSlice: Slice = createSlice({
  name: 'CoinsSlice',
  initialState,
  reducers: {
    setCoinsList: (state, action: PayloadAction<ICoinsData>) => {
      state.coinsList = action.payload;
    },
    setBalances: (state, action: PayloadAction<ICoinsData>) => {
      state.balance = action.payload;
    },
  },
});

export default CoinsSlice;
