import {View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {exchangeCoinsStyles as styles} from './styles.exchangeCoins';
import {ButtonCustom, InputCurrency, SwapTokens, TokenValues} from 'Components';
import {Strings} from 'Localization';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from 'Data/Store';
import CoinsSlice from 'Data/Slices/CoinsSlice';

interface IProps {
  getCoins: (base: string) => void;
  loading: boolean;
}

export enum ETokenSigns {
  USD = '$',
  EUR = '€',
  GBP = '£',
}

const ExchangeCoins = ({getCoins, loading}: IProps) => {
  const {EXCHANGE} = Strings;

  const dispatch = useDispatch();

  const coinsList = useSelector((state: IState) => state.coins.coinsList);
  const accountBalance = useSelector((state: IState) => state.coins.balance);
  const listBalance = useMemo(
    () =>
      Object.entries(accountBalance).map(([k, v]) => ({token: k, value: v})),
    [accountBalance],
  );

  const [sendToken, setSendToken] = useState({
    token: listBalance[0].token,
    value: '',
  });
  const [receiveToken, setReceiveToken] = useState({
    token: listBalance[1].token,
    value: '',
  });

  useEffect(() => {
    // get new token Prices when base is changing
    getCoins(sendToken.token);
  }, [getCoins, sendToken.token]);

  const onChangeTokenPressed = () => {
    // on toggle token clicked
    setSendToken(receiveToken);
    setReceiveToken(sendToken);
  };

  const changeSendToken = (item: string) => {
    setSendToken({
      value: '',
      token: item,
    });
    setReceiveToken({
      ...receiveToken,
      value: '',
    });
  };

  const changeReceiveToken = (item: string) => {
    setReceiveToken({
      value: '',
      token: item,
    });
    setSendToken({
      ...sendToken,
      value: '',
    });
  };

  const exchangeTokens = () => {
    dispatch(
      CoinsSlice.actions.setBalances({
        ...accountBalance,
        [sendToken.token]:
          accountBalance[sendToken.token] - Number(sendToken.value),
        [receiveToken.token]:
          Number(receiveToken.value) + accountBalance[receiveToken.token],
      }),
    );
    setSendToken({
      ...sendToken,
      value: '',
    });
    setReceiveToken({
      ...receiveToken,
      value: '',
    });
  };

  const onChangePrice = (value: string, type: 'send' | 'receive') => {
    const receiveVal =
      type === 'send'
        ? Number((Number(value) * coinsList[receiveToken.token]).toFixed(2))
        : value;
    const sendVal =
      type === 'receive'
        ? Number((Number(value) / coinsList[receiveToken.token]).toFixed(2))
        : value;
    setSendToken({
      ...sendToken,
      value: sendVal === 0 ? '' : sendVal.toString(),
    });
    setReceiveToken({
      ...receiveToken,
      value: receiveVal === 0 ? '' : receiveVal.toString(),
    });
  };

  const errorSend = accountBalance[sendToken.token] < sendToken.value;

  return (
    <View style={styles.centerContainer}>
      <InputCurrency
        value={sendToken.value}
        onChangeText={(val: string) => onChangePrice(val, 'send')}
        actionSign="-"
        tokenSign={ETokenSigns[sendToken.token as keyof typeof ETokenSigns]}
        selectedToken={sendToken.token}
        title={Strings.YOU_PAY}
        balance={accountBalance[sendToken.token]}
        error={errorSend}
        onChangeToken={changeSendToken}
      />
      <SwapTokens onPress={onChangeTokenPressed} />
      <InputCurrency
        value={receiveToken.value}
        onChangeText={(val: string) => onChangePrice(val, 'receive')}
        actionSign="+"
        tokenSign={ETokenSigns[receiveToken.token as keyof typeof ETokenSigns]}
        selectedToken={receiveToken.token}
        title={Strings.YOU_RECEIVE}
        balance={accountBalance[receiveToken.token]}
        onChangeToken={changeReceiveToken}
        containerStyle={styles.space}
      />
      <TokenValues from={sendToken.token} to={receiveToken.token} />
      <ButtonCustom
        label={EXCHANGE}
        containerStyle={styles.submitContainer}
        onPress={exchangeTokens}
        loading={loading}
        disable={errorSend}
      />
    </View>
  );
};

export default ExchangeCoins;
