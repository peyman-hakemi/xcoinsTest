import {getCoinsList} from 'Api';
import {ExchangeCoins} from 'Components';
import CoinsSlice from 'Data/Slices/CoinsSlice';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors, metrics} from 'Theme';

interface IProps {}

const Exchange = ({}: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = async () => {
    const list = await getCoinsList();
    if (list) {
      dispatch(CoinsSlice.actions.setCoinsList(list));
    }
  };

  return (
    <View style={styles.container}>
      <ExchangeCoins />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: metrics.padding_medium,
    justifyContent: 'center',
  },
});

export default Exchange;
