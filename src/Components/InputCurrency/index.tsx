import {View, TextInput, Text, TextInputProps, ViewStyle} from 'react-native';
import React, {useMemo, useState} from 'react';
import {InputCurrencyStyles as styles} from './styles.inputCurrency';
import {ChevronIcon} from 'Assets/Icons';
import {mvp} from 'Utils';
import {colors} from 'Theme';
import {Strings} from 'Localization';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import {IState} from 'Data/Store';
interface IProps extends TextInputProps {
  selectedToken: string;
  title: string;
  balance: string;
  actionSign?: string;
  tokenSign?: string;
  error?: boolean;
  onChangeToken: (item: string) => void;
  containerStyle?: ViewStyle;
}

const InputCurrency = ({
  selectedToken,
  title,
  balance,
  actionSign,
  tokenSign,
  error,
  onChangeToken,
  containerStyle,
  ...props
}: IProps) => {
  const {EXCEEDS_BALANCE} = Strings;

  const symbolsInState = useSelector((state: IState) => state.coins.balance);
  const dataDropDown = useMemo(
    () => Object.entries(symbolsInState).map(([k]) => ({label: k, value: k})),
    [symbolsInState],
  );

  const renderItem = (item: any) => {
    return (
      <View style={styles.dropDownItemContainer}>
        <Text style={styles.dropDownItemText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        error && styles.errorContainer,
      ]}>
      <Text style={styles.title}>{title}</Text>
      {!!actionSign?.length && (
        <Text style={styles.inputSign}>{actionSign}</Text>
      )}
      <TextInput
        placeholder="0.0"
        style={styles.input}
        keyboardType="decimal-pad"
        {...props}
      />
      {error && <Text style={styles.ExceedsText}>{EXCEEDS_BALANCE}</Text>}
      <View>
        <Dropdown
          placeholderStyle={styles.selectedItemText}
          selectedTextStyle={styles.selectedItemText}
          data={dataDropDown}
          maxHeight={180}
          labelField="label"
          valueField="value"
          placeholder={selectedToken}
          renderItem={renderItem}
          onChange={item => {
            onChangeToken(item.value);
          }}
          renderRightIcon={() => (
            <ChevronIcon
              width={mvp(16)}
              height={mvp(16)}
              fill={colors.regularIcons}
            />
          )}
        />
        <Text style={styles.balance}>
          {Strings.BALANCE}
          <Text
            style={[styles.balanceCounts, error && styles.errorTextBalance]}>
            {tokenSign}
            {balance === '0' ? '0' : parseFloat(Number(balance).toFixed(2))}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default InputCurrency;
