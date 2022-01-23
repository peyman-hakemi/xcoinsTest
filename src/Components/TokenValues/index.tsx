import {ETokenSigns} from 'Components/ExchangeCoins';
import {IState} from 'Data/Store';
import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {tokenValueStyles as styles} from './styles.tokenValues';

interface IProps {
  from: string;
  to: string;
}

const TokenValues = ({from, to}: IProps) => {
  const coinsList = useSelector((state: IState) => state.coins.coinsList);

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>
        {ETokenSigns[from as keyof typeof ETokenSigns]}
        {coinsList[from]}
        {'  '} = {'  '}
        {ETokenSigns[to as keyof typeof ETokenSigns]}
        {coinsList[to]}
      </Text>
    </View>
  );
};

export default TokenValues;
