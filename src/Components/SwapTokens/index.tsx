import {View} from 'react-native';
import React from 'react';
import {swapTokensStyles as styles} from './styles.swapTokens';
import {SwapIcon} from 'Assets/Icons';
import {mvp} from 'Utils';

interface IProps {
  onPress: () => void;
}

const SwapTokens = ({onPress}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfCircle} />
      <SwapIcon width={mvp(20)} height={mvp(20)} onPress={onPress} />
      <View style={styles.halfCircleRight} />
    </View>
  );
};

export default SwapTokens;
