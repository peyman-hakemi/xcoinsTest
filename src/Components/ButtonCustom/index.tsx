import {
  Text,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {buttonStyles as styles} from './styles.buttonCustom';
import {colors} from 'Theme';

interface IProps {
  label: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  disable?: boolean;
}

const ButtonCustom = ({
  label,
  containerStyle,
  onPress,
  loading,
  disable,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading || disable}
      style={[styles.container, containerStyle, disable && styles.disable]}>
      {loading ? (
        <ActivityIndicator color={colors.darkText} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
