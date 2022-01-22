import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {exchangeCoinsStyles as styles} from './styles.exchangeCoins';
import {InputCurrency, SwapTokens} from 'Components';
import {Strings} from 'Localization';

interface IProps {}

const ExchangeCoins = ({}: IProps) => {
  const [sendSelectedToken, setSendSelectedToken] = useState('USD');
  const [sendValue, setSendValue] = useState('0');
  const [receiveSelectedToken, setReceiveSelectedToken] = useState('GBP');
  const [recieveValue, setRecieveValue] = useState('0');

  const onChangeTokenPressed = () => {
    setSendSelectedToken(receiveSelectedToken);
    setSendValue(recieveValue);

    setReceiveSelectedToken(sendSelectedToken);
    setRecieveValue(sendValue);
  };

  return (
    <View style={styles.centerContainer}>
      <InputCurrency
        value={sendValue}
        onChangeText={setSendValue}
        selectedToken={sendSelectedToken}
        title={Strings.YOU_PAY}
        balance="0"
      />
      <SwapTokens onPress={onChangeTokenPressed} />

      <InputCurrency
        value={recieveValue}
        onChangeText={setRecieveValue}
        selectedToken={receiveSelectedToken}
        title={Strings.YOU_RECEIVE}
        balance="0"
      />
    </View>
  );
};

export default ExchangeCoins;
