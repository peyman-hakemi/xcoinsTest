import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {InputCurrencyStyles as styles} from './styles.inputCurrency';
import {ChevronIcon} from 'Assets/Icons';
import {mvp} from 'Utils';
import {colors} from 'Theme';
import {Strings} from 'Localization';

interface IProps extends TextInputProps {
  selectedToken: string;
  title: string;
  balance: string;
}

const InputCurrency = ({selectedToken, title, balance, ...props}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.balance}>
        {Strings.BALANCE}
        {balance}
      </Text>
      <TextInput
        placeholder="0.0"
        style={styles.input}
        keyboardType="numeric"
        {...props}
      />
      <TouchableOpacity style={styles.pickerContainer}>
        <Text style={styles.selectedItemText}>{selectedToken}</Text>
        <ChevronIcon
          width={mvp(16)}
          height={mvp(16)}
          fill={colors.regularIcons}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputCurrency;
