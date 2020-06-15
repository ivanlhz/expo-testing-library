import { Entypo, Octicons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export interface IconButtonProps {
  name: string;
  size?: number;
  color?: string;
  type?: 'entypo' | 'octicons' | 'ionicons';
  onPress?: (e: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  name,
  size = 24,
  color = 'black',
  onPress,
  type = 'entypo',
}) => {
  return (
    <TouchableOpacity
      testID="icon-button"
      onPress={onPress}
      style={styles.container}
    >
      {type === 'entypo' && <Entypo name={name} size={size} color={color} />}
      {type === 'octicons' && (
        <Octicons name={name} size={size} color={color} />
      )}
      {type === 'ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;