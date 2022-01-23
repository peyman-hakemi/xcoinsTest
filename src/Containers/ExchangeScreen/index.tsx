import {getCoinsList} from 'Api';
import {ExchangeCoins} from 'Components';
import CoinsSlice from 'Data/Slices/CoinsSlice';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors, metrics} from 'Theme';

interface IProps {}

const Exchange = ({}: IProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getCoins = async (base: string) => {
    try {
      const list = await getCoinsList(base);
      if (list) {
        dispatch(CoinsSlice.actions.setCoinsList(list));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ExchangeCoins {...{getCoins, loading}} />
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
