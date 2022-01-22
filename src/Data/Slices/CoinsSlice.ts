import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ICoinsState {
  // coinsList: IProfileData;
}

const initialState: ICoinsState = {};

const CoinsSlice = createSlice({
  name: 'CoinsSlice',
  initialState,
  reducers: {
    // setProfileData: (state, action: PayloadAction<IProfileData>) => {
    //   state.userData = action.payload;
    // },
  },
});

export default CoinsSlice;
