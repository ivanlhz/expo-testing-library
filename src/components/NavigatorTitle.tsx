import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { IconButtonProps } from './iconButton';

export interface TitleProps {
  title: string;
  subtitle?: string;
  icon?: React.SFC<IconButtonProps>;
}

export interface Styles {
  container: ViewStyle;
  iconSection: ViewStyle;
  textSection: ViewStyle;
  textTitle: TextStyle;
  textSubtitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconSection: {
    marginRight: 24,
  },
  textSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
  },
  textSubtitle: {
    fontSize: 16,
    fontWeight: '100',
    color: '#6e6e6e',
  },
});

const NavigatorTitle: React.FunctionComponent<TitleProps> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconSection}>{icon}</View>}
      <View style={styles.textSection}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default NavigatorTitle;